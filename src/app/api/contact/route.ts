import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const rateLimitMap = new Map();

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const windowMs = 10 * 60 * 1000; 
    const maxRequests = 5; 

    if (!rateLimitMap.has(ip)) {
        rateLimitMap.set(ip, []);
    }

    const requests = rateLimitMap.get(ip);
    const validRequests = requests.filter((time: number) => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
        return false; 
    }

    validRequests.push(now);
    rateLimitMap.set(ip, validRequests);
    return true;
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function sanitizeInput(input: string): string {
    return input
        .replace(/[<>]/g, '') 
        .replace(/javascript:/gi, '') 
        .trim();
}

export async function POST(request: NextRequest) {
    try {
        const forwarded = request.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again in 10 minutes.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { name, email, company, projectType, budget, timeline, message } = body;

        if (!name || !email || !projectType || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, projectType, and message are required.' },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Invalid email format.' },
                { status: 400 }
            );
        }

        const sanitizedData = {
            name: sanitizeInput(name),
            email: sanitizeInput(email),
            company: company ? sanitizeInput(company) : '',
            projectType: sanitizeInput(projectType),
            budget: budget ? sanitizeInput(budget) : '',
            timeline: timeline ? sanitizeInput(timeline) : '',
            message: sanitizeInput(message)
        };

        if (sanitizedData.message.length < 10) {
            return NextResponse.json(
                { error: 'Message must be at least 10 characters long.' },
                { status: 400 }
            );
        }

        if (sanitizedData.message.length > 2000) {
            return NextResponse.json(
                { error: 'Message must be less than 2000 characters.' },
                { status: 400 }
            );
        }

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error('Missing email configuration in environment variables');
            return NextResponse.json(
                { error: 'Email service is not configured. Please try again later.' },
                { status: 500 }
            );
        }

        let transporter;

        const emailProvider = process.env.EMAIL_PROVIDER || 'gmail';

        switch (emailProvider.toLowerCase()) {
            case 'gmail':
                transporter = nodemailer.createTransport({
                    service: 'gmail',
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false, 
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS, 
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });
                break;

            case 'outlook':
                transporter = nodemailer.createTransport({
                    service: 'hotmail',
                    host: 'smtp-mail.outlook.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });
                break;

            case 'yahoo':
                transporter = nodemailer.createTransport({
                    service: 'yahoo',
                    host: 'smtp.mail.yahoo.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });
                break;

            case 'smtp':
                // Custom SMTP configuration
                transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: parseInt(process.env.SMTP_PORT || '587'),
                    secure: process.env.SMTP_SECURE === 'true', 
                    auth: {
                        user: process.env.SMTP_USER || process.env.EMAIL_USER,
                        pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });
                break;

            default:
                // Default to Gmail
                transporter = nodemailer.createTransport({
                    service: 'gmail',
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });
        }

        // Verify transporter configuration
        try {
            await transporter.verify();
        } catch (verifyError) {
            console.error('SMTP verification failed:', verifyError);
            return NextResponse.json(
                { error: 'Email service configuration error. Please try again later.' },
                { status: 500 }
            );
        }

        const currentDate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        // Enhanced email content for the team with beautiful responsive design
        const teamEmailContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Project Inquiry - DevSomeware</title>
                <!--[if mso]>
                <noscript>
                    <xml>
                        <o:OfficeDocumentSettings>
                            <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                </noscript>
                <![endif]-->
            </head>
            <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; line-height: 1.6;">
                <div style="width: 100%; max-width: 640px; margin: 0 auto; padding: 20px; box-sizing: border-box;">
                    
                    <!-- Header with Gradient -->
                    <div style="background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); background-size: 200% 200%; animation: gradientShift 6s ease infinite; padding: 40px 30px; border-radius: 20px; text-align: center; margin-bottom: 30px; box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(255,255,255,0.1); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); animation: float 8s ease-in-out infinite;"></div>
                        <div style="position: relative; z-index: 2;">
                            <h1 style="color: white; margin: 0; font-size: clamp(24px, 5vw, 36px); font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 8px;">🚀 New Project Inquiry</h1>
                            <p style="color: rgba(255,255,255,0.95); margin: 0; font-size: clamp(14px, 3vw, 18px); font-weight: 500;">DevSomeware Contact Form</p>
                            <div style="width: 60px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 2px; margin: 20px auto; backdrop-filter: blur(10px);"></div>
                        </div>
                    </div>
                    
                    <!-- Contact Information Card -->
                    <div style="background: white; padding: 30px; border-radius: 20px; margin-bottom: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02); border-left: 6px solid #8b5cf6; position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%); border-radius: 50%; transform: translate(30px, -30px);"></div>
                        <h2 style="color: #1e293b; margin: 0 0 25px 0; font-size: clamp(20px, 4vw, 26px); font-weight: 700; display: flex; align-items: center; gap: 10px; position: relative; z-index: 2;">
                            <span style="background: linear-gradient(135deg, #8b5cf6, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">👤</span>
                            Contact Information
                        </h2>
                        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 25px; border-radius: 15px; position: relative; z-index: 2;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 15px 0; font-weight: 600; color: #64748b; width: 140px; font-size: clamp(13px, 3vw, 15px); vertical-align: top;">Full Name:</td>
                                    <td style="padding: 15px 0; color: #1e293b; font-size: clamp(14px, 3vw, 18px); font-weight: 600; vertical-align: top;">${sanitizedData.name}</td>
                                </tr>
                                <tr style="border-top: 2px solid #e2e8f0;">
                                    <td style="padding: 15px 0; font-weight: 600; color: #64748b; font-size: clamp(13px, 3vw, 15px); vertical-align: top;">Email:</td>
                                    <td style="padding: 15px 0; vertical-align: top;">
                                        <a href="mailto:${sanitizedData.email}" style="color: #8b5cf6; text-decoration: none; font-weight: 600; font-size: clamp(14px, 3vw, 18px); background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1)); padding: 8px 15px; border-radius: 25px; display: inline-block; transition: all 0.3s ease;">${sanitizedData.email}</a>
                                    </td>
                                </tr>
                                <tr style="border-top: 2px solid #e2e8f0;">
                                    <td style="padding: 15px 0; font-weight: 600; color: #64748b; font-size: clamp(13px, 3vw, 15px); vertical-align: top;">Company:</td>
                                    <td style="padding: 15px 0; color: #1e293b; font-size: clamp(14px, 3vw, 18px); font-weight: 500; vertical-align: top;">${sanitizedData.company || 'Not specified'}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <!-- Project Details Card -->
                    <div style="background: white; padding: 30px; border-radius: 20px; margin-bottom: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02); border-left: 6px solid #3b82f6; position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; width: 120px; height: 120px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%); border-radius: 50%; transform: translate(-40px, -40px);"></div>
                        <h2 style="color: #1e293b; margin: 0 0 25px 0; font-size: clamp(20px, 4vw, 26px); font-weight: 700; display: flex; align-items: center; gap: 10px; position: relative; z-index: 2;">
                            <span style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">📊</span>
                            Project Details
                        </h2>
                        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 25px; border-radius: 15px; position: relative; z-index: 2;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 15px 0; font-weight: 600; color: #64748b; width: 140px; font-size: clamp(13px, 3vw, 15px); vertical-align: top;">Project Type:</td>
                                    <td style="padding: 15px 0; vertical-align: top;">
                                        <span style="background: linear-gradient(135deg, #ddd6fe, #e0e7ff); color: #7c3aed; padding: 10px 20px; border-radius: 25px; font-weight: 600; font-size: clamp(13px, 3vw, 16px); display: inline-block; box-shadow: 0 4px 10px rgba(124, 58, 237, 0.2);">${sanitizedData.projectType}</span>
                                    </td>
                                </tr>
                                <tr style="border-top: 2px solid #e2e8f0;">
                                    <td style="padding: 15px 0; font-weight: 600; color: #64748b; font-size: clamp(13px, 3vw, 15px); vertical-align: top;">Budget Range:</td>
                                    <td style="padding: 15px 0; vertical-align: top;">
                                        <span style="background: linear-gradient(135deg, #dcfce7, #d1fae5); color: #16a34a; padding: 10px 20px; border-radius: 25px; font-weight: 600; font-size: clamp(13px, 3vw, 16px); display: inline-block; box-shadow: 0 4px 10px rgba(22, 163, 74, 0.2);">${sanitizedData.budget || 'To be discussed'}</span>
                                    </td>
                                </tr>
                                <tr style="border-top: 2px solid #e2e8f0;">
                                    <td style="padding: 15px 0; font-weight: 600; color: #64748b; font-size: clamp(13px, 3vw, 15px); vertical-align: top;">Timeline:</td>
                                    <td style="padding: 15px 0; vertical-align: top;">
                                        <span style="background: linear-gradient(135deg, #fef3c7, #fde68a); color: #d97706; padding: 10px 20px; border-radius: 25px; font-weight: 600; font-size: clamp(13px, 3vw, 16px); display: inline-block; box-shadow: 0 4px 10px rgba(217, 119, 6, 0.2);">${sanitizedData.timeline || 'Flexible'}</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <!-- Project Description Card -->
                    <div style="background: white; padding: 30px; border-radius: 20px; margin-bottom: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 50%; right: 0; width: 80px; height: 80px; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1)); border-radius: 50%; transform: translate(20px, -50%);"></div>
                        <h2 style="color: #1e293b; margin: 0 0 25px 0; font-size: clamp(20px, 4vw, 26px); font-weight: 700; display: flex; align-items: center; gap: 10px; position: relative; z-index: 2;">
                            <span style="background: linear-gradient(135deg, #10b981, #059669); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">💬</span>
                            Project Description
                        </h2>
                        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 25px; border-radius: 15px; border-left: 6px solid #8b5cf6; position: relative; z-index: 2;">
                            <p style="color: #475569; line-height: 1.8; white-space: pre-wrap; margin: 0; font-size: clamp(14px, 3vw, 17px); font-weight: 400;">${sanitizedData.message}</p>
                        </div>
                    </div>

                    <!-- Footer/Action Card -->
                    <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 35px; border-radius: 20px; text-align: center; box-shadow: 0 20px 40px rgba(30, 41, 59, 0.3); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);"></div>
                        <div style="position: relative; z-index: 2;">
                            <p style="color: #94a3b8; margin: 0 0 20px 0; font-size: clamp(13px, 3vw, 16px); line-height: 1.8;">
                                📅 <strong style="color: #e2e8f0;">Submitted:</strong> ${currentDate} (IST)<br>
                                🌐 <strong style="color: #e2e8f0;">IP Address:</strong> ${ip}<br>
                                📧 <strong style="color: #e2e8f0;">Auto-reply sent to:</strong> ${sanitizedData.email}
                            </p>
                            <div style="margin-top: 30px; display: flex; flex-wrap: wrap; gap: 15px; justify-content: center;">
                                <a href="mailto:${sanitizedData.email}" style="display: inline-block; background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); color: white; padding: 15px 25px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: clamp(13px, 3vw, 16px); box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4); transition: all 0.3s ease; min-width: 160px;">
                                    📧 Reply to Client
                                </a>
                                <a href="https://saas.devsomeware.com/products" style="display: inline-block; background: rgba(255,255,255,0.1); color: white; padding: 15px 25px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: clamp(13px, 3vw, 16px); border: 2px solid rgba(255,255,255,0.2); backdrop-filter: blur(10px); transition: all 0.3s ease; min-width: 160px;">
                                    🔗 View Portfolio
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Responsive adjustments -->
                    <style>
                        @media only screen and (max-width: 600px) {
                            .responsive-padding { padding: 20px !important; }
                            .responsive-text { font-size: 14px !important; }
                            .responsive-button { 
                                display: block !important; 
                                width: 100% !important; 
                                margin: 10px 0 !important; 
                            }
                        }
                        
                        @keyframes gradientShift {
                            0%, 100% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                        }
                        
                        @keyframes float {
                            0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
                            50% { transform: translate(-50%, -50%) rotate(180deg); }
                        }
                    </style>
                </div>
            </body>
            </html>
        `;

        // Enhanced email content for the client (auto-reply) with beautiful responsive design
        const clientEmailContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Thank You - DevSomeware</title>
                <!--[if mso]>
                <noscript>
                    <xml>
                        <o:OfficeDocumentSettings>
                            <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                </noscript>
                <![endif]-->
            </head>
            <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; line-height: 1.6;">
                <div style="width: 100%; max-width: 640px; margin: 0 auto; padding: 20px; box-sizing: border-box;">
                    
                    <!-- Header with Animated Gradient -->
                    <div style="background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); background-size: 200% 200%; animation: gradientShift 6s ease infinite; padding: 45px 30px; border-radius: 20px; text-align: center; margin-bottom: 30px; box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(255,255,255,0.1); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); animation: float 8s ease-in-out infinite;"></div>
                        <div style="position: relative; z-index: 2;">
                            <h1 style="color: white; margin: 0; font-size: clamp(26px, 6vw, 38px); font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 8px;">✨ Thank You!</h1>
                            <p style="color: rgba(255,255,255,0.95); margin: 0; font-size: clamp(16px, 4vw, 20px); font-weight: 500;">DevSomeware Team</p>
                            <div style="width: 80px; height: 4px; background: rgba(255,255,255,0.4); border-radius: 2px; margin: 20px auto; backdrop-filter: blur(10px);"></div>
                        </div>
                    </div>
                    
                    <!-- Welcome Message -->
                    <div style="background: white; padding: 35px; border-radius: 20px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; right: 0; width: 120px; height: 120px; background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%); border-radius: 50%; transform: translate(40px, -40px);"></div>
                        <div style="position: relative; z-index: 2;">
                            <p style="color: #1e293b; font-size: clamp(16px, 4vw, 20px); line-height: 1.6; margin: 0 0 20px 0;">
                                Hi <strong style="color: #8b5cf6; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1)); padding: 4px 12px; border-radius: 20px;">${sanitizedData.name}</strong>,
                            </p>
                            
                            <p style="color: #475569; line-height: 1.8; font-size: clamp(15px, 3.5vw, 18px); margin-bottom: 25px;">
                                Thank you for reaching out to DevSomeware! We've received your project inquiry and are excited about the possibility of working together to bring your vision to life.
                            </p>

                            <!-- What's Next Section -->
                            <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e0e7ff 100%); padding: 30px; border-radius: 18px; margin: 30px 0; border-left: 6px solid #8b5cf6; position: relative; overflow: hidden;">
                                <div style="position: absolute; bottom: 0; right: 0; width: 60px; height: 60px; background: rgba(139, 92, 246, 0.1); border-radius: 50%; transform: translate(20px, 20px);"></div>
                                <h3 style="color: #1e293b; margin: 0 0 20px 0; font-size: clamp(18px, 4vw, 24px); display: flex; align-items: center; gap: 10px; position: relative; z-index: 2;">
                                    <span style="background: linear-gradient(135deg, #8b5cf6, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">🚀</span>
                                    What's Next?
                                </h3>
                                <div style="position: relative; z-index: 2;">
                                    <div style="margin-bottom: 15px; display: flex; align-items: flex-start; gap: 15px;">
                                        <span style="background: #3b82f6; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; flex-shrink: 0; margin-top: 2px;">2</span>
                                        <p style="margin: 0; color: #475569; line-height: 1.7; font-size: clamp(14px, 3vw, 16px);">We'll prepare a detailed proposal with timeline and cost estimates</p>
                                    </div>
                                    <div style="margin-bottom: 15px; display: flex; align-items: flex-start; gap: 15px;">
                                        <span style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; flex-shrink: 0; margin-top: 2px;">3</span>
                                        <p style="margin: 0; color: #475569; line-height: 1.7; font-size: clamp(14px, 3vw, 16px);">Schedule a <strong>free consultation call</strong> to discuss your vision</p>
                                    </div>
                                    <div style="margin-bottom: 0; display: flex; align-items: flex-start; gap: 15px;">
                                        <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; flex-shrink: 0; margin-top: 2px;">4</span>
                                        <p style="margin: 0; color: #475569; line-height: 1.7; font-size: clamp(14px, 3vw, 16px);">Answer any questions about our development process</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Project Summary -->
                            <div style="background: white; padding: 30px; border-radius: 18px; margin: 30px 0; border: 2px solid #f1f5f9; box-shadow: 0 4px 15px rgba(0,0,0,0.05); position: relative; overflow: hidden;">
                                <div style="position: absolute; top: 0; left: 0; width: 80px; height: 80px; background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%); border-radius: 50%; transform: translate(-30px, -30px);"></div>
                                <h3 style="color: #1e293b; margin: 0 0 25px 0; font-size: clamp(18px, 4vw, 24px); border-bottom: 2px solid #f1f5f9; padding-bottom: 15px; position: relative; z-index: 2;">📋 Your Project Summary</h3>
                                <div style="position: relative; z-index: 2;">
                                    <table style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td style="padding: 12px 0; font-weight: 600; color: #64748b; width: 120px; font-size: clamp(13px, 3vw, 15px); vertical-align: top;">Project Type:</td>
                                            <td style="padding: 12px 0; vertical-align: top;">
                                                <span style="background: linear-gradient(135deg, #ddd6fe, #e0e7ff); color: #7c3aed; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: clamp(12px, 3vw, 15px); display: inline-block; box-shadow: 0 2px 8px rgba(124, 58, 237, 0.2);">${sanitizedData.projectType}</span>
                                            </td>
                                        </tr>
                                        ${sanitizedData.budget ? `
                                        <tr>
                                            <td style="padding: 12px 0; font-weight: 600; color: #64748b; font-size: clamp(13px, 3vw, 15px); vertical-align: top;">Budget Range:</td>
                                            <td style="padding: 12px 0; vertical-align: top;">
                                                <span style="background: linear-gradient(135deg, #dcfce7, #d1fae5); color: #16a34a; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: clamp(12px, 3vw, 15px); display: inline-block; box-shadow: 0 2px 8px rgba(22, 163, 74, 0.2);">${sanitizedData.budget}</span>
                                            </td>
                                        </tr>
                                        ` : ''}
                                        ${sanitizedData.timeline ? `
                                        <tr>
                                            <td style="padding: 12px 0; font-weight: 600; color: #64748b; font-size: clamp(13px, 3vw, 15px); vertical-align: top;">Timeline:</td>
                                            <td style="padding: 12px 0; vertical-align: top;">
                                                <span style="background: linear-gradient(135deg, #fef3c7, #fde68a); color: #d97706; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: clamp(12px, 3vw, 15px); display: inline-block; box-shadow: 0 2px 8px rgba(217, 119, 6, 0.2);">${sanitizedData.timeline}</span>
                                            </td>
                                        </tr>
                                        ` : ''}
                                    </table>
                                </div>
                            </div>

                            <p style="color: #475569; line-height: 1.8; font-size: clamp(15px, 3.5vw, 18px); margin-bottom: 30px;">
                                In the meantime, feel free to explore our <a href="https://saas.devsomeware.com/products" style="color: #8b5cf6; text-decoration: none; font-weight: 600; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1)); padding: 4px 8px; border-radius: 8px;">recent projects</a> and learn more <a href="https://saas.devsomeware.com/about" style="color: #8b5cf6; text-decoration: none; font-weight: 600; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1)); padding: 4px 8px; border-radius: 8px;">about our team</a>.
                            </p>

                            <!-- Action Buttons -->
                            <div style="text-align: center; margin: 40px 0; display: flex; flex-wrap: wrap; gap: 15px; justify-content: center;">
                                <a href="https://saas.devsomeware.com/products" style="display: inline-block; background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); color: white; padding: 18px 32px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: clamp(14px, 3vw, 17px); box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4); transition: all 0.3s ease; min-width: 180px;">
                                    🚀 View Our Portfolio
                                </a>
                                <a href="https://saas.devsomeware.com/about" style="display: inline-block; background: white; color: #8b5cf6; padding: 18px 32px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: clamp(14px, 3vw, 17px); border: 2px solid #8b5cf6; transition: all 0.3s ease; min-width: 180px;">
                                    👥 Meet Our Team
                                </a>
                            </div>

                            <!-- Quick Tip -->
                            <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 25px; border-radius: 15px; border-left: 6px solid #10b981; position: relative; overflow: hidden;">
                                <div style="position: absolute; top: 0; right: 0; width: 40px; height: 40px; background: rgba(16, 185, 129, 0.1); border-radius: 50%; transform: translate(10px, -10px);"></div>
                                <p style="color: #475569; line-height: 1.8; margin: 0; font-size: clamp(14px, 3vw, 16px); position: relative; z-index: 2;">
                                    💡 <strong style="color: #059669;">Quick Tip:</strong> While you wait, you might want to gather any specific requirements, design preferences, or technical documentation that could help us better understand your project needs.
                                </p>
                            </div>

                            <p style="color: #475569; line-height: 1.8; font-size: clamp(15px, 3.5vw, 18px); margin: 30px 0 0 0;">
                                Best regards,<br>
                                <strong style="color: #1e293b;">The DevSomeware Team</strong><br>
                                <span style="color: #64748b; font-size: clamp(13px, 3vw, 15px);">Building the future of digital solutions! 🚀</span>
                            </p>
                        </div>
                    </div>

                    <!-- Social Links & Footer -->
                    <div style="background: white; padding: 35px; border-radius: 20px; text-align: center; border-top: 6px solid #8b5cf6; box-shadow: 0 10px 30px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 50%; left: 50%; width: 100px; height: 100px; background: linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%); border-radius: 50%; transform: translate(-50%, -50%);"></div>
                        <div style="position: relative; z-index: 2;">
                            <p style="color: #64748b; margin: 0 0 25px 0; font-size: clamp(15px, 3.5vw, 18px); font-weight: 600;">
                                🌟 Follow us for the latest updates and tech insights!
                            </p>
                            <div style="margin: 25px 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;">
                                <a href="https://www.instagram.com/devsomeware/" style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 50%; text-decoration: none; font-size: 20px; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">📸</a>
                                <a href="https://x.com/DevSomware" style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 50%; text-decoration: none; font-size: 20px; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">🐦</a>
                                <a href="https://www.linkedin.com/company/devsomeware/" style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 50%; text-decoration: none; font-size: 20px; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">💼</a>
                                <a href="https://github.com/DevSomware" style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 50%; text-decoration: none; font-size: 20px; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">💻</a>
                                <a href="https://hashnode.com/@devsomeware" style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 50%; text-decoration: none; font-size: 20px; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">✍️</a>
                                <a href="https://www.threads.net/@devsomeware" style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: linear-gradient(135deg, #f1f5f9, #e2e8f0); border-radius: 50%; text-decoration: none; font-size: 20px; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">🧵</a>
                            </div>
                            <p style="color: #94a3b8; margin: 25px 0 0 0; font-size: clamp(11px, 2.5vw, 14px); line-height: 1.6;">
                                This is an automated response. Please do not reply to this email.<br>
                                For urgent matters, contact us directly at <a href="mailto:hello@devsomeware.com" style="color: #8b5cf6; text-decoration: none; font-weight: 600;">hello@devsomeware.com</a>
                            </p>
                        </div>
                    </div>
                    
                    <!-- Enhanced CSS for responsiveness and animations -->
                    <style>
                        @media only screen and (max-width: 600px) {
                            .responsive-padding { padding: 20px !important; }
                            .responsive-text { font-size: 14px !important; }
                            .responsive-button { 
                                display: block !important; 
                                width: 100% !important; 
                                margin: 10px 0 !important; 
                            }
                            .responsive-flex { 
                                flex-direction: column !important; 
                                align-items: stretch !important; 
                            }
                        }
                        
                        @media only screen and (max-width: 480px) {
                            .mobile-hide { display: none !important; }
                            .mobile-center { text-align: center !important; }
                            .mobile-stack { 
                                display: block !important; 
                                width: 100% !important; 
                                margin-bottom: 15px !important; 
                            }
                        }
                        
                        @keyframes gradientShift {
                            0%, 100% { background-position: 0% 50%; }
                            50% { background-position: 100% 50%; }
                        }
                        
                        @keyframes float {
                            0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
                            50% { transform: translate(-50%, -50%) rotate(180deg); }
                        }
                        
                        @keyframes pulse {
                            0%, 100% { opacity: 1; }
                            50% { opacity: 0.8; }
                        }
                        
                        /* Dark mode support */
                        @media (prefers-color-scheme: dark) {
                            .dark-mode-bg { background: #1e293b !important; }
                            .dark-mode-text { color: #e2e8f0 !important; }
                            .dark-mode-border { border-color: #334155 !important; }
                        }
                    </style>
                </div>
            </body>
            </html>
        `;

        const teamMailOptions = {
            from: `"DevSomeware Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
            subject: `🚀 New ${sanitizedData.projectType} Inquiry from ${sanitizedData.name}`,
            html: teamEmailContent,
            replyTo: sanitizedData.email,
            priority: 'high' as const
        };

        // Send auto-reply to client
        const clientMailOptions = {
            from: `"DevSomeware Team" <${process.env.EMAIL_USER}>`,
            to: sanitizedData.email,
            subject: '✨ Thank you for your inquiry - DevSomeware',
            html: clientEmailContent,
            priority: 'normal' as const
        };
        await Promise.all([
            transporter.sendMail(teamMailOptions),
            transporter.sendMail(clientMailOptions)
        ]);

        if (process.env.SLACK_WEBHOOK_URL) {
            try {
                await fetch(process.env.SLACK_WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        text: `🚀 New project inquiry from ${sanitizedData.name} (${sanitizedData.email}) for ${sanitizedData.projectType}`,
                        attachments: [
                            {
                                color: '#8b5cf6',
                                fields: [
                                    { title: 'Name', value: sanitizedData.name, short: true },
                                    { title: 'Email', value: sanitizedData.email, short: true },
                                    { title: 'Project Type', value: sanitizedData.projectType, short: true },
                                    { title: 'Budget', value: sanitizedData.budget || 'Not specified', short: true },
                                    { title: 'Message', value: sanitizedData.message.substring(0, 200) + '...', short: false }
                                ]
                            }
                        ]
                    }),
                });
            } catch (slackError) {
                console.error('Failed to send Slack notification:', slackError);
                // Don't fail the request if Slack fails
            }
        }

        return NextResponse.json(
            { 
                message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.',
                success: true 
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        
        // Return appropriate error message
        if (error instanceof Error) {
            if (error.message.includes('authentication')) {
                return NextResponse.json(
                    { error: 'Email authentication failed. Please try again later.' },
                    { status: 500 }
                );
            }
            if (error.message.includes('network')) {
                return NextResponse.json(
                    { error: 'Network error. Please check your connection and try again.' },
                    { status: 500 }
                );
            }
        }

        return NextResponse.json(
            { error: 'Something went wrong. Please try again later or contact us directly at hello@devsomeware.com' },
            { status: 500 }
        );
    }
}
                