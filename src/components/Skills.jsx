import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Network } from 'lucide-react';

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ]
  },
  {
    category: "Technology & Frameworks",
    skills: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertDark: true },
      { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "RESTful APIs", icon: Network }
    ]
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", invertDark: true },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Generative AI", icon: Sparkles },
      { name: "Prompt Engineering", icon: Wand2 }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-4 text-gray-900 dark:text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of the programming languages, frameworks, technologies, and tools I use to build modern applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillsData.map((categoryData, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-200 dark:border-dark-border pb-4">
                {categoryData.category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 md:gap-8 justify-center sm:justify-start"
              >
                {categoryData.skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-surface rounded-xl shadow-sm border border-gray-100 dark:border-white/5 w-24 h-24 md:w-32 md:h-32 group transition-all"
                  >
                    {skill.icon ? (
                      <skill.icon className="w-10 h-10 md:w-12 md:h-12 mb-3 text-primary group-hover:scale-110 transition-transform" />
                    ) : (
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className={`w-10 h-10 md:w-14 md:h-14 mb-3 object-contain filter drop-shadow-sm group-hover:drop-shadow-md transition-all ${skill.invertDark ? 'dark:invert' : ''}`}
                      />
                    )}
                    <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
