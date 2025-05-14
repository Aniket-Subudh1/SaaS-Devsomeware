import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import AnimatedSphere from "@/components/AnimatedSphere";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Spotlight effects */}
        <div className="spotlight-container">
          <div className="spotlight"></div>
          <div className="spotlight-bottom"></div>
        </div>
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-12 md:px-20 max-w-7xl mx-auto relative">
          <div className="light-rays"></div>
          
          <p className="text-purple-400 text-center md:text-left text-sm mb-8">
            On-Demand Development &amp; API Integration • Senior Level Engineers • One Simple Subscription
          </p>

          <div className="max-w-4xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center md:text-left leading-tight mb-8">
              Development that <span className="text-gradient">converts</span>, built by engineers who <span className="text-gradient">get&nbsp;it</span>
            </h1>
            
            <p className="text-center md:text-left text-gray-300 max-w-2xl text-lg mb-12">
              We combine enterprise engineering expertise with SaaS business experience
              to focus on what matters most - your metrics.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="#contact"
                className="rounded-full bg-purple-600 hover:bg-purple-500 py-3 px-8 flex items-center gap-2 transition-colors text-white font-medium glow-effect"
              >
                Book an intro with Alex
              </a>
            </div>
          </div>
        </section>

        {/* Sphere Visual Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="relative aspect-square max-w-xl mx-auto">
              <div className="w-full h-full">
                <AnimatedSphere />
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-8">Our development expertise at work with:</p>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-8 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 sm:gap-12">
            {['Adobe', 'Stripe', 'Microsoft', 'Slack', 'Salesforce', 'Sentry'].map((brand) => (
              <div key={brand} className="text-gray-400 text-lg font-light">
                {brand}
              </div>
            ))}
          </div>
        </section>

        {/* Team Introduction */}
        <section id="about" className="py-24 px-4 sm:px-12 md:px-20 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-3xl sm:text-4xl font-light leading-tight mb-8">
              We&apos;re Alex and Jamie from DevSomeware—a development
              partnership combining 35+ years of experience
              building successful products and elevating
              brands for Fortune-500 companies.
            </p>
            
            <p className="text-xl text-gray-300 mb-16">
              While DevSomeware is new, our expertise isn&apos;t. And now
              we&apos;re bringing those proven results directly to
              select SaaS founders who want development that
              drives measurable growth.
            </p>
          </div>
        </section>

        {/* The Method Section */}
        <section id="method" className="py-24 px-4 sm:px-12 md:px-20 max-w-7xl mx-auto relative">
          {/* Subtle spotlight for this section */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent"></div>
          
          <h2 className="text-4xl font-light mb-2 relative z-10">The DevSomeware method®</h2>
          <p className="text-purple-400 mb-16 relative z-10">Our proven process for turning visitors into customers</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              {
                icon: "🔍",
                title: "01: Strategic Discovery",
                description: "We find out what numbers matter to your business first. Most development teams worry too much about technology—we care about what helps your business grow."
              },
              {
                icon: "📋",
                title: "02: Architecture Planning",
                description: "We design easy paths that guide users right where you want them. No random technical choices, only solutions that help convert visitors to customers."
              },
              {
                icon: "⚙️",
                title: "03: Pixel-Perfect Execution",
                description: "With years of experience, we create code that developers love to work with. You&apos;ll get results in days, not months, keeping your momentum going strong."
              },
              {
                icon: "📈",
                title: "04: Measure & Optimize",
                description: "We help track how well things work and make them better using real data. We don&apos;t just deliver and vanish—we stick with you as long as you want our help."
              }
            ].map((step, index) => (
              <div key={index} className="glass-card p-8 transition-all hover:bg-purple-900/10 hover:translate-y-[-4px]">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900/30 rounded-full mb-6 text-xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Growth Journey Section */}
        <section id="services" className="py-24 px-4 sm:px-12 md:px-20 max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-2">From MVP to unicorn: development that grows with you</h2>
          <p className="text-purple-400 mb-16">Solutions for wherever you are in your SaaS journey—and where you&apos;re going next</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💡",
                title: "MVP",
                description: "Development that gets you to market faster and helps you attract investors. We focus on the core features that prove your idea works while setting you up for growth."
              },
              {
                icon: "🌱",
                title: "Seed",
                description: "Convert more users and lower churn rates. We help turn your key numbers green and make investors eager to fund your next growth phase."
              },
              {
                icon: "📈",
                title: "Growth",
                description: "Add features without breaking what works. We help you scale smoothly, improve revenue streams, and keep your growing user base happy."
              }
            ].map((stage, index) => (
              <div key={index} className="glass-card p-8 transition-all hover:bg-purple-900/10 hover:translate-y-[-4px]">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-900/30 rounded-full mb-6 text-xl">
                  {stage.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{stage.title}</h3>
                <p className="text-gray-400">{stage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Member Section */}
        <section className="py-24 px-4 sm:px-12 md:px-20 max-w-7xl mx-auto relative">
          {/* Subtle spotlight for this section */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent"></div>
          
          <h2 className="text-4xl font-light mb-2 relative z-10">Meet Team DevSomeware</h2>
          <p className="text-purple-400 mb-16 relative z-10">Not just an agency—The development partners you&apos;ve been looking for</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            <div className="flex justify-center md:justify-start">
              <div className="w-64 h-64 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/40 to-purple-700/20 flex items-center justify-center">
                {/* This would be replaced with an actual profile image */}
                <div className="w-32 h-32 rounded-full bg-purple-800/30 flex items-center justify-center text-2xl">
                  👨‍💻
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-light mb-2">Alex Thompson</h3>
              <p className="text-purple-400 mb-6">25+ years development veteran. SaaS founder with successful exits</p>
              
              <p className="text-gray-300 mb-4">
                After building Nexus, a developer platform used by thousands of 
                engineers and startups worldwide (including Spotify, Shopify, 
                and Tesla before my six-figure exit), I know firsthand what 
                moves the needle in SaaS businesses.
              </p>
              
              <p className="text-gray-300 mb-4">
                This experience, plus development and business insights I&apos;ve shared with 
                85K+ followers on GitHub over 12 years, shows that success isn&apos;t just 
                about elegant code—it&apos;s about solving real business problems 
                through smart development.
              </p>
              
              <p className="text-gray-300">
                I started DevSomeware to help SaaS founders turn development into a growth 
                engine instead of just a cost. Having been a founder myself, I tackle 
                every project with both a developer&apos;s eye and a focus on the numbers 
                that grow your business.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-24 relative z-10">
            <div className="md:order-2">
              <div className="w-64 h-64 rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/40 to-purple-700/20 flex items-center justify-center ml-auto mr-auto md:ml-auto md:mr-0">
                {/* This would be replaced with an actual profile image */}
                <div className="w-32 h-32 rounded-full bg-purple-800/30 flex items-center justify-center text-2xl">
                  👩‍💻
                </div>
              </div>
            </div>
            <div className="md:order-1">
              <h3 className="text-3xl font-light mb-2">Jamie Davis</h3>
              <p className="text-purple-400 mb-6">Frontend expert &amp; UX specialist with 10+ years in SaaS</p>
              
              <p className="text-gray-300 mb-4">
                Throughout my career, I&apos;ve focused on the critical intersection between 
                powerful functionality and intuitive user experiences. After leading 
                frontend teams at both startups and enterprise companies, I understand 
                the technical challenges of scaling applications.
              </p>
              
              <p className="text-gray-300 mb-4">
                My work has been featured in several tech publications, and I&apos;ve spoken 
                at conferences about modern development approaches that prioritize both 
                performance and user satisfaction.
              </p>
              
              <p className="text-gray-300">
                At DevSomeware, I ensure our solutions are not just well-architected, 
                but also engage users effectively to drive the metrics that matter most 
                to your business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-24 px-4 sm:px-12 md:px-20 max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-2">Our services</h2>
          <p className="text-purple-400 mb-16">Comprehensive development solutions tailored to your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "API Development &amp; Integration",
                description: "Connect your product to third-party services or build custom APIs that power your platform."
              },
              {
                title: "Frontend Engineering",
                description: "Create responsive, fast, and engaging user interfaces that convert visitors into customers."
              },
              {
                title: "Backend Systems",
                description: "Build robust server infrastructure, databases, and microservices that scale with your business."
              },
              {
                title: "Performance Optimization",
                description: "Identify and fix bottlenecks to ensure your application runs at peak efficiency."
              },
              {
                title: "Technical Consulting",
                description: "Get expert guidance on architecture decisions, technology choices, and development strategies."
              },
              {
                title: "DevOps &amp; CI/CD",
                description: "Streamline your development pipeline with automated testing, deployment, and monitoring."
              }
            ].map((service, index) => (
              <div key={index} className="glass-card p-8 transition-all hover:bg-purple-900/10 hover:translate-y-[-4px]">
                <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 sm:px-12 md:px-20 max-w-7xl mx-auto relative">
          {/* Subtle spotlight for this section */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent"></div>
          
          <h2 className="text-4xl font-light mb-2 relative z-10">What our clients say</h2>
          <p className="text-purple-400 mb-16 relative z-10">Results-driven development that speaks for itself</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {[
              {
                quote: "DevSomeware transformed our MVP into a scalable product that helped us secure our Series A. Their focus on metrics that drive growth was exactly what we needed.",
                name: "Sarah Johnson",
                title: "CEO, DataSync"
              },
              {
                quote: "Working with Alex and Jamie was the best decision we made. They didn&apos;t just build features—they built solutions that directly improved our conversion rates by 32%.",
                name: "Michael Chen",
                title: "Founder, MarketReach"
              },
              {
                quote: "Their technical expertise is impressive, but what really sets DevSomeware apart is their business acumen. They understand what drives SaaS growth.",
                name: "Priya Patel",
                title: "Product Lead, SalesPulse"
              },
              {
                quote: "We needed to integrate with 5 complex APIs and optimize our backend—DevSomeware delivered in half the time our previous agency estimated.",
                name: "David Anderson",
                title: "CTO, CloudTrack"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-8 relative">
                <div className="absolute top-8 left-8 text-5xl text-purple-500/50">❝</div>
                <p className="text-gray-300 mb-6 relative z-10 pl-8 pt-8">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-700/30 flex items-center justify-center">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 px-4 bg-purple-900/20 relative">
          <div className="spotlight-container">
            <div className="spotlight" style={{ top: '-80%' }}></div>
          </div>
          <div className="absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width=\&quot;20\&quot; height=\&quot;20\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot;%3E%3Cpath d=\&quot;M0 0h20v20H0z\&quot; fill=\&quot;%237c3aed\&quot; fill-opacity=\&quot;.05\&quot;%3E%3C/path%3E%3C/svg%3E&apos;)] opacity-10"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-light mb-6">Ready to build something great?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help turn your development challenges into growth opportunities. 
              Our team is ready to bring your vision to life.
            </p>
            
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-black border-t border-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center gap-2 mb-6 md:mb-0">
                <Image 
                  src="/devsomeware-logo.svg" 
                  alt="DevSomeware Logo" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8" 
                />
                <span className="font-medium tracking-wide">DEVSOMEWARE</span>
              </div>
              <nav className="flex flex-wrap justify-center gap-6">
                <a href="#services" className="text-sm hover:text-purple-300 transition-colors">Services</a>
                <a href="#method" className="text-sm hover:text-purple-300 transition-colors">Our Method</a>
                <a href="#about" className="text-sm hover:text-purple-300 transition-colors">About</a>
                <a href="#contact" className="text-sm hover:text-purple-300 transition-colors">Contact</a>
              </nav>
            </div>
            <div className="border-t border-purple-900/20 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                © 2025 DevSomeware. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}