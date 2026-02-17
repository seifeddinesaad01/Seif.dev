// data/projects.ts

import { ProjectCard } from "@/app/projects/types/project";

export const PROJECTS: ProjectCard[] = [
  {
    idx: 0,
    id: "253818ec-cbfb-49b3-93db-fa8a3e72ce93",
    title: "Golobe Travel Agency",
    short_description: "Modern travel booking platform with real-time availability",
    long_description:
      "A full-featured travel agency website built with Next.js and Firebase, offering seamless booking experiences for flights, hotels, and vacation packages. The platform features real-time availability checks, personalized recommendations, and a comprehensive admin dashboard for managing bookings and user accounts. Serves 300+ monthly active users with 95% satisfaction rate.",
    image_url:
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//golobe.png",
    demo_url: "",
    github_url: "https://github.com/seifeddinesaad01/Golobe",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Stripe", "Mapbox", "React Query"],
    challenges: [
      "Implementing real-time booking availability",
      "Syncing inventory across multiple providers",
      "Handling complex date-based pricing rules",
      "Optimizing for slow network conditions",
    ],
    features: [
      "Multi-destination trip planner",
      "Real-time availability calendar",
      "Personalized travel recommendations",
      "Integrated payment processing",
      "Booking management dashboard",
      "User review system",
    ],
    technologies:
      '[{"name": "Next.js", "description": "React framework for SSR and API routes"}, {"name": "Firebase", "description": "Realtime database and authentication"}, {"name": "Tailwind CSS", "description": "Utility-first CSS framework"}, {"name": "Stripe", "description": "Payment processing for bookings"}, {"name": "Mapbox", "description": "Interactive maps and location services"}, {"name": "React Query", "description": "Data fetching and caching"}]',
    timeline: "4 months (Q1 2024)",
    team: "Solo Project",
    category: "Web Application",
    gallery_urls: [
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//golobe.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//golobe1.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//golobe2.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//golobe3.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//golobe4.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//golobe5.png",
    ],
    reflection:
      "Building Golobe taught me how to handle complex state management for travel itineraries. The biggest challenge was implementing the real-time booking synchronization across different service providers. I learned to work with Firestore's real-time listeners effectively and created a custom caching layer to handle fluctuating prices. The project deepened my understanding of geo-spatial queries for location-based recommendations.",
    created_at: "2025-06-29 17:29:37.602019+00",
  },
  {
    idx: 1,
    id: "327bdd60-6057-4304-ac1c-ef36a7fc4e1d",
    title: "Next.js Landing Page",
    short_description:
      "A modern, responsive marketing landing page built with Next.js, Tailwind, Sass, and MUI—deployed on Netlify.",
    long_description:
      "A clean and fast landing page designed to showcase a product/service with a modern UI and smooth responsiveness. Built with Next.js and JavaScript, styled using a mix of Tailwind CSS and Sass, and enhanced with Material UI components where needed. Optimized for performance and accessibility, with a structure that’s easy to extend (sections, CTA blocks, pricing/testimonials, etc.). Deployed on Netlify for simple CI/CD and quick previews.",
    image_url:
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.41.09%20PM.png",
    demo_url: "https://landing-page-next-demo.netlify.app/",
    github_url: "https://github.com/seifeddinesaad01/NextJS-landingPage",
    tags: [
      "Next.js",
      "JavaScript",
      "Landing Page",
      "Responsive Design",
      "UI/UX",
      "Netlify",
      "Tailwind CSS",
      "Sass",
      "MUI",
    ],
    challenges: [
      "Balancing multiple styling systems (Tailwind + Sass + MUI) without conflicts",
      "Keeping a consistent design system across components and sections",
      "Ensuring responsiveness across breakpoints and devices",
      "Optimizing layout, images, and page performance for a snappy feel",
    ],
    features: [
      "Responsive multi-section layout (Hero, Features, CTA, etc.)",
      "Reusable component structure for easy edits and scaling",
      "Modern UI styling with Tailwind utilities + Sass structure",
      "Material UI components integrated for speed and consistency",
      "Deployment-ready setup on Netlify",
    ],
    technologies:
      '[{"name": "Next.js", "description": "React framework for SSR and API routes"}, {"name": "Firebase", "description": "Realtime database and authentication"}, {"name": "Tailwind CSS", "description": "Utility-first CSS framework"}, {"name": "Stripe", "description": "Payment processing for bookings"}, {"name": "Mapbox", "description": "Interactive maps and location services"}, {"name": "React Query", "description": "Data fetching and caching"}]',
    timeline: "3 Days",
    team: "Solo",
    category: "Frontend / Landing Page",
    gallery_urls: [
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.41.09%20PM.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.41.20%20PM.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.41.28%20PM.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.41.34%20PM.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.41.42%20PM.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.41.47%20PM.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.41.55%20PM.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.41.58%20PM.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.42.02%20PM.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/Screenshot%202025-12-19%20at%202.42.07%20PM.png",
    ],
    reflection:
      "This project was a good exercise in building a clean marketing UI with a scalable component structure. The main takeaway was learning how to mix Tailwind, Sass, and MUI in a controlled way (clear conventions + consistent tokens) while keeping the UI responsive and performance-friendly.",
    created_at: "2025-12-19 13:47:17.080689+00",
  },
  {
    idx: 2,
    id: "c1945c4b-5412-4933-b1a9-75fe9f45303d",
    title: "E-Commerce Platform",
    short_description: "Full-featured online shopping experience",
    long_description:
      "A modern e-commerce platform built with Next.js and integrated with Stripe payments. The platform features a complete shopping experience with product discovery, seamless checkout, and admin dashboard for inventory management.",
    image_url:
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//thedigitalhippo.jpg",
    demo_url: "",
    github_url: "https://github.com/seifeddinesaad01/The-Digital-Hippo",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "TypeScript", "PostgreSQL", "Redis"],
    challenges: [
      "Implementing PCI-compliant payment flow",
      "Reducing page load time from 4.2s to 0.8s",
      "Building real-time inventory sync system",
      "Supporting multiple currencies and languages",
    ],
    features: [
      "Advanced search with filters",
      "Personalized recommendations",
      "Single-page checkout process",
      "Order tracking with live updates",
      "Admin dashboard with analytics",
    ],
    technologies:
      '[{"name": "Next.js", "description": "React framework for server-side rendering"}, {"name": "Stripe API", "description": "Payment processing and security"}, {"name": "Tailwind CSS", "description": "Utility-first CSS framework"}, {"name": "PostgreSQL", "description": "Relational database for product data"}, {"name": "Redis", "description": "Caching and real-time inventory management"}, {"name": "Vercel", "description": "Deployment platform with edge caching"}]',
    timeline: "6 months (Q2 2023)",
    team: "Solo Project",
    category: "Web Application",
    gallery_urls: [
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//a.jpg",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//b.jpg",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//c.jpg",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//d.jpg",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//e.jpg",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//f.jpg",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//k.jpg",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//m.jpg",
    ],
    reflection:
      "Building this e-commerce platform taught me the importance of resilience in distributed systems. The biggest challenge was implementing idempotent payment operations to handle network failures. I learned to implement proper inventory reservation systems, design for eventual consistency in cart operations, and create comprehensive test suites for financial workflows. Seeing users complete purchases smoothly validated the attention to detail in the checkout flow design.",
    created_at: "2025-06-29 17:13:44.292377+00",
  },
  {
    idx: 3,
    id: "f1a2b3c4-d5e6-4789-abcd-0123456789ef",
    title: "Picturespark",
    short_description:
      "Coaching platform with scheduling, video calls & interactive sessions",
    long_description:
      "Picturespark is a full-featured coaching platform built with Next.js and Supabase, styled in Tailwind CSS and deployed on AWS via Docker. Coaches can organize their workflows, manage bookings, host one-on-one video calls, and run real-time interactive group sessions powered by Socket.io.",
    image_url:
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/pesocomidbue//dashboard.png",
    demo_url: "",
    github_url: "",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "AWS", "Docker", "Socket.io"],
    challenges: [
      "Implementing real-time interactive sessions",
      "Scaling WebSocket connections",
      "Integrating low-latency video streams",
      "Designing a flexible coach scheduling system",
    ],
    features: [
      "Coach dashboard with calendar",
      "One-on-one video call integration",
      "Interactive group sessions",
      "Booking & payment management",
      "Session history & analytics",
    ],
    technologies:
      '[{"name": "Next.js", "description": "React framework for SSR & API routes"}, {"name": "Supabase", "description": "PostgreSQL database & auth"}, {"name": "Tailwind CSS", "description": "Utility-first CSS framework"}, {"name": "AWS", "description": "Hosting & serverless functions"}, {"name": "Docker", "description": "Containerization for consistent deployments"}, {"name": "Socket.io", "description": "Real-time WebSocket communication"}]',
    timeline: "3 months (Q2 2025)",
    team: "Solo Project",
    category: "Web Application",
    gallery_urls: [
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/1.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/2.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/3.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/4.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/5.png",
      "https://uvzufczgnlazuqyhvhcx.supabase.co/storage/v1/object/public/showcase/6.png",
    ],
    reflection:
      "Building Picturespark deepened my understanding of real-time WebSocket architectures and low-latency video streaming. The toughest part was optimizing resource usage on AWS to ensure smooth video calls under load. I learned to orchestrate Docker containers for scalability and to leverage Supabase’s edge functions for real-time data sync. This project strengthened my skills in full-stack Next.js development and real-time communication technologies.",
    created_at: "2025-06-30 16:02:41.716466+00",
  },
];
