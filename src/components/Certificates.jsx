import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Generative AI – Skill Development Program",
      issuer: "NASSCOM",
      date: "Feb 2026",
      description: "Acquired comprehensive knowledge and hands-on skills in Generative AI concepts, applications, and framework utilization as part of NASSCOM's skill development initiative.",
      link: "https://drive.google.com/file/d/1XnE-W2OFCrxww2vP72Mt-xm8zl_AhQu5/view"
    },
    {
      title: "Oracle Certified Foundation Associate",
      issuer: "Oracle",
      date: "2026",
      description: "Demonstrating a strong understanding of core programming, databases, and cloud fundamentals. This certification validates knowledge of basic Java, SQL, and cloud concepts, along with problem-solving and software development fundamentals.",
      link: "https://drive.google.com/file/d/1b9BXOHi1RPPB1SHL4mGOoLR70tBqyl9F/view?usp=sharing" // Replace with actual image URL or PDF link
    },
    {
      title: "Mastering Data Structures and Algorithms",
      issuer: "Board Infinity",
      date: "2025",
      description: "Demonstrated proficiency in algorithmic problem-solving and optimization. Mastered advanced data structures like Trees, Graphs, and Hash Tables to write efficient, scalable, and optimized code.",
      link: "https://drive.google.com/file/d/14kf84EGENXVJ5rOa5B_PCs_2cq4T3vgy/view?usp=sharing" // Replace with actual image URL or PDF link
    },
    {
      title: "Computational Theory: Language Principle & Finite Automata Theory",
      issuer: "Infosys Springboard",
      date: "2025",
      description: "Acquired a deep understanding of formal languages, automata, and Turing machines. Developed strong theoretical foundations in computation, parsing algorithms, and state machines.",
      link: "https://drive.google.com/file/d/1xqy87EfgVk_R49ybbeQIJnkuf9-l7AqV/view?usp=sharing"
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      date: "2025",
      description: "Privacy and Security in Online Social Media focuses on protecting users’ personal information while using social networking platforms. It involves using privacy settings, secure authentication, and safe online practices to prevent data misuse and cyber threats. This concept helps users maintain control over their personal data and ensures a safer online experience",
      link: "https://drive.google.com/file/d/18CDsXwpsJ--XPkCN6HwlDjejTF5vDVyP/view?usp=sharing"
    },
    {
      title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      issuer: "Infosys Springboard",
      date: "2025",
      description: "ChatGPT-4 Prompt Engineering focuses on creating effective prompts to get accurate responses from Generative AI and Large Language Models (LLMs). It helps users use AI tools efficiently for tasks like content creation, coding, and problem solving",
      link: "https://drive.google.com/file/d/1t54fntkaeeO4slIYCWRl2hN36Krzf5Ov/view?usp=sharing"
    },
    {
      title: "C Programming",
      issuer: "Cipher School",
      date: "2024",
      description: "It's a foundational programming language used to develop efficient and high-performance software. It helps in understanding core programming concepts such as variables, control structures, functions, and memory management, which are essential for building strong programming skills.",
      link: "https://drive.google.com/file/d/1buWrAaiM5Q1hCx6eIEgAViHPoqf6HKEy/view?usp=sharing"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-4 text-gray-900 dark:text-white">
            My <span className="text-gradient">Certificates</span> 
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and focused technical training programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl dark:hover:shadow-primary-dark/30"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-light/20 to-accent/20 dark:from-primary-light/10 dark:to-accent/10 rounded-full flex items-center justify-center text-primary-dark dark:text-primary-light mb-6">
                <Award size={32} />
              </div>
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
              <p className="text-primary-dark dark:text-primary-light font-medium mb-4">{cert.issuer} • {cert.date}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed min-h-[80px] mb-6">
                {cert.description}
              </p>
              
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                >
                  View Certificate
                  <ExternalLink size={16} className="ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
