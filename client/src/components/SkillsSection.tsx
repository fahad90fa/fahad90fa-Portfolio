import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Technical Skills</h2>
          <div className="section-underline mx-auto"></div>
          <p className="section-subtitle">
            I've worked with a variety of technologies in the web development and AI integration space.
            Here's a comprehensive breakdown of my technical toolkit.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-8 card-animation"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-dark-surface flex items-center justify-center mr-4">
                  <i className={`fas ${category.icon} text-xl text-primary-500`}></i>
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <motion.div 
                className="grid grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={`${category.id}-${skillIndex}`}
                    className="flex flex-col items-center skill-icon"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 rounded-lg bg-light-card dark:bg-dark-surface flex items-center justify-center mb-2">
                      {skill.type === "custom-svg" ? (
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: skill.svgPath || "" }} />
                      ) : (
                        <i className={`${skill.type === "brand" ? "fab" : "fas"} ${skill.icon} text-3xl ${skill.color}`}></i>
                      )}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
