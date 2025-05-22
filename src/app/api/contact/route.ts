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

        // Enhanced email content for the team with black and purple theme
        const teamEmailContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Project Inquiry - DevSomeware</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                        line-height: 1.6;
                        background: #000000;
                        color: #ffffff;
                    }
                    
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background: #000000;
                    }
                    
                    .header {
                        background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                        padding: 40px 30px;
                        border-radius: 16px;
                        text-align: center;
                        margin-bottom: 30px;
                        box-shadow: 0 8px 32px rgba(124, 58, 237, 0.3);
                    }
                    
                    .logo {
                        width: 80px;
                        height: 80px;
                        margin: 0 auto 20px;
                        border-radius: 12px;
                        overflow: hidden;
                        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                    }
                    
                    .logo img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .header h1 {
                        font-size: clamp(24px, 4vw, 32px);
                        font-weight: 700;
                        color: #ffffff;
                        margin-bottom: 8px;
                    }
                    
                    .header p {
                        font-size: clamp(14px, 3vw, 16px);
                        color: rgba(255, 255, 255, 0.9);
                        font-weight: 500;
                    }
                    
                    .card {
                        background: #111111;
                        padding: 30px;
                        border-radius: 16px;
                        margin-bottom: 24px;
                        border: 1px solid #333333;
                        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
                    }
                    
                    .card h2 {
                        font-size: clamp(20px, 3.5vw, 24px);
                        font-weight: 600;
                        color: #a855f7;
                        margin-bottom: 20px;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }
                    
                    .info-grid {
                        background: #1a1a1a;
                        padding: 24px;
                        border-radius: 12px;
                        border-left: 4px solid #7c3aed;
                    }
                    
                    .info-row {
                        display: flex;
                        align-items: flex-start;
                        padding: 12px 0;
                        border-bottom: 1px solid #333333;
                    }
                    
                    .info-row:last-child {
                        border-bottom: none;
                    }
                    
                    .info-label {
                        font-weight: 600;
                        color: #888888;
                        width: 120px;
                        flex-shrink: 0;
                        font-size: clamp(13px, 2.5vw, 14px);
                    }
                    
                    .info-value {
                        color: #ffffff;
                        font-weight: 500;
                        font-size: clamp(14px, 3vw, 16px);
                        flex: 1;
                    }
                    
                    .email-link {
                        color: #a855f7;
                        text-decoration: none;
                        background: rgba(168, 85, 247, 0.1);
                        padding: 6px 12px;
                        border-radius: 6px;
                        display: inline-block;
                        transition: all 0.3s ease;
                    }
                    
                    .email-link:hover {
                        background: rgba(168, 85, 247, 0.2);
                    }
                    
                    .tag {
                        display: inline-block;
                        padding: 8px 16px;
                        border-radius: 20px;
                        font-weight: 600;
                        font-size: clamp(12px, 2.5vw, 14px);
                    }
                    
                    .tag-purple {
                        background: rgba(124, 58, 237, 0.2);
                        color: #a855f7;
                        border: 1px solid rgba(124, 58, 237, 0.3);
                    }
                    
                    .tag-green {
                        background: rgba(34, 197, 94, 0.2);
                        color: #4ade80;
                        border: 1px solid rgba(34, 197, 94, 0.3);
                    }
                    
                    .tag-orange {
                        background: rgba(249, 115, 22, 0.2);
                        color: #fb923c;
                        border: 1px solid rgba(249, 115, 22, 0.3);
                    }
                    
                    .message-content {
                        background: #1a1a1a;
                        padding: 24px;
                        border-radius: 12px;
                        border-left: 4px solid #a855f7;
                        white-space: pre-wrap;
                        line-height: 1.7;
                        font-size: clamp(14px, 3vw, 16px);
                        color: #e5e5e5;
                    }
                    
                    .footer {
                        background: #111111;
                        padding: 30px;
                        border-radius: 16px;
                        text-align: center;
                        border: 1px solid #333333;
                    }
                    
                    .footer-info {
                        color: #888888;
                        margin-bottom: 24px;
                        font-size: clamp(13px, 2.5vw, 14px);
                        line-height: 1.6;
                    }
                    
                    .btn-group {
                        display: flex;
                        gap: 16px;
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    
                    .btn {
                        display: inline-block;
                        padding: 14px 28px;
                        border-radius: 8px;
                        text-decoration: none;
                        font-weight: 600;
                        font-size: clamp(13px, 2.5vw, 15px);
                        transition: all 0.3s ease;
                        min-width: 140px;
                        text-align: center;
                    }
                    
                    .btn-primary {
                        background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                        color: #ffffff;
                        box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);
                    }
                    
                    .btn-secondary {
                        background: rgba(255, 255, 255, 0.1);
                        color: #ffffff;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                    }
                    
                    @media only screen and (max-width: 600px) {
                        .container {
                            padding: 16px;
                        }
                        
                        .card {
                            padding: 20px;
                        }
                        
                        .info-row {
                            flex-direction: column;
                            gap: 4px;
                        }
                        
                        .info-label {
                            width: 100%;
                        }
                        
                        .btn-group {
                            flex-direction: column;
                            align-items: center;
                        }
                        
                        .btn {
                            width: 100%;
                            max-width: 280px;
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <!-- Header -->
                    <div class="header">
                        <div class="logo">
                            <img src="https://aniket-1.s3.ap-south-1.amazonaws.com/kk.png" alt="DevSomeware Logo">
                        </div>
                        <h1>🚀 New Project Inquiry</h1>
                        <p>DevSomeware Contact Form</p>
                    </div>
                    
                    <!-- Contact Information -->
                    <div class="card">
                        <h2>👤 Contact Information</h2>
                        <div class="info-grid">
                            <div class="info-row">
                                <div class="info-label">Full Name:</div>
                                <div class="info-value">${sanitizedData.name}</div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">Email:</div>
                                <div class="info-value">
                                    <a href="mailto:${sanitizedData.email}" class="email-link">${sanitizedData.email}</a>
                                </div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">Company:</div>
                                <div class="info-value">${sanitizedData.company || 'Not specified'}</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project Details -->
                    <div class="card">
                        <h2>📊 Project Details</h2>
                        <div class="info-grid">
                            <div class="info-row">
                                <div class="info-label">Project Type:</div>
                                <div class="info-value">
                                    <span class="tag tag-purple">${sanitizedData.projectType}</span>
                                </div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">Budget Range:</div>
                                <div class="info-value">
                                    <span class="tag tag-green">${sanitizedData.budget || 'To be discussed'}</span>
                                </div>
                            </div>
                            <div class="info-row">
                                <div class="info-label">Timeline:</div>
                                <div class="info-value">
                                    <span class="tag tag-orange">${sanitizedData.timeline || 'Flexible'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project Description -->
                    <div class="card">
                        <h2>💬 Project Description</h2>
                        <div class="message-content">${sanitizedData.message}</div>
                    </div>
                    
                    <!-- Footer -->
                    <div class="footer">
                        <div class="footer-info">
                            📅 <strong>Submitted:</strong> ${currentDate} (IST)<br>
                            🌐 <strong>IP Address:</strong> ${ip}<br>
                            📧 <strong>Auto-reply sent to:</strong> ${sanitizedData.email}
                        </div>
                        <div class="btn-group">
                            <a href="mailto:${sanitizedData.email}" class="btn btn-primary">📧 Reply to Client</a>
                            <a href="https://saas.devsomeware.com/products" class="btn btn-secondary">🔗 View Portfolio</a>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Enhanced email content for the client (auto-reply) with black and purple theme
        const clientEmailContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Thank You - DevSomeware</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                        line-height: 1.6;
                        background: #000000;
                        color: #ffffff;
                    }
                    
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background: #000000;
                    }
                    
                    .header {
                        background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                        padding: 40px 30px;
                        border-radius: 16px;
                        text-align: center;
                        margin-bottom: 30px;
                        box-shadow: 0 8px 32px rgba(124, 58, 237, 0.3);
                    }
                    
                    .logo {
                        width: 80px;
                        height: 80px;
                        margin: 0 auto 20px;
                        border-radius: 12px;
                        overflow: hidden;
                        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                    }
                    
                    .logo img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .header h1 {
                        font-size: clamp(28px, 5vw, 36px);
                        font-weight: 700;
                        color: #ffffff;
                        margin-bottom: 8px;
                    }
                    
                    .header p {
                        font-size: clamp(16px, 3vw, 18px);
                        color: rgba(255, 255, 255, 0.9);
                        font-weight: 500;
                    }
                    
                    .card {
                        background: #111111;
                        padding: 30px;
                        border-radius: 16px;
                        margin-bottom: 24px;
                        border: 1px solid #333333;
                        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
                    }
                    
                    .card h2 {
                        font-size: clamp(20px, 4vw, 24px);
                        font-weight: 600;
                        color: #a855f7;
                        margin-bottom: 20px;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                    }
                    
                    .welcome-text {
                        font-size: clamp(16px, 3.5vw, 18px);
                        line-height: 1.7;
                        color: #e5e5e5;
                        margin-bottom: 20px;
                    }
                    
                    .highlight {
                        color: #a855f7;
                        background: rgba(168, 85, 247, 0.1);
                        padding: 4px 8px;
                        border-radius: 6px;
                        font-weight: 600;
                    }
                    
                    .next-steps {
                        background: #1a1a1a;
                        padding: 24px;
                        border-radius: 12px;
                        border-left: 4px solid #7c3aed;
                        margin: 24px 0;
                    }
                    
                    .step {
                        display: flex;
                        align-items: flex-start;
                        gap: 16px;
                        margin-bottom: 16px;
                    }
                    
                    .step:last-child {
                        margin-bottom: 0;
                    }
                    
                    .step-number {
                        background: linear-gradient(135deg, #7c3aed, #a855f7);
                        color: #ffffff;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        font-weight: 700;
                        flex-shrink: 0;
                        margin-top: 2px;
                    }
                    
                    .step-text {
                        color: #e5e5e5;
                        font-size: clamp(14px, 3vw, 16px);
                        line-height: 1.6;
                    }
                    
                    .project-summary {
                        background: #1a1a1a;
                        padding: 24px;
                        border-radius: 12px;
                        border: 1px solid #333333;
                        margin: 24px 0;
                    }
                    
                    .summary-row {
                        display: flex;
                        align-items: center;
                        padding: 12px 0;
                        border-bottom: 1px solid #333333;
                    }
                    
                    .summary-row:last-child {
                        border-bottom: none;
                    }
                    
                    .summary-label {
                        font-weight: 600;
                        color: #888888;
                        width: 120px;
                        flex-shrink: 0;
                        font-size: clamp(13px, 2.5vw, 14px);
                    }
                    
                    .tag {
                        display: inline-block;
                        padding: 6px 12px;
                        border-radius: 16px;
                        font-weight: 600;
                        font-size: clamp(12px, 2.5vw, 13px);
                    }
                    
                    .tag-purple {
                        background: rgba(124, 58, 237, 0.2);
                        color: #a855f7;
                        border: 1px solid rgba(124, 58, 237, 0.3);
                    }
                    
                    .tag-green {
                        background: rgba(34, 197, 94, 0.2);
                        color: #4ade80;
                        border: 1px solid rgba(34, 197, 94, 0.3);
                    }
                    
                    .tag-orange {
                        background: rgba(249, 115, 22, 0.2);
                        color: #fb923c;
                        border: 1px solid rgba(249, 115, 22, 0.3);
                    }
                    
                    .btn-group {
                        display: flex;
                        gap: 16px;
                        justify-content: center;
                        flex-wrap: wrap;
                        margin: 30px 0;
                    }
                    
                    .btn {
                        display: inline-block;
                        padding: 16px 32px;
                        border-radius: 8px;
                        text-decoration: none;
                        font-weight: 600;
                        font-size: clamp(14px, 3vw, 16px);
                        transition: all 0.3s ease;
                        min-width: 160px;
                        text-align: center;
                    }
                    
                    .btn-primary {
                        background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
                        color: #ffffff;
                        box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);
                    }
                    
                    .btn-secondary {
                        background: rgba(255, 255, 255, 0.1);
                        color: #ffffff;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                    }
                    
                    .tip-box {
                        background: rgba(34, 197, 94, 0.1);
                        padding: 20px;
                        border-radius: 12px;
                        border-left: 4px solid #22c55e;
                        margin: 24px 0;
                    }
                    
                    .tip-text {
                        color: #e5e5e5;
                        font-size: clamp(14px, 3vw, 15px);
                        line-height: 1.6;
                    }
                    
                    .social-section {
                        background: #111111;
                        padding: 30px;
                        border-radius: 16px;
                        text-align: center;
                        border: 1px solid #333333;
                    }
                    
                    .social-links {
                        display: flex;
                        justify-content: center;
                        gap: 16px;
                        margin: 20px 0;
                        flex-wrap: wrap;
                    }
                    
                    .social-link {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 48px;
                        height: 48px;
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 8px;
                        text-decoration: none;
                        font-size: 20px;
                        transition: all 0.3s ease;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                    }
                    
                    .social-link:hover {
                        background: rgba(168, 85, 247, 0.2);
                        border-color: rgba(168, 85, 247, 0.3);
                    }
                    
                    .footer-note {
                        color: #666666;
                        font-size: clamp(11px, 2vw, 13px);
                        line-height: 1.5;
                        margin-top: 20px;
                    }
                    
                    .footer-note a {
                        color: #a855f7;
                        text-decoration: none;
                    }
                    
                    @media only screen and (max-width: 600px) {
                        .container {
                            padding: 16px;
                        }
                        
                        .card {
                            padding: 20px;
                        }
                        
                        .summary-row {
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 8px;
                        }
                        
                        .summary-label {
                            width: 100%;
                        }
                        
                        .btn-group {
                            flex-direction: column;
                            align-items: center;
                        }
                        
                        .btn {
                            width: 100%;
                            max-width: 280px;
                        }
                        
                        .step {
                            gap: 12px;
                        }
                    }
                </style>
                </head>
            <body>
                <div class="container">
                    <!-- Header -->
                    <div class="header">
                        <div class="logo">
                            <img src="https://aniket-1.s3.ap-south-1.amazonaws.com/kk.png" alt="DevSomeware Logo">
                        </div>
                        <h1>✨ Thank You!</h1>
                        <p>DevSomeware Team</p>
                    </div>
                    
                    <!-- Welcome Message -->
                    <div class="card">
                        <div class="welcome-text">
                            Hi <span class="highlight">${sanitizedData.name}</span>,
                        </div>
                        
                        <div class="welcome-text">
                            Thank you for reaching out to DevSomeware! We've received your project inquiry and are excited about the possibility of working together to bring your vision to life.
                        </div>

                        <!-- What's Next Section -->
                        <div class="next-steps">
                            <h2>🚀 What's Next?</h2>
                            <div class="step">
                                <div class="step-number">1</div>
                                <div class="step-text">Our team will review your project requirements within 24 hours</div>
                            </div>
                            <div class="step">
                                <div class="step-number">2</div>
                                <div class="step-text">We'll prepare a detailed proposal with timeline and cost estimates</div>
                            </div>
                            <div class="step">
                                <div class="step-number">3</div>
                                <div class="step-text">Schedule a <strong>free consultation call</strong> to discuss your vision</div>
                            </div>
                            <div class="step">
                                <div class="step-number">4</div>
                                <div class="step-text">Answer any questions about our development process</div>
                            </div>
                        </div>

                        <!-- Project Summary -->
                        <div class="project-summary">
                            <h2>📋 Your Project Summary</h2>
                            <div class="summary-row">
                                <div class="summary-label">Project Type:</div>
                                <div>
                                    <span class="tag tag-purple">${sanitizedData.projectType}</span>
                                </div>
                            </div>
                            ${sanitizedData.budget ? `
                            <div class="summary-row">
                                <div class="summary-label">Budget Range:</div>
                                <div>
                                    <span class="tag tag-green">${sanitizedData.budget}</span>
                                </div>
                            </div>
                            ` : ''}
                            ${sanitizedData.timeline ? `
                            <div class="summary-row">
                                <div class="summary-label">Timeline:</div>
                                <div>
                                    <span class="tag tag-orange">${sanitizedData.timeline}</span>
                                </div>
                            </div>
                            ` : ''}
                        </div>

                        <div class="welcome-text">
                            In the meantime, feel free to explore our <a href="https://saas.devsomeware.com/products" style="color: #a855f7; text-decoration: none; font-weight: 600;">recent projects</a> and learn more <a href="https://saas.devsomeware.com/about" style="color: #a855f7; text-decoration: none; font-weight: 600;">about our team</a>.
                        </div>

                        <!-- Action Buttons -->
                        <div class="btn-group">
                            <a href="https://saas.devsomeware.com/products" class="btn btn-primary">
                                🚀 View Our Portfolio
                            </a>
                            <a href="https://saas.devsomeware.com/about" class="btn btn-secondary">
                                👥 Meet Our Team
                            </a>
                        </div>

                        <!-- Quick Tip -->
                        <div class="tip-box">
                            <div class="tip-text">
                                💡 <strong style="color: #4ade80;">Quick Tip:</strong> While you wait, you might want to gather any specific requirements, design preferences, or technical documentation that could help us better understand your project needs.
                            </div>
                        </div>

                        <div class="welcome-text">
                            Best regards,<br>
                            <strong style="color: #a855f7;">The DevSomeware Team</strong><br>
                            <span style="color: #888888; font-size: clamp(13px, 2.5vw, 15px);">Building the future of digital solutions! 🚀</span>
                        </div>
                    </div>

                    <!-- Social Links & Footer -->
                    <div class="social-section">
                        <div style="color: #a855f7; margin-bottom: 20px; font-size: clamp(16px, 3vw, 18px); font-weight: 600;">
                            🌟 Follow us for the latest updates and tech insights!
                        </div>
                        <div class="social-links">
                            <a href="https://www.instagram.com/devsomeware/" class="social-link">📸</a>
                            <a href="https://x.com/DevSomware" class="social-link">🐦</a>
                            <a href="https://www.linkedin.com/company/devsomeware/" class="social-link">💼</a>
                            <a href="https://github.com/DevSomware" class="social-link">💻</a>
                            <a href="https://hashnode.com/@devsomeware" class="social-link">✍️</a>
                            <a href="https://www.threads.net/@devsomeware" class="social-link">🧵</a>
                        </div>
                        <div class="footer-note">
                            This is an automated response. Please do not reply to this email.<br>
                            For urgent matters, contact us directly at <a href="mailto:hello@devsomeware.com">hello@devsomeware.com</a>
                        </div>
                    </div>
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