// data/projects.ts

import { ProjectCard } from "@/app/projects/types/project";

export const PROJECTS: ProjectCard[] = [
  {
    idx: 21,
    id: "5c8e2f47-1d93-4a6b-b0e7-3f9a6d2c8b14",
    title: "ChessBridge",
    short_description:
      "Marketplace connecting chess students with verified coaches: coach discovery, profiles with hourly rates, messaging, and Stripe payments, built with Next.js.",
    long_description:
      "Built ChessBridge, a two-sided marketplace where chess students find a coach who fits their goals, schedule, and learning style. Students browse coaches by specialty and hourly rate and message them directly, while coaches sign up to list their expertise and get paid through Stripe. The product runs on Next.js and Tailwind CSS with a clean, approachable interface aimed at players from beginners to tournament competitors.",
    image_url: "/assets/chessbridge.webp",
    demo_url: "https://www.chessbridge.com",
    github_url: "",
    tags: [
      "Next.js",
      "Stripe",
      "Tailwind CSS",
      "Marketplace",
    ],
    challenges: [
      "Designing for two audiences, students and coaches, with separate sign-up paths",
      "Handling marketplace payments between students and coaches with Stripe",
      "Making coach discovery easy to scan by specialty and price",
    ],
    features: [
      "Coach browsing with specialties and hourly rates",
      "Coach profiles with credentials such as FIDE titles",
      "Direct messaging between students and coaches",
      "Become-a-coach onboarding flow",
      "Stripe-powered payments",
    ],
    technologies:
      '[{"name": "Next.js", "description": "App frontend and server routes"}, {"name": "Stripe", "description": "Marketplace payments between students and coaches"}, {"name": "Tailwind CSS", "description": "Utility-first UI styling"}]',
    timeline: "Completed",
    team: "Solo / client project",
    accent: "#2f6fdf",
    category: "web",
    gallery_urls: [],
    reflection:
      "A marketplace only works if both sides trust it. Clear coach credentials, upfront pricing, and a simple way to start a conversation did more for conversion than extra features would have.",
    created_at: "2026-10-31 00:00:00+00",
  },
  {
    idx: 20,
    id: "e3a91c57-2b8d-4f06-9d4e-7c1b5a8f2e94",
    title: "Ascend Listings",
    short_description:
      "Review management platform for monitoring, responding to, and growing reviews across Google, Facebook, Yelp and more, built with React and FastAPI.",
    long_description:
      "Built Ascend Listings, a review management platform that brings a business's reviews from Google, Facebook, Yelp and other sites into a single dashboard. Businesses can monitor new reviews, reply from one place, and work on growing their rating over time. The product is a React frontend backed by a Python FastAPI service, with email/password and Google sign-in.",
    image_url: "/assets/ascend-listings.webp",
    demo_url: "https://ascendlistings.com",
    github_url: "",
    tags: [
      "React",
      "FastAPI",
      "Python",
      "SaaS",
      "Reputation Management",
    ],
    challenges: [
      "Bringing reviews from several platforms into one consistent dashboard",
      "Designing a reply workflow that keeps track of which reviews have been answered",
      "Supporting both Google sign-in and email/password accounts",
    ],
    features: [
      "Unified review feed across Google, Facebook, Yelp and more",
      "Reply to reviews from a single dashboard with replied status",
      "Google OAuth and email/password authentication",
      "Branded split-screen sign-in experience",
    ],
    technologies:
      '[{"name": "React", "description": "Single-page frontend for the dashboard and auth flows"}, {"name": "FastAPI", "description": "Python API serving reviews, accounts, and replies"}, {"name": "Python", "description": "Backend services and integrations"}]',
    timeline: "Completed",
    team: "Solo / client project",
    accent: "#3e3a6b",
    category: "web",
    gallery_urls: [],
    reflection:
      "Review management is about making a scattered, daily chore feel manageable. Keeping every platform in one feed with a clear replied/not-replied state mattered more than any single feature.",
    created_at: "2026-10-31 00:00:00+00",
  },
  {
    idx: 19,
    id: "9f2c6d18-4a7e-4b3c-8e51-d6a0b7c3f925",
    title: "Art in Heli",
    short_description:
      "Squarespace portfolio and enquiry site for Estonian mixed media artist Heli Mangel: available work, commissions, and an about-the-artist story.",
    long_description:
      "Designed and built the website for Art in Heli, the studio of Heli Mangel, an Estonian mixed media artist based in Cyprus. The site uses an editorial gallery feel, with a warm off-white canvas, a classic serif headline, and generous space that lets the artwork lead. Visitors can browse available work, learn how commissions work, read about the artist, and send an enquiry, all on Squarespace so the artist can add and update pieces without a developer.",
    image_url: "/assets/art-in-heli.webp",
    demo_url: "https://www.artinheli.studio",
    github_url: "",
    tags: [
      "Squarespace",
      "Portfolio",
      "Artist Website",
      "Web Design",
      "Responsive Design",
    ],
    challenges: [
      "Letting the artwork lead while keeping navigation and enquiries clear",
      "Customizing Squarespace to achieve an editorial gallery look",
      "Keeping the site easy for the artist to update without a developer",
    ],
    features: [
      "Editorial hero with featured artwork and serif typography",
      "Available work gallery",
      "Commissions page with a clear path to enquire",
      "About the artist story and enquiry contact",
    ],
    technologies:
      '[{"name": "Squarespace", "description": "Hosted site builder the artist manages directly"}, {"name": "Custom CSS", "description": "Typography and layout refinements beyond the template"}]',
    timeline: "Completed",
    team: "Solo / client project",
    accent: "#1f5f63",
    category: "landing",
    gallery_urls: [],
    reflection:
      "For an artist's site the design should step back. Restrained typography, a quiet palette, and plenty of space made the paintings the focus, and building on Squarespace kept the artist in control of the catalogue.",
    created_at: "2026-10-31 00:00:00+00",
  },
  {
    idx: 18,
    id: "b7d3e5a2-9c41-4f6e-8a1d-2e6c9f0b4d73",
    title: "Chimney Liner Pro",
    short_description:
      "BigCommerce store for chimney liners and parts: category mega-menu, keyword search, a promo hero carousel, and kit-based product merchandising.",
    long_description:
      "Built the BigCommerce storefront for Chimney Liner Pro, an online retailer of chimney liner kits, stainless steel liners, caps, dampers, and repair products. The theme pairs the brand's navy and red with a persistent categories sidebar, category-filtered keyword search, and a hero carousel for the M-Flex liner line alongside quick links to the Standard Tee, Fireplace Insert, and Pellet/Corn kits. Trust messaging (free shipping, lifetime warranty, money-back guarantee) and help content like Q&A, resources, and shipping & returns are surfaced throughout to support buyers through a technical purchase.",
    image_url: "/assets/chimney-liner-pro.webp",
    demo_url: "https://chimney-liner-pro.mybigcommerce.com",
    github_url: "",
    tags: [
      "BigCommerce",
      "E-Commerce",
      "Stencil",
      "Handlebars",
      "SCSS",
      "Retail",
    ],
    challenges: [
      "Organizing a large technical catalog so buyers find the right liner, kit, or part quickly",
      "Building trust for a high-consideration DIY purchase without cluttering the storefront",
      "Keeping category navigation and search usable across desktop and mobile",
    ],
    features: [
      "Persistent categories sidebar with expandable subcategories",
      "Category-filtered keyword search with top-search suggestions",
      "Promo hero carousel with kit quick links (Standard Tee, Fireplace Insert, Pellet/Corn)",
      "Trust messaging for free shipping, lifetime warranty, and money-back guarantee",
      "Help content: Q&A, resources, blog, shipping & returns",
    ],
    technologies:
      '[{"name": "BigCommerce", "description": "Hosted e-commerce platform for catalog, cart, and checkout"}, {"name": "Stencil", "description": "BigCommerce theme framework"}, {"name": "Handlebars", "description": "Storefront templates"}, {"name": "SCSS", "description": "Custom brand styling"}]',
    timeline: "Completed",
    team: "Solo / client project",
    accent: "#0c3b6e",
    category: "web",
    gallery_urls: [],
    reflection:
      "Selling chimney liners online is mostly about reducing uncertainty: clear categories, kits that bundle the right parts, and visible guarantees. The work focused on making a big, technical catalog feel easy to shop.",
    created_at: "2026-10-31 00:00:00+00",
  },
  {
    idx: 17,
    id: "4e7b2c91-6a3d-4f58-9c1e-8b2d7a5f3e60",
    title: "Traverse City Marketing Co.",
    short_description:
      "Marketing agency website for a Northern Michigan firm: editorial hero, service tracks, a field-notes journal, and a discovery-call contact form, built with Next.js.",
    long_description:
      "Designed and built the website for Traverse City Marketing Co., a Northern Michigan agency offering fractional marketing leadership to wineries, hospitality, manufacturers, and professional services. The site pairs a full-bleed photographic hero and serif headline with a torn-paper transition into four service tracks (Strategic Partnerships, Tactical Engagements, AI Business Integration, Sponsorship Strategy), each with its own page and intent-based CTA. A TCM Journal section surfaces case studies and field notes, and every path ends in a discovery-call contact form.",
    image_url: "/assets/traverse-city-marketing.webp",
    accent: "#3d5146",
    demo_url: "https://www.traversecitymarketing.com",
    github_url: "",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Landing Page",
      "Agency",
      "Marketing",
    ],
    challenges: [
      "Giving a small local agency a premium, editorial feel without heavy page weight",
      "Structuring four distinct service offers so each visitor finds their entry point quickly",
      "Keeping large photographic sections sharp and fast across screen sizes",
    ],
    features: [
      "Full-bleed photo hero with serif headline and torn-paper section transition",
      "Four service tracks with dedicated pages and intent-based CTAs",
      "TCM Journal with case studies and field notes",
      "Discovery-call contact form and persistent Contact CTA",
      "Responsive navigation with mobile menu",
    ],
    technologies:
      '[{"name": "Next.js", "description": "App Router site with per-service pages and journal routes"}, {"name": "TypeScript", "description": "Typed components and content"}, {"name": "Tailwind CSS", "description": "Custom brand styling with editorial typography"}, {"name": "Vercel", "description": "Hosting and deployment"}]',
    timeline: "Completed",
    team: "Solo / client project",
    category: "landing",
    gallery_urls: [],
    reflection:
      "The brief was to make a local agency look as considered as the work it sells. Leaning on strong photography, a serif display face, and a few tactile details like the torn-paper edge did more for the brand than extra sections would have, while a clear service-to-contact path kept the site focused on booking calls.",
    created_at: "2026-10-31 00:00:00+00",
  },
  {
    idx: 16,
    id: "8d54f733-5f59-439a-84bd-ffcd8d950899",
    title: "Callixa Sales Rep Portal",
    short_description:
      "Built a multi-role field-ops portal with magic-link auth, a countdown-driven task engine, VA rotation routing, and Slack/email alerting on Next.js + Supabase.",
    long_description:
      "Designed and shipped an internal field-operations portal for Callixa: contractor apply/approve lifecycle, magic-link + TOTP auth, a scheduler-backed task/escalation engine, VA rotation routing, strike/responsiveness compliance, Slack/email delivery, and admin tooling — on Next.js 14, TypeScript, and Supabase with RLS. Built for a field sales org spanning sales reps, virtual assistants, regional managers, and admins — contractor onboarding, role-based work routing, timed task escalation, compliance (strikes / responsiveness), and offboarding — not a generic CRUD dashboard. Replaced ad-hoc handoffs with an auditable workflow: every assignment, escalation, and standing change is logged; missed work escalates automatically; VAs enter/leave rotation based on real eligibility instead of manual spreadsheets.",
    image_url: "/assets/callixa-thumb.jpg",
    demo_url: "https://callixa.ai",
    github_url: "",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Slack",
      "Postmark",
      "Field Ops",
      "Internal Tools",
    ],
    challenges: [
      "Multi-tenant-style host routing so portal / setup / app hosts hard-404 on mismatch",
      "Passwordless magic-link sessions with revocation, rate limits, and admin TOTP + backup codes",
      "Task state machine with countdowns, escalation ladders, reassignment, and blocked pause/resume",
      "Fair VA rotation with eligibility rules and admin-fallback handback that preserves task identity",
      "Compliance engine for rolling-window strikes, appeals, and responsiveness-driven auto-reassign",
      "Offboarding cascade that revokes sessions, clears ownership, expires deals, and preserves attribution",
    ],
    features: [
      "Contractor apply/approve lifecycle across sales reps, VAs, regional managers, and admins",
      "Countdown-driven task engine with red / yellow / blue / green states and escalation",
      "VA rotation routing with availability, responsiveness, and competency eligibility",
      "Strike bands, appeals/voiding, and responsiveness scoring",
      "Deduped notification outbox across portal, Postmark email, and Slack Bot DMs",
      "i18n with EN / AR (RTL) + ES / FR / ZH from day one",
      "Vitest integration and Playwright e2e coverage for milestone host routing and flows",
    ],
    technologies:
      '[{"name": "Next.js", "description": "App Router frontend with server actions and host-aware routing"}, {"name": "TypeScript", "description": "Strict typing across portal flows and domain logic"}, {"name": "Supabase", "description": "Postgres, RLS, Storage, and service-role privileged writes"}, {"name": "Tailwind CSS", "description": "Utility-first UI for multi-role ops surfaces"}, {"name": "next-intl", "description": "EN / AR RTL + ES / FR / ZH localization"}, {"name": "Postmark", "description": "Transactional email for magic links and ops alerts"}, {"name": "Slack Bot API", "description": "DMs and ops alerting with deduped outbox"}, {"name": "Zod", "description": "Runtime validation for forms and server inputs"}, {"name": "Vitest", "description": "Integration tests for milestone flows"}, {"name": "Playwright", "description": "E2E and host routing coverage"}]',
    timeline: "Completed — M1/M2 portal",
    team: "Solo / Callixa",
    accent: "#4c35b5",
    category: "web",
    gallery_urls: [],
    reflection:
      "Scope stayed on the portal and M1/M2: auth, contractor lifecycle, tasks, routing, and Slack — not the client-facing voice product. The hard part was making escalation, VA eligibility, and standing changes auditable and automatic so the org could retire spreadsheet handoffs without inventing a generic CRUD admin.",
    created_at: "2026-10-17 00:00:00+00",
  },
  {
    idx: 15,
    id: "c2cf5dd8-1ba4-4140-99d0-d34c4c98ca0f",
    title: "Base Plus One",
    short_description:
      "React + Supabase relocation platform: scored quizzes, paid workspace, Airwallex checkout, and a staff review console with handbook PDFs and session notes.",
    long_description:
      "Built and shipped a production web app for Base Plus One’s V2.1 launch: versioned questionnaires with deterministic scoring, Airwallex checkout and entitlements, a household workspace (handbook PDFs, Calendly sessions, notifications), and a staff review queue with advisor invites and case release. Scoring and product rules follow the client’s workbooks and launch contract rather than inventing ranking logic. Clients complete public quizzes and paid assessments; households get a workspace for purchases, cases, documents, and advisor sessions. Staff manage reviews, releases, and call notes from an admin console.",
    image_url: "/assets/base-plus-one-thumb.jpg",
    demo_url: "https://www.baseplusone.com/countryfit?from=site_redirect",
    github_url: "",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "Airwallex",
      "Edge Functions",
      "Relocation",
      "SaaS",
    ],
    challenges: [
      "Porting deterministic scoring engines with parity against Kevin’s r44 preference / citizenship reference cases",
      "Protecting household client data with RLS while routing privileged ops through service-role Edge Functions",
      "Modeling product SKUs, entitlements, 13-month service terms, and Strategy Intensive upgrade / pack limits",
      "Shipping handbook multi-page PDFs, session consent, and private call-recording storage with staff-approved notes",
    ],
    features: [
      "Deterministic Country Fit, Exploratory, Single Base, and Citizenship scoring with versioned engines",
      "Versioned quiz instruments tied to exact form_version on every submission",
      "Airwallex checkout, webhook reconcile, and household entitlements",
      "Household workspace: handbook chapters, PDF downloads, case timeline, Calendly sessions",
      "Staff console with admin vs advisor roles, invites, case assignment, and AI-assisted call drafts",
      "Postmark, Calendly, Crisp integrations with feature-flagged launch gates",
    ],
    technologies:
      '[{"name": "React", "description": "TypeScript frontend with Vite and React Router"}, {"name": "Supabase", "description": "Postgres, Auth, Storage, RLS, and Edge Functions (Deno)"}, {"name": "Airwallex", "description": "Payment intents, webhooks, and entitlement reconcile"}, {"name": "Postmark", "description": "OTP and transactional email"}, {"name": "Calendly", "description": "Booking API sync and webhooks"}, {"name": "OpenAI", "description": "Staff call write-up drafts with human approval"}, {"name": "Framer Motion", "description": "Motion for UI presence and hierarchy"}, {"name": "Vitest", "description": "Scoring parity, catalog, and flow tests"}, {"name": "Vercel", "description": "Frontend hosting with Vite env configuration"}]',
    timeline: "Completed — V2.1 launch",
    team: "Solo / client advisory firm",
    accent: "#6b6256",
    category: "web",
    gallery_urls: [
      "/assets/base-plus-one-1.png",
      "/assets/base-plus-one-2.png",
    ],
    reflection:
      "This engagement reinforced shipping against a fixed client contract: keep scoring deterministic and parity-tested, treat instruments as versioned data, and put privileged payment/release paths behind Edge Functions rather than client-trusted logic. Feature flags for Strategy Intensive and Samsara kept the launch gate honest without blocking the rest of the workspace.",
    created_at: "2026-10-17 00:00:00+00",
  },
  {
    idx: 0,
    id: "9cc23d10-1aea-4a20-92dd-95ce88764fa7",
    title: "Kudoz Reviews",
    short_description:
      "Business reputation management SaaS platform for collecting, managing, and improving customer reviews.",
    long_description:
      "Kudoz Reviews is a reputation management SaaS platform that helps local businesses generate more 5-star reviews, monitor feedback across platforms, and protect their online reputation. It supports review campaigns, feedback workflows, and centralized review visibility with a conversion-focused marketing site.",
    image_url: "/assets/kudoz-reviews.png",
    demo_url: "https://www.kudozreviews.com/",
    github_url: "",
    tags: [
      "Next.js",
      "Supabase",
      "Node.js",
      "Tailwind CSS",
      "SaaS",
      "Reputation Management",
    ],
    challenges: [
      "Designing multi-flow review funnels for different business types",
      "Balancing conversion-focused marketing with product clarity",
      "Keeping performance strong while showcasing rich content sections",
    ],
    features: [
      "Review generation campaigns",
      "Centralized reputation workflows",
      "Business-focused SaaS UX",
      "Responsive landing and conversion pages",
    ],
    technologies:
      '[{"name": "Next.js", "description": "Frontend framework for the SaaS web experience"}, {"name": "Supabase", "description": "Backend services and data workflows"}, {"name": "Node.js", "description": "Server-side logic and integrations"}, {"name": "Tailwind CSS", "description": "Utility-first UI styling"}]',
    timeline: "Ongoing",
    team: "Solo Project",
    accent: "#7c3aed",
    category: "web",
    gallery_urls: [],
    reflection:
      "This project emphasized SaaS UX for service businesses and conversion-driven communication. A key takeaway was structuring review-related journeys so businesses can move from feedback to measurable reputation growth.",
    created_at: "2026-04-07 00:00:00+00",
  },
  {
    idx: 1,
    id: "54d82f84-a5b9-4d4b-9b4d-f8e3c8ef83b4",
    title: "Kudoz Reviews Mobile App",
    short_description:
      "React Native mobile app for on-the-go review requests and reputation workflow management.",
    long_description:
      "Kudoz Reviews Mobile App extends the platform to mobile, allowing teams to send review requests, manage customer interactions, and monitor engagement from anywhere. It supports field usage scenarios and streamlines day-to-day reputation operations for businesses.",
    image_url: "/assets/kudoz-mobile.png",
    demo_url: "",
    github_url: "",
    google_play_url:
      "https://play.google.com/store/apps/details?id=com.kudoz.mobile",
    app_store_url:
      "https://apps.apple.com/us/app/kudoz-reviews/id6744124281",
    tags: ["React Native", "Mobile App", "SaaS", "Business", "Reputation Management"],
    challenges: [
      "Creating fast, reliable mobile flows for real business operations",
      "Keeping UX consistent with web product expectations",
      "Supporting platform-specific behaviors across Android and iOS",
    ],
    features: [
      "Send review requests from mobile",
      "Track customer engagement in real time",
      "Portable workflows for field teams",
      "Cross-platform Android and iOS support",
    ],
    technologies:
      '[{"name": "React Native", "description": "Cross-platform mobile development"}, {"name": "Android", "description": "Google Play mobile distribution"}, {"name": "iOS", "description": "App Store mobile distribution"}]',
    timeline: "Ongoing",
    team: "Solo Project",
    category: "mobile",
    gallery_urls: [
      '/assets/kudoz-mb-1.webp',
      '/assets/kudoz-mb-2.webp',
      '/assets/kudoz-mb-3.webp',
      '/assets/kudoz-mb-4.webp',
      
    ],
    reflection:
      "The mobile app required practical, low-friction flows that teams can use quickly during daily operations. The biggest learning was optimizing for speed and clarity in field-first user journeys.",
    created_at: "2026-04-07 00:00:00+00",
  },
  {
    idx: 2,
    id: "ef2ba89d-f8bc-4a20-af9f-09f1b93043c2",
    title: "Web School",
    short_description:
      "School management SaaS platform for streamlining administration, communication, and academic operations.",
    long_description:
      "Web School is a SaaS platform for school management built on the MERN stack. It centralizes administrative tasks, academic workflows, and school communication into one modern system designed for institutions that need reliable and scalable digital operations.",
    image_url: "/assets/webschool.png",
    demo_url: "https://webschool.tn/en",
    github_url: "",
    tags: ["MERN", "MongoDB", "Express.js", "React", "Node.js", "SaaS", "EdTech"],
    challenges: [
      "Modeling school workflows with flexible role-based access",
      "Designing a clear UX for multiple user types",
      "Maintaining scalable architecture for institution growth",
    ],
    features: [
      "Centralized school operations",
      "Academic and administrative workflow support",
      "Role-based access for staff and stakeholders",
      "Scalable SaaS architecture",
    ],
    technologies:
      '[{"name": "MongoDB", "description": "Document database for school data"}, {"name": "Express.js", "description": "Backend API layer"}, {"name": "React", "description": "Frontend UI and dashboards"}, {"name": "Node.js", "description": "Server runtime and application logic"}]',
    timeline: "Completed",
    team: "Solo Project",
    accent: "#1f6fd6",
    category: "web",
    gallery_urls: [],
    reflection:
      "Building Web School highlighted the importance of designing for diverse user roles in education systems. The key takeaway was creating workflows that remain simple for users while handling complex school operations behind the scenes.",
    created_at: "2026-04-07 00:00:00+00",
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
    accent: "#0e7490",
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
    idx: 6,
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
    accent: "#3f8f78",
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
    idx: 5,
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
    accent: "#1d4ed8",
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
    idx: 4,
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
    accent: "#14907f",
    category: "landing",
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
    idx: 7,
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
  {
    idx: 8,
    id: "1b4cb945-ae72-4796-916d-c2f6526b37d7",
    title: "Radify Metals Landing Page",
    short_description:
      "Corporate landing page for Radify Metals focused on clean, scalable metalmaking.",
    long_description:
      "A clean and modern landing page built to present Radify Metals' vision, value proposition, and industrial offering with strong branding and clear messaging. The page emphasizes trust, clarity, and performance while keeping the browsing experience lightweight and straightforward.",
    image_url: "/assets/radify.png",
    demo_url: "https://radifymetals.com/",
    github_url: "",
    tags: ["Landing Page", "Web", "Responsive Design", "UI/UX", "Brand Website"],
    challenges: [
      "Structuring content for a technical industry audience",
      "Balancing brand storytelling with concise messaging",
      "Keeping layout clear across desktop and mobile",
    ],
    features: [
      "Modern hero and marketing-focused section flow",
      "Responsive layout for all screen sizes",
      "Clear call-to-actions and readable information hierarchy",
      "Performance-friendly, lightweight browsing experience",
    ],
    technologies:
      '[{"name": "Landing Page", "description": "Single-focus website for showcasing a company and its offer"}, {"name": "Responsive Design", "description": "Adaptive layout across device sizes"}, {"name": "Modern UI", "description": "Clean visual language for clarity and trust"}]',
    timeline: "Completed",
    team: "Solo Project",
    accent: "#b0246f",
    category: "landing",
    gallery_urls: [],
    reflection:
      "This project focused on presenting industrial-tech messaging in a clear and modern web experience. The main takeaway was maintaining clarity and conversion-focused structure while keeping the visual design simple and credible.",
    created_at: "2026-04-07 00:00:00+00",
  },
  {
    idx: 9,
    id: "a1b2c3d4-e5f6-4789-a012-345678901234",
    title: "QuickSchools",
    short_description:
      "High-conversion education SaaS marketing site—reference for Next.js landing patterns.",
    long_description:
      "Showcase reference for a polished product marketing site in the EdTech space, emphasizing clear value props, trust, and scalable content structure typical of Next.js production sites.",
    demo_url: "https://www.quickschools.com/",
    image_url: "/assets/quickschools.png",

    github_url: "",
    tags: ["Next.js", "Landing Page", "EdTech", "Marketing"],
    accent: "#4d9a2a",
    category: "landing",
    gallery_urls: [],
    created_at: "2026-04-10 00:00:00+00",
  },

  {
    idx: 11,
    id: "c3d4e5f6-a7b8-4901-c234-567890123456",
    title: "Anrok",
    image_url: "/assets/anrok.png",

    short_description:
      "B2B SaaS marketing site on Webflow—clean narrative and product storytelling.",
    long_description:
      "Reference for Webflow-built landing experiences with modular sections, crisp visuals, and conversion-focused B2B messaging.",
    demo_url: "https://www.anrok.com/",
    github_url: "",
    tags: ["Webflow", "Landing Page", "B2B", "SaaS"],
    accent: "#2a2f6b",
    category: "landing",
    gallery_urls: [],
    created_at: "2026-04-10 00:00:00+00",
  },  

  {
    idx: 14,
    id: "f6a7b8c9-d0e1-4234-f567-890123456789",
    title: "Tella",
    image_url: "/assets/tella.png",
    short_description:
      "Product landing on Framer—video-first narrative and modern layout.",
    long_description:
      "Reference for Framer landing pages that lead with product demo and motion, ideal for creative and video tooling brands.",
    demo_url: "https://landingpage.tella.com/",
    github_url: "",
    tags: ["Framer", "Landing Page", "Video", "Product"],
    accent: "#6d4aff",
    category: "landing",
    gallery_urls: [],
    created_at: "2026-04-10 00:00:00+00",
  },


];
