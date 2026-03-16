import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-4 text-gray-900 dark:text-white">
            Training & <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional development journey and practical technical exposure.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 relative overflow-hidden"
          >
             {/* Decorative element */}
             <div className="absolute top-0 right-0 p-8 opacity-5">
              <Briefcase size={120} />
             </div>

            <div className="flex items-start md:items-center justify-between mb-8 pb-8 border-b border-gray-100 dark:border-white/5 relative z-10 flex-col md:flex-row gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-light/20 to-accent/20 dark:from-primary-light/10 dark:to-accent/10 rounded-xl flex items-center justify-center text-primary-dark dark:text-primary-light">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Technical Training Programs</h3>
                  <p className="text-primary-dark dark:text-primary-light font-medium">Web Development & Programming</p>
                </div>
              </div>
              <span className="bg-gray-100 dark:bg-dark-surface text-gray-600 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-white/10">
                Continuous Journey
              </span>
            </div>
            
            <div className="relative z-10">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I have actively participated in technical training programs focused on <strong className="text-gray-900 dark:text-white">web development and programming</strong>, building a strong foundation in both theoretical concepts and practical implementation.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                These experiences have allowed me to gain practical knowledge in building real-world applications, debugging complex systems, and strengthening my <strong className="text-accent">problem-solving skills</strong> significantly. I continuously look for opportunities to learn modern technologies and apply them to my projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
