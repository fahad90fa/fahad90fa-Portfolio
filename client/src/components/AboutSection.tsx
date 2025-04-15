import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { value: "30+", label: "Projects" },
    { value: "15+", label: "Clients" },
    { value: "10+", label: "Technologies" },
    { value: "3+", label: "Years" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-dark-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" 
                  alt="Tech workspace" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-6xl text-white font-bold">3+</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-12 -right-12 text-right"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">Years of</span>
                <p className="text-xl font-bold text-gray-900 dark:text-white">Experience</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="section-underline"></div>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I'm Fahad, a passionate Full-Stack Developer from Pakistan currently pursuing ICS Stats at Punjab College.
              I specialize in creating visually stunning and functionally robust web applications with a focus on user experience.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              My journey in web development started with a curiosity to create something meaningful and evolved into a professional 
              career where I combine creative design with technical problem-solving.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              When I'm not coding, I'm expanding my knowledge in AI and voice assistant technologies, and looking for innovative
              ways to integrate these into practical applications.
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index + 0.6, duration: 0.5 }}
                >
                  <motion.h3 
                    className="text-4xl font-bold text-primary-500"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.8 + (0.1 * index) }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
