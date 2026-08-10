import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-surface transition-colors relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary-light/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-4 text-gray-900 dark:text-white">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary-light via-accent to-transparent z-0" style={{ top: '24px', bottom: '24px' }}></div>

          <div className="space-y-12">
            
            {/* B.Tech */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-center w-full"
            >
              {/* Left Side (Content) */}
              <div className="w-full md:w-[48%] ml-auto md:mr-auto md:ml-0 md:pr-12 md:text-right flex flex-col items-start md:items-end">
                <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 w-full text-left md:text-right border-l-4 md:border-l border-t md:border-t-0 md:border-r-4 border-primary">
                  <div className="flex items-center justify-between md:flex-row-reverse mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap size={28} />
                    </div>
                    <span className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-bg px-3 py-1 rounded-full">
                      <Calendar size={14} className="mr-1 md:ml-1 md:mr-0 order-first md:order-last" />
                      2023 – Present
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Bachelor of Technology – Computer Science <br className="hidden lg:block" />and Engineering
                  </h3>
                  <h4 className="text-lg text-primary-dark dark:text-primary-light font-medium mb-2 flex items-center md:justify-end">
                    <MapPin size={18} className="mr-2 md:ml-2 md:mr-0 order-first md:order-last" />
                    Lovely Professional University, Punjab
                  </h4>
                  <p className="text-accent font-bold mb-4">
                    CGPA: 7.61
                  </p>
                  
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-dark-bg border-4 border-primary z-10 items-center justify-center shadow-lg shadow-primary/30">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              
              {/* Right side spacer for alternative layout */}
              <div className="hidden md:block md:w-[48%]"></div>
            </motion.div>

            {/* Intermediate */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex flex-col md:flex-row items-center w-full"
            >
              <div className="hidden md:block md:w-[48%]"></div>
              
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-dark-bg border-4 border-accent z-10 items-center justify-center shadow-lg shadow-accent/30">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
              
              {/* Right Side (Content) */}
              <div className="w-full md:w-[48%] mr-auto md:ml-auto md:pl-12">
                <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 w-full text-left border-l-4 border-accent">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <GraduationCap size={28} />
                    </div>
                    <span className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-bg px-3 py-1 rounded-full">
                      <Calendar size={14} className="mr-1" />
                       2021 –  2022
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Intermediate (Class XII)
                  </h3>
                  <h4 className="text-lg text-primary-dark dark:text-primary-light font-medium mb-2 flex items-center">
                    <MapPin size={18} className="mr-2" />
                    Bhartiya Bal Vidya Mandir Sr. Sec. School, Agra, Uttar Pradesh
                  </h4>
                  <p className="text-primary font-bold mb-4">
                    Percentage: 82%
                  </p>
                  
                </div>
              </div>
            </motion.div>

            {/* Matriculation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex flex-col md:flex-row items-center w-full"
            >
              {/* Left Side (Content) */}
              <div className="w-full md:w-[48%] ml-auto md:mr-auto md:ml-0 md:pr-12 md:text-right flex flex-col items-start md:items-end">
                <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 w-full text-left md:text-right border-l-4 md:border-l border-t md:border-t-0 md:border-r-4 border-primary-light">
                  <div className="flex items-center justify-between md:flex-row-reverse mb-4">
                    <div className="p-3 rounded-lg bg-primary-light/10 text-primary-light">
                      <GraduationCap size={28} />
                    </div>
                    <span className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-bg px-3 py-1 rounded-full">
                      <Calendar size={14} className="mr-1 md:ml-1 md:mr-0 order-first md:order-last" />
                       2019 –  2020
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Matriculation (Class X)
                  </h3>
                  <h4 className="text-lg text-primary-dark dark:text-primary-light font-medium mb-2 flex items-center md:justify-end">
                    <MapPin size={18} className="mr-2 md:ml-2 md:mr-0 order-first md:order-last" />
                    St. Mary's Convent School, Agra, Uttar Pradesh
                  </h4>
                  <p className="text-primary-light font-bold mb-4">
                    Percentage: 84.4%
                  </p>
                  
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-dark-bg border-4 border-primary-light z-10 items-center justify-center shadow-lg shadow-primary-light/30">
                <div className="w-2 h-2 bg-primary-light rounded-full"></div>
              </div>
              
              <div className="hidden md:block md:w-[48%]"></div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
