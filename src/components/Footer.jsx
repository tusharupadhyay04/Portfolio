import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-gradient">TU.</span>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
          &copy; 2026 Tushar Upadhyay – Full Stack Developer Portfolio
        </p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
