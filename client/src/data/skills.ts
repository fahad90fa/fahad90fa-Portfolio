export interface Skill {
  name: string;
  icon: string;
  color: string;
  type: "regular" | "brand" | "custom-svg";
  svgPath?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "fa-code",
    skills: [
      { name: "HTML5", icon: "fa-html5", color: "text-orange-500", type: "brand" },
      { name: "CSS3", icon: "fa-css3-alt", color: "text-blue-500", type: "brand" },
      { name: "JavaScript", icon: "fa-js", color: "text-yellow-500", type: "brand" },
      { name: "React", icon: "fa-react", color: "text-blue-400", type: "brand" },
      { 
        name: "Tailwind", 
        icon: "", 
        color: "", 
        type: "custom-svg",
        svgPath: `<path d="M9 13.7l6.5-3.8 6.5 3.8v7.6l-6.5 3.8L9 21.3v-7.6z" fill="#38BDF8"/>`
      },
      { 
        name: "TypeScript", 
        icon: "", 
        color: "", 
        type: "custom-svg",
        svgPath: `<path d="M11.107 0v24l-6.55-3.638V4.15L11.107 0z" fill="#3178C6"/>
                  <path d="M17.6 3.428L11.107 0v24l6.493-3.696V3.428z" fill="#3178C6"/>`
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: "fa-server",
    skills: [
      { name: "Node.js", icon: "fa-node-js", color: "text-green-600", type: "brand" },
      { name: "Python", icon: "fa-python", color: "text-blue-600", type: "brand" },
      { 
        name: "MySQL", 
        icon: "", 
        color: "", 
        type: "custom-svg",
        svgPath: `<path d="M16.405 5.501H9.475v2.969h4.414c-.208 1.686-1.6 2.939-4.414 2.939-2.71 0-4.868-2.167-4.868-4.879S6.764 1.65 9.475 1.65c1.715 0 2.781.861 3.424 1.601l2.246-2.246c-1.533-1.533-3.52-2.47-5.67-2.47C4.375-1.465 0 2.946 0 7.53S4.375 16.525 9.475 16.525c4.77 0 9.037-3.412 9.037-9.037 0-.58-.056-1.282-.163-1.987z" fill="#4285F4"/>`
      }
    ]
  },
  {
    id: "ai",
    title: "AI & Voice Assistant",
    icon: "fa-microchip",
    skills: [
      { name: "OpenAI API", icon: "fa-robot", color: "text-purple-500", type: "regular" },
      { name: "ElevenLabs", icon: "fa-volume-up", color: "text-blue-500", type: "regular" },
      { name: "Speech-to-Text", icon: "fa-comment", color: "text-red-500", type: "regular" }
    ]
  },
  {
    id: "automation",
    title: "Python Automation",
    icon: "fa-cogs",
    skills: [
      { name: "Selenium", icon: "fa-spider", color: "text-gray-700 dark:text-gray-300", type: "regular" },
      { name: "BeautifulSoup", icon: "fa-hamburger", color: "text-yellow-600", type: "regular" }
    ]
  },
  {
    id: "cms",
    title: "Content Management",
    icon: "fa-file-alt",
    skills: [
      { name: "WordPress", icon: "fa-wordpress", color: "text-blue-800", type: "brand" },
      { name: "Shopify", icon: "fa-shopping-bag", color: "text-green-600", type: "regular" },
      { name: "WooCommerce", icon: "fa-store", color: "text-purple-700", type: "regular" }
    ]
  },
  {
    id: "api",
    title: "API Integrations",
    icon: "fa-plug",
    skills: [
      { name: "Twilio", icon: "fa-phone", color: "text-red-500", type: "regular" },
      { name: "WhatsApp API", icon: "fa-whatsapp", color: "text-green-500", type: "brand" },
      { name: "Salesforce", icon: "fa-briefcase", color: "text-blue-500", type: "regular" }
    ]
  }
];
