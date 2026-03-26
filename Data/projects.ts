// data/projects.ts

import { ProjectCard } from "@/app/projects/types/project";

export const PROJECTS: ProjectCard[] = [
  {
    idx: 0,
    id: "253818ec-cbfb-49b3-93db-fa8a3e72ce93",
    title: "Golobe Travel Agency website",
    short_description: "Modern travel booking platform with real-time availability",
    long_description:
      "A full-featured travel agency website built with Next.js and Firebase, offering seamless booking experiences for flights, hotels, and vacation packages. The platform features real-time availability checks, personalized recommendations, and a comprehensive admin dashboard for managing bookings and user accounts. Serves 300+ monthly active users with 95% satisfaction rate.",
    image_url:
      "/assets/golobe.webp",
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
    timeline: "2 months ",
    team: "Solo Project",
    category: "web",
    gallery_urls: [
      "/assets/golobe.webp",
      "/assets/golobe1.webp",
      "/assets/golobe2.webp",
      "/assets/golobe3.webp",
      "/assets/golobe4.webp",
      "/assets/golobe5.webp",
    ],
    reflection:
      "Building Golobe taught me how to handle complex state management for travel itineraries. The biggest challenge was implementing the real-time booking synchronization across different service providers. I learned to work with Firestore's real-time listeners effectively and created a custom caching layer to handle fluctuating prices. The project deepened my understanding of geo-spatial queries for location-based recommendations.",
    created_at: "2025-06-29 17:29:37.602019+00",
  },
  {
    idx: 1,
    id: "327bdd60-6057-4304-ac1c-ef36a7fc4e1d",
    title: "Landing Page",
    short_description:
      "A modern, responsive marketing landing page built with Next.js, Tailwind, Sass, and MUI—deployed on Netlify.",
    long_description:
      "A clean and fast landing page designed to showcase a product/service with a modern UI and smooth responsiveness. Built with Next.js and JavaScript, styled using a mix of Tailwind CSS and Sass, and enhanced with Material UI components where needed. Optimized for performance and accessibility, with a structure that’s easy to extend (sections, CTA blocks, pricing/testimonials, etc.). Deployed on Netlify for simple CI/CD and quick previews.",
    image_url:
      "/assets/lp.webp",
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
    category: "web",
    gallery_urls: [
      "/assets/lp.webp",
      "/assets/lp1.webp",
      "/assets/lp2.webp",
      "/assets/lp3.webp",
      "/assets/lp4.webp",
      "/assets/lp5.webp",
      "/assets/lp6.webp",
      "/assets/lp7.webp",
      "/assets/lp8.webp",

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
      "/assets/digital-hippo.jpg",
    demo_url: "https://www.digital-hippo.com/",
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
    category: "web",
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
      "/assets/dashboard.webp",
    demo_url: "https://jumpstones.picturespark.app",
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
    category: "web",
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
  {
    idx: 4,
    id: "7f0a1f82-2df8-4d35-8b3e-9d8e6f4c1a70",
    title: "Converty",
    short_description: "E-commerce app for creating and managing online stores",
    long_description:
      "Converty is a mobile e-commerce app that helps merchants create online stores quickly, manage orders, and handle day-to-day business operations from their phone.",
    image_url: "https://play-lh.googleusercontent.com/44xWUiyaUmVcOq2D2bkGbX3kaWh8TpEmiFBjcoXPSzlITCj8TtfKHQHlUsX0TIYHb3hA=w480-h960-rw",
    demo_url: "",
    github_url: "",
    google_play_url:
      "https://play.google.com/store/apps/details?id=com.converty.app&hl=en",
    app_store_url:
      "https://apps.apple.com/us/app/converty-shop/id6466304252",
    tags: ["React Native", "E-commerce", "Mobile", "Order Management"],
    challenges: [
      "Designing a mobile-first order management workflow",
      "Handling notifications and permissions consistently",
      "Supporting multi-country operational requirements",
    ],
    features: [
      "Store setup and management from mobile",
      "Order tracking with improved status visibility",
      "Scanner and barcode-based workflows",
      "Product variants and bundles support",
    ],
    technologies:
      '[{"name": "Mobile App", "description": "Native-like experience for store owners"}, {"name": "Push Notifications", "description": "Timely order and activity updates"}, {"name": "Barcode Scanner", "description": "Fast product and order handling"}]',
    timeline: "Ongoing",
    team: "Converty Team",
    category: "mobile",
    gallery_urls: [
      "https://play-lh.googleusercontent.com/JPGvJUJOxEmsmkmJl2VT7rpdN5PkkIGLL_XKHFaKwO0atYE8YQyS7_h2XDuVk-5bRydsgmMEfxZ_-lqVmdqE7rc=w5120-h2880-rw",
      "https://play-lh.googleusercontent.com/kIZMRGG5ZvN3ITEN1J55QMYTpMgJmu7T1xX8u3qmrFuu_RFo3t7OAYZZ2U8olhy5gyHz_ar0-VpI4Aq5tBoYyaY=w5120-h2880-rw",
      "https://play-lh.googleusercontent.com/BagqvBxZJkNeLUCPBPOEl8t4k_G7RVz4FcsgJx1w_AR41jVQi8xAS3kbQPQFWeavdx2OK3s7ZqZ50IdKKVDbD-k=w5120-h2880-rw",
    ],
    reflection:
      "Image placeholders are intentionally left empty for now. Replace `image_url` and `gallery_urls` with final screenshots later.",
    created_at: "2026-03-21 00:00:00+00",
  },
];
