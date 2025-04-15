import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only show custom cursor on devices with mouse pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsVisible(mediaQuery.matches);
    
    // Update cursor position
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    // Detect interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === "a" || 
        target.tagName.toLowerCase() === "button" ||
        target.closest(".card-animation") !== null ||
        target.closest(".skill-icon") !== null;
      
      setIsHovering(isInteractive);
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <motion.div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference rounded-full ${isHovering ? 'bg-secondary-400 bg-opacity-40' : 'bg-accent-400 bg-opacity-70'}`}
      style={{
        translateX: position.x,
        translateY: position.y,
      }}
      animate={{
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
        x: -1 * (isHovering ? 20 : 10),
        y: -1 * (isHovering ? 20 : 10),
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    />
  );
}
