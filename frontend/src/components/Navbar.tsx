import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/*
  Navigation Bar Component
  Provides responsive navigation with hamburger menu for mobile
  Includes smooth animations, active route highlighting, and glassmorphism styling
*/
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /*
    Track active section based on scroll position
    Updates navigation highlighting dynamically
  */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'dashboard', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="glass-card"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: 'var(--spacing-md) 0',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex justify-between items-center">
        {/* Logo/Title */}
        <motion.h1
          className="text-xl font-bold cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => scrollToSection('#home')}
          style={{ color: 'var(--text-primary)' }}
        >
          🌦 Weather Risk Dashboard
        </motion.h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-md py-sm rounded-lg cursor-pointer transition-all duration-300"
                style={{
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontWeight: isActive ? '600' : '500'
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-accent-primary rounded-full"
                    layoutId="activeTab"
                    initial={{ width: 0 }}
                    animate={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden btn btn-secondary p-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="text-lg"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? '✕' : '☰'}
          </motion.span>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="mt-md pt-md border-t border-white/10"
          initial={{ y: -20 }}
          animate={{ y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.a
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="btn btn-secondary text-center relative"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: isActive ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                    border: isActive ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                    fontWeight: isActive ? '600' : '500'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 rounded-r"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;