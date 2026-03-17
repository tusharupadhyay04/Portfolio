import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-dark/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            {/* <h2 className="text-sm md:text-base font-semibold text-primary-light tracking-widest uppercase mb-3">
              Welcome to my portfolio
            </h2> */}
            <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-6">
              Hi, I'm <br />
              <span className="text-gradient whitespace-nowrap">Tushar Upadhyay</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
              Full Stack Web Developer
            </p>
            <p className="max-w-xl text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 mx-auto md:mx-0">
              Passionate about building modern web applications and solving real-world problems through technology.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="FinalCVtusha2_compressed.pdf" 
                download="Tushar_Upadhyay_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
              >
                Download Resume
                <Download className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
              >
                Contact Me
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-light to-accent opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white/50 dark:border-dark-surface/50 shadow-2xl overflow-hidden glass">
                <img 
                  src="profile.png" 
                  alt="Tushar Upadhyay" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://ui-avatars.com/api/?name=Tushar+Upadhyay&background=0284c7&color=fff&size=512";
                  }}
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
