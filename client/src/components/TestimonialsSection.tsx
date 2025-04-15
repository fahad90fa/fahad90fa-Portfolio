import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials, Testimonial } from '@/data/testimonials';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [titleRef, isTitleVisible] = useScrollAnimation<HTMLDivElement>();
  const { theme } = useTheme();
  
  // Handle testimonial rotation
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 1000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);
  
  // Pause autoplay when hovering over testimonials
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  // Manual navigation
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  // Generate star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        className={cn(
          "w-5 h-5", 
          i < rating 
            ? "text-yellow-400" 
            : "text-gray-300 dark:text-gray-600"
        )}
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };
  
  // Calculate positions and z-index for 3D effect
  const getCardStyles = (index: number) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    const normalizedDiff = diff > testimonials.length / 2 ? diff - testimonials.length : diff;
    
    // Base styles
    let opacity = 1;
    let scale = 1;
    let zIndex = 1;
    let x = '0%';
    let rotateY = '0deg';
    
    // Position based on distance from active
    if (normalizedDiff === 0) {
      // Active card
      zIndex = 3;
    } else if (normalizedDiff === 1 || normalizedDiff === -1) {
      // Adjacent cards
      opacity = 0.7;
      scale = 0.85;
      x = normalizedDiff === 1 ? '85%' : '-85%';
      rotateY = normalizedDiff === 1 ? '-15deg' : '15deg';
      zIndex = 2;
    } else if (normalizedDiff === 2 || normalizedDiff === -2) {
      // Further cards
      opacity = 0.4;
      scale = 0.7;
      x = normalizedDiff === 2 ? '150%' : '-150%';
      rotateY = normalizedDiff === 2 ? '-25deg' : '25deg';
      zIndex = 1;
    } else {
      // Hidden cards
      opacity = 0;
      scale = 0.5;
      x = normalizedDiff > 0 ? '200%' : '-200%';
      zIndex = 0;
    }
    
    return {
      opacity,
      scale,
      x,
      rotateY,
      zIndex
    };
  };
  
  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-dark-card text-primary-600 dark:text-primary-400 mb-3">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What My Clients Say</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear what my clients have to say about working together on their digital projects.
          </p>
        </motion.div>
        
        {/* Background decoration */}
        <div className="absolute left-0 right-0 w-full -z-10 opacity-10">
          <motion.div 
            className="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary-300 dark:bg-primary-900 blur-3xl"
            animate={{ 
              y: [0, 30, 0],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute top-80 right-20 w-72 h-72 rounded-full bg-secondary-300 dark:bg-secondary-900 blur-3xl"
            animate={{ 
              y: [0, -40, 0],
              opacity: [0.1, 0.15, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 10,
              delay: 1, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        <div 
          className="relative py-10 px-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* 3D Effect - Perspective container */}
          <div 
            className="relative h-[600px] sm:h-[550px] md:h-[450px] lg:h-[400px] perspective-1000 w-full max-w-4xl mx-auto"
            style={{ perspective: '1000px' }}
          >
            {/* Testimonial Cards */}
            {testimonials.map((testimonial, index) => {
              const styles = getCardStyles(index);
              
              return (
                <motion.div
                  key={testimonial.id}
                  className="absolute top-0 left-0 right-0 w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                  initial={false}
                  animate={{
                    opacity: styles.opacity,
                    scale: styles.scale,
                    x: styles.x,
                    rotateY: styles.rotateY,
                    zIndex: styles.zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {/* Color accent top border */}
                  <div className="h-2 bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500"></div>
                  
                  <div className="p-6 sm:p-8 md:p-10">
                    {/* Header with client info */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-primary-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="sm:ml-2">
                        <h3 className="font-bold text-xl">{testimonial.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    {/* Rating and testimonial content */}
                    <div>
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                        <span className="ml-2 text-gray-500 dark:text-gray-400 text-sm">
                          {testimonial.rating}.0/5.0
                        </span>
                      </div>
                      
                      <div className="relative">
                        {/* Quote mark background */}
                        <svg
                          className="absolute top-0 left-0 h-24 w-24 text-gray-100 dark:text-gray-800 -z-10 transform -translate-x-1/4 -translate-y-1/4"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        
                        {/* Testimonial text */}
                        <blockquote className="relative z-10 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex flex-col items-center mt-12">
            {/* Dots indicators */}
            <div className="flex space-x-3 mb-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-6 bg-gradient-to-r from-primary-500 to-secondary-500'
                      : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Arrow buttons */}
            <div className="flex space-x-4">
              <motion.button
                type="button"
                onClick={handlePrev}
                className="px-6 py-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:-translate-x-1 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="font-medium">Previous</span>
                </div>
              </motion.button>
              
              <motion.button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 shadow-md hover:shadow-xl transition-all duration-300 text-white hover:translate-x-1 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
              >
                <div className="flex items-center">
                  <span className="font-medium">Next</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            </div>
            
            {/* Autoplay toggle */}
            <motion.button 
              onClick={() => setAutoplay(!autoplay)}
              className={`mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {autoplay ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Pause Autoplay</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Resume Autoplay</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}