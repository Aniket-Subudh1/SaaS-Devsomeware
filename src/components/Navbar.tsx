'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/' },
    { name: 'Events', path: '/' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Find current path and set active item
  useEffect(() => {
    const path = window.location.pathname;
    const currentItem = navItems.find(item => item.path === path);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 top-5 transition-all duration-500 flex justify-center ${
        scrolled 
          ? 'py-1' 
          : 'py-2'
      }`}
    >
      <div 
        className={`
          mx-auto px-3 rounded-full flex items-center 
          transition-all duration-500 border border-white/10
          ${scrolled 
            ? 'bg-black/80 backdrop-blur-md w-[95%] max-w-4xl shadow-xl shadow-purple-500/20' 
            : 'bg-gradient-to-r from-black/40 to-black/30 backdrop-blur-sm w-[95%] max-w-4xl'
          }
        `}
      >
        {/* Logo with improved hover effect */}
        <Link href="/" className="flex items-center py-2 group">
          <div className="relative flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/tra.png" 
                width={36}
                height={36}
                alt="DevSomeware" 
                className="h-6 w-auto object-contain filter drop-shadow-lg"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                }}
              />
              
              {/* Enhanced glow effect */}
              <div className="absolute -inset-1.5 bg-purple-600/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"></div>
            </motion.div>
          </div>
        </Link>

        {/* Center aligned Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-2">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href={item.path}
                onClick={() => setActiveItem(item.name)}
                className={`
                  relative px-3 py-2 text-xs font-medium transition-all duration-200
                  rounded-full flex items-center justify-center
                  ${activeItem === item.name 
                    ? 'text-purple-300 bg-purple-900/20' 
                    : 'text-white/90 hover:text-white hover:bg-white/5'}
                `}
              >
                {item.name}
                {activeItem === item.name && (
                  <motion.span 
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-auto"
        >
          <Link 
            href="/"
            className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-xs font-medium px-3 py-2 rounded-full shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Mobile Menu Button with improved animation */}
        <motion.button 
          className="md:hidden ml-3 relative text-white focus:outline-none p-2 rounded-full overflow-hidden group"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-fuchsia-500/20 group-hover:from-purple-600/30 group-hover:to-fuchsia-500/30 transition-colors duration-300"></div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 relative z-10 drop-shadow-sm" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu with improved animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              md:hidden absolute left-1/2 transform -translate-x-1/2 top-14
              w-[90%] max-w-sm overflow-hidden
              bg-gradient-to-b from-black/90 via-black/85 to-black/80 backdrop-blur-lg 
              rounded-xl border border-white/10
              shadow-xl shadow-purple-500/20
            "
          >
            <div className="p-3 flex flex-col space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href={item.path}
                    className={`
                      relative text-xs font-medium px-3 py-2.5
                      rounded-lg transition-all duration-200
                      flex items-center
                      ${activeItem === item.name
                        ? 'text-purple-300 bg-purple-900/20' 
                        : 'text-white hover:bg-white/5'}
                    `}
                    onClick={() => {
                      setActiveItem(item.name);
                      setMenuOpen(false);
                    }}
                  >
                    {activeItem === item.name && (
                      <motion.span 
                        layoutId="mobile-indicator"
                        className="absolute left-0 top-0 bottom-0 w-0.5 my-1 rounded-full bg-gradient-to-b from-purple-400 to-fuchsia-500"
                      />
                    )}
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 px-2"
              >
                <Link 
                  href="/"
                  className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-xs font-medium w-full py-2.5 rounded-lg flex justify-center items-center shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;