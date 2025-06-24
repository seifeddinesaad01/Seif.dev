// components/StayConnected.tsx
"use client";

import {
    Github ,
    Linkedin,
    Twitter,
    MessageCircle as Discord,
    Hash as Threads,
    Instagram,
    Facebook,
    BookOpen as Reddit,
} from "lucide-react";
import Link from "next/link";

interface Social {
    id: string;
    title: string;
    description: string;
    href: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    color: string; // Tailwind arbitrary color
}

const socials: Social[] = [
    {
        id: "github",
        title: "GitHub",
        description: "Check out my open-source contributions and personal projects",
        href: "https://github.com/yourusername",
        Icon: Github,
        color: "#181717",
    },
    {
        id: "linkedin",
        title: "LinkedIn",
        description: "Connect with me professionally and see my career journey",
        href: "https://linkedin.com/in/yourusername",
        Icon: Linkedin,
        color: "#0A66C2",
    },
    {
        id: "twitter",
        title: "X (Twitter)",
        description: "Follow me for tech insights and development tips",
        href: "https://twitter.com/yourusername",
        Icon: Twitter,
        color: "red",
    },
    {
        id: "discord",
        title: "Discord",
        description: "Join our developer community and discussions",
        href: "https://discord.gg/yourinvite",
        Icon: Discord,
        color: "#5865F2",
    },
    {
        id: "threads",
        title: "Threads",
        description: "Follow my development journey and daily updates",
        href: "https://threads.net/yourusername",
        Icon: Threads,
        color: "#000000",
    },
    {
        id: "instagram",
        title: "Instagram",
        description: "Behind the scenes of my developer life",
        href: "https://instagram.com/yourusername",
        Icon: Instagram,
        color: "#E1306C",
    },
    {
        id: "facebook",
        title: "Facebook",
        description: "Connect with me and join our tech community",
        href: "https://facebook.com/yourusername",
        Icon: Facebook,
        color: "#1877F2",
    },
    {
        id: "reddit",
        title: "Reddit",
        description: "Join our technical discussions and AMAs",
        href: "https://reddit.com/user/yourusername",
        Icon: Reddit,
        color: "#FF4500",
    },
];

export default function StayConnected() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <button className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-indigo-200 transition">
                    Let’s Connect
                </button>
                <h2 className="mt-4 text-3xl font-bold">Stay Connected</h2>
                <p className="mt-2 text-gray-600">
                    Follow my journey, join the community, and stay updated with my latest projects and insights
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {socials.map(({ id, title, description, href, Icon, color }) => (
                    <Link
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                    >
                        <div
                            className="w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-gray-100 transition-colors"
                            style={{}}
                        >
                            <Icon
                                className="w-6 h-6 text-gray-500 transition-colors duration-200"
                                style={{}}
                            />
                        </div>
                        <h3
                            className="text-lg font-semibold mb-2 transition-colors duration-200"
                        >
                            {title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">{description}</p>
                        <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:underline transition-colors duration-200">
                            Connect&nbsp;
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 inline-block transition-transform duration-200 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>

                    </Link>
                ))}
            </div>
        </section>
    );
}
