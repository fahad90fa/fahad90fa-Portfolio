import React from "react";

// Import images
import casinoGameImage from "../images/casio1.jpg";
import metafilixImage from "../images/metafilix.jpg";
import fasynateImage from "../images/fasynate.jpg";
import prayermatImage from "../images/prayer.jpg";
import lensesImage from "../images/lenz.jpg";
import ronettesImage from "../images/ronettes.jpg";

// Project Interface
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  categoryColor: string;
  technologies: string[];
  liveUrl?: string;
}

// Projects Array
export const projects: Project[] = [
  {
    id: "casino-game",
    title: "Pak Game",
    description: "A feature-rich online casino gaming platform with real-time multiplayer functionality, secure payment processing, and responsive design.",
    image: casinoGameImage,
    category: "Gaming",
    categoryColor: "bg-primary-500",
    technologies: ["React", "Node.js", "Socket.io", "SQL"],
    liveUrl: "https://pakgames.net"
  },
  {
    id: "metafilix",
    title: "Metafilix",
    description: "A cutting-edge streaming platform with personalized recommendations, curated content collections, and social watching features.",
    image: metafilixImage,
    category: "Crypto",
    categoryColor: "bg-secondary-500",
    technologies: ["React", "Next.js", "Node.js", "SQL"],
    liveUrl: "https://Metafilix.com"
  },
  {
    id: "fasynate",
    title: "Fasynate",
    description: "Premium perfume e-commerce website with elegant product displays, scent profiles, and a seamless shopping experience.",
    image: fasynateImage,
    category: "E-commerce",
    categoryColor: "bg-accent-500",
    technologies: ["Shopify", "JavaScript", "Liquid", "TailwindCSS"],
    liveUrl: "https://fasynate.com/"
  },
  {
    id: "prayermat",
    title: "Prayer Mat",
    description: "Islamic prayer mats and blankets online store with rich product filtering, cultural designs, and multi-currency support.",
    image: prayermatImage,
    category: "E-commerce",
    categoryColor: "bg-primary-400",
    technologies: ["WooCommerce", "WordPress", "PHP", "jQuery"],
    liveUrl: "https://prayermat.pk/"
  },
  {
    id: "lenses",
    title: "Lenses Shop",
    description: "Specialized e-commerce platform for contact lenses with prescription management, reorder reminders, and eye health resources.",
    image: lensesImage,
    category: "Beauty",
    categoryColor: "bg-secondary-400",
    technologies: ["Shopify", "PHP", "MySQL", "Bootstrap"],
    liveUrl: "https://lenses.com.pk/"
  },
  {
    id: "ronettes",
    title: "Ronettes",
    description: "Vibrant makeup and cosmetics e-commerce site with tutorial videos, shade matching, and personalized product recommendations.",
    image: ronettesImage,
    category: "Beauty",
    categoryColor: "bg-accent-400",
    technologies: ["WordPress", "React", "GraphQL", "Styled Components"],
    liveUrl: "https://ronettes.pk/"
  }
];


