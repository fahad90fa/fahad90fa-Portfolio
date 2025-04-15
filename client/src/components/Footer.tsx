import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: "fa-linkedin-in", url: "#" },
    { icon: "fa-whatsapp", url: "#" },
    
  ];

  return (
    <footer className="py-10 px-6 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
              Fahad Bin Yousaf
            </span>
            <p className="text-gray-400 mt-2">Full-Stack Developer</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`fab ${link.icon}`}></i>
                </motion.a>
              ))}
            </div>
            
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Fahad. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
