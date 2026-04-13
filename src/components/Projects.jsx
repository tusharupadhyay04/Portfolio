import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Resume Aanlyzer",
    date: "Apr 2026",
    description: "Developed an AI-powered resume analyzer that reviews resumes and provides smart suggestions to improve job readiness and ATS compatibility. Designed an easy workflow for resume upload, analysis, and instant feedback.",
    highlights: [
      "Extracts skills and keywords to evaluate resume quality.",
      "Provides suggestions to improve content and formatting.",
      "Ensures secure resume upload and analysis process."
    ],
    tech: ["HTML", "Tailwind CSS", "JavaScript", "React.js", "MongoDB","Node.js", "Express.js", "Gemini API"],
    githubUrl: "https://github.com/tusharupadhyay04/AIResumeAnalyzer", 
  },
  {
    title: "Intellectual Property Facilitation Center System",
    date: "Dec 2025",
    description: "Built a centralized IP management system to manage patents, copyrights, trademarks, and design registrations efficiently. Designed a structured workflow for documentation, verification, and approvals.",
    highlights: [
      "Streamlined coordination between users, administrators, and experts.",
      "Secure tracking and record management features."
    ],
    tech: ["HTML", "Tailwind CSS", "JavaScript", "React", "MongoDB"],
    githubUrl: "https://github.com/tusharupadhyay04/IPFC", // Replace this with your actual GitHub link
  },
  {
    title: "Gamified Habit Tracker",
    date: "Mar 2025",
    description: "Built a gamified habit tracker that helps users build daily habits using rewards, streaks, and progress tracking. Designed a simple workflow for adding habits, tracking completion, and visualizing progress.",
    highlights: [
      "Reward and streak system to keep users motivated.",
      "Progress tracking with clear and interactive dashboard.",
      "User-friendly interface for managing daily habits easily."
    ],
    tech: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/tusharupadhyay04/trackify-70-build", 
  },
  {
    title: "Binary Tree Traversal Visualizer",
    date: "Jul 2025",
    description: "Developed an interactive visualizer to demonstrate real-time execution of binary tree traversal algorithms. Displayed dynamic traversal sequences to help users understand node visiting order.",
    highlights: [
      "Step-by-step animations for Inorder, Preorder, and Postorder.",
      "Clear visualization of Data Structures."
    ],
    tech: ["HTML", "Tailwind CSS", "JavaScript", "C++", "DSA"],
    githubUrl: "https://github.com/tusharupadhyay04/MinorProject-Binary-Tree-Traversal-Visualizer-", // Replace this with your actual GitHub link
  },
  {
    title: "Huffman Encoder / Decoder",
    date: "May 2025",
    description: "Built a text compression system using Huffman Coding to reduce file size while preserving data accuracy. Implemented efficient encoding to convert text into compressed binary format.",
    highlights: [
      "Decoding module reconstructs text with zero information loss.",
      "Optimized file size effectively."
    ],
    tech: ["HTML", "Tailwind CSS", "JavaScript", "C++", "DSA"],
    githubUrl: "https://github.com/tusharupadhyay04/MajorProject-HuffmanEncodedDecoded", // Replace this with your actual GitHub link
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-surface transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, highlighting my skills in full-stack development, algorithms, and interactive interfaces.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-2xl dark:hover:shadow-primary-dark/20"
            >
               {/* Accent line on top */}
              <div className="h-1.5 w-full bg-gradient-to-r from-primary-light to-accent"></div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  <a 
                    href={project.githubUrl} 
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
                
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-dark-bg text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-full mb-4 w-max border border-gray-200 dark:border-dark-border">
                  {project.date}
                </span>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <ul className="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-2 list-disc pl-4 marker:text-primary-light">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-primary-dark dark:text-primary-light bg-primary-light/10 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
