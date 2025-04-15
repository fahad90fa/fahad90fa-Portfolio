export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechVibe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    content: "Fahad delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The attention to detail and user experience design was exceptional. His ability to understand our business needs and translate them into a functional, beautiful website is remarkable.",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Michael Chang",
    role: "CEO",
    company: "Startup Innovate",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    content: "Working with Fahad was a game-changer for our startup. He built a dashboard that made our complex data accessible and intuitive. His technical expertise combined with an eye for design resulted in a product that our users love. We've received countless compliments on the interface.",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Leila Amari",
    role: "Product Manager",
    company: "FinTech Solutions",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    content: "Fahad took our outdated financial platform and transformed it into a modern, responsive application. His ability to balance aesthetics with performance is remarkable. The new animations and UI elements have significantly improved our user engagement metrics.",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "David Wilson",
    role: "Creative Director",
    company: "Design Studio 404",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    content: "As a design agency, we have high standards for the developers we work with. Fahad not only met but exceeded our expectations. His code is clean, his design implementation is pixel-perfect, and his communication throughout the project was excellent. We'll definitely be working together again.",
    rating: 5
  },
  {
    id: "testimonial-5",
    name: "Jessica Rivera",
    role: "E-commerce Manager",
    company: "Fashion Forward",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    content: "Our online store's conversion rate increased by 35% after Fahad redesigned our checkout process. His understanding of user psychology and e-commerce best practices brought tangible results to our business. The mobile experience is now seamless and our customers love it.",
    rating: 4
  }
];