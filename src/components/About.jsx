import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Database } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-4 text-gray-900 dark:text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I am a <strong className="text-primary-dark dark:text-primary-light">Full Stack Web Developer</strong> currently pursuing a B.Tech in Computer Science Engineering from Lovely Professional University, Punjab (2023–2027).
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I am passionate about developing modern web applications and exploring software engineering concepts. My interests include web development, data structures, algorithms, and building interactive web tools.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With hands-on experience in both frontend and backend technologies, I enjoy creating efficient, scalable solutions that solve real-world problems.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4">
                <MonitorPlay size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Frontend</h3>
              <p className="text-gray-500 dark:text-gray-400">Creating responsive and interactive user interfaces.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 sm:translate-y-8">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Backend</h3>
              <p className="text-gray-500 dark:text-gray-400">Building robust server-side logic and databases.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 sm:-mt-8">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center mb-4">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Programming</h3>
              <p className="text-gray-500 dark:text-gray-400">Solving complex problems using DSA.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
