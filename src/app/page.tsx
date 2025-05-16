"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Package, Info, Mail } from 'lucide-react';
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';

const Page = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
 
  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  // Logo animation
  const logoVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 2, 0, -2, 0],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  return (
    <div className='-mt-24'>
      {/* Main Navbar */}
      <header className="sticky top-0 left-0 w-full z-50 ">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
             <Image
              src="/tra.png"
              alt="DWS Logo"
              width={80}
              height={80}
              className="sm:ml-0 md:ml-4 lg:ml-36 relative z-10 object-contain h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 md:mr-4 lg:mr-36">
            <Link href="/pricing" className="text-white hover:text-pink-500 transition-colors flex items-center gap-2 group">
              <Home size={18} className="group-hover:scale-110 transition-transform" />
              <span className="relative overflow-hidden">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">Home</span>
                <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-pink-500">Home</span>
              </span>
            </Link>
            <Link href="/resources" className="text-white hover:text-pink-500 transition-colors flex items-center gap-2 group">
              <Package size={18} className="group-hover:scale-110 transition-transform" />
              <span className="relative overflow-hidden">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">Products</span>
                <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-pink-500">Products</span>
              </span>
            </Link>
            <Link href="/community" className="text-white hover:text-pink-500 transition-colors flex items-center gap-2 group">
              <Info size={18} className="group-hover:scale-110 transition-transform" />
              <span className="relative overflow-hidden">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
                <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-pink-500">About</span>
              </span>
            </Link>
            <Link href="/download" className="text-white hover:text-pink-500 transition-colors flex items-center gap-2 group">
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              <span className="relative overflow-hidden">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">Contact</span>
                <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-pink-500">Contact</span>
              </span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden text-white relative z-50"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col h-full p-6 pt-20">
              <nav className="flex flex-col space-y-6 text-lg">
                <motion.div variants={menuItemVariants}>
                  <Link href="/pricing" className="text-white hover:text-pink-500 transition-colors flex items-center gap-2">
                    <Home size={18} />
                    Home
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link href="/resources" className="text-white hover:text-pink-500 transition-colors flex items-center gap-2">
                    <Package size={18} />
                    Products
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link href="/community" className="text-white hover:text-pink-500 transition-colors flex items-center gap-2">
                    <Info size={18} />
                    About
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants}>
                  <Link href="/download" className="text-white hover:text-pink-500 transition-colors flex items-center gap-2">
                    <Mail size={18} />
                    Contact
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Video */}
      <div className="relative h-screen ">
        
       <video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="absolute top-0 left-0 -ml-32 md:ml-0 max-w-[850px] sm:max-w-[900px] md:max-w-[1700px] lg:w-full  sm:mt-0 md:mt-0 lg:mt-0 mt-[30px] h-[900px] sm:h-[1200px] lg:h-[1500px] object-fill sm:object-cover md:object-fill lg:object-cover z-0"
>
  <source src="/hero.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        
        {/* Large Brand Logo Overlay with animation - responsive positioning */}
        <motion.div
          className="hidden sm:block absolute sm:mr-5 mr-24 top-1/4 sm:right-10 transform -translate-y-1/2 w-1/3 sm:w-1/4 max-w-xs z-20 opacity-40 sm:opacity-40"
          variants={logoVariants}
          animate="animate"
        >
          <Image
            src="/kk.png"
            alt="Brand Logo"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:ml-4 ml-0 sm:px-0 md:px-8 lg:px-[170px] h-full flex flex-col justify-center">
          <h1 className="text-4xl -mt-64 sm:mt-0 md:mt-0 lg:mt-0 sm:text-5xl md:text-7xl font-bold text-white mb-4">
            The Ultimate Hub<br />
            for SaaS
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-xs sm:max-w-sm md:max-w-lg mb-6 sm:mb-8">
            DevSomeware SaaS is your all-in-one solution for<br />
            managing and optimizing your software as a service<br />
          </p>
          <Link href="/try-it-free" className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 hover:brightness-110 transition-all px-6 sm:px-8 py-3 rounded-full text-white font-medium w-fit text-sm sm:text-base">
            TRY IT FREE →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;