import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

// ✅ IMPORT FILES (IMPORTANT)
import profileImg from '../assets/profile.png';
import resumeFile from '../assets/FinalCVtusha2_compressed.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <br />
              <span className="text-gradient whitespace-nowrap">Tushar Upadhyay</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
              Full Stack Web Developer
            </p>

            <p className="max-w-xl text-base md:text-lg text-gray-500 dark:text-gray-400 mb-8 mx-auto md:mx-0">
              Passionate about building modern web applications and solving real-world problems.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              
              {/* Projects */}
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>

              {/* ✅ Resume FIXED */}
              <a 
                href={resumeFile}
                download="Tushar_Upadhyay_Resume.pdf"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition"
              >
                Download Resume
                <Download className="ml-2 w-4 h-4" />
              </a>

              {/* Contact */}
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition"
              >
                Contact Me
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-light to-accent opacity-20 blur-2xl"></div>

              <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden">
                {/* ✅ Image FIXED */}
                <img 
                  src={profileImg}
                  alt="Tushar Upadhyay"
                  className="w-full h-full object-cover"
                  loading="lazy"
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