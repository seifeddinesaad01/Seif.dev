// components/StayConnected.tsx
"use client";

import {
    Github,
    Linkedin,
    Twitter,
    Braces as DevIcon,
    Instagram,
    Facebook,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Social {
    id: string;
    title: string;
    description: string;
    href: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    color: string;
    bgColor: string;
}

const socials: Social[] = [
    {
        id: "github",
        title: "GitHub",
        description: "Check out my open-source contributions and personal projects",
        href: "https://github.com/seifeddinesaad01",
        Icon: Github,
        color: "#181717",
        bgColor: "bg-gray-800",
    },
    {
        id: "dev",
        title: "DEV.to",
        description: "Read my articles and tutorials on DEV.to",
        href: "https://dev.to/seif_eddine_saad",
        Icon: DevIcon,
        color: "#3b49df",
        bgColor: "bg-gradient-to-br from-indigo-600 to-blue-500",
    },
    {
        id: "linkedin",
        title: "LinkedIn",
        description: "Connect with me professionally and see my career journey",
        href: "https://www.linkedin.com/in/seif-eddine-saad-3728aa19b/",
        Icon: Linkedin,
        color: "#0A66C2",
        bgColor: "bg-blue-600",
    },
    {
        id: "facebook",
        title: "Facebook",
        description: "Connect with me and join our tech community",
        href: "https://www.facebook.com/saiiif001/",
        Icon: Facebook,
        color: "#1877F2",
        bgColor: "bg-blue-600",
    },
    {
        id: "twitter",
        title: "X (Twitter)",
        description: "Follow me for tech insights and development tips",
        href: "https://x.com/Saif71564790",
        Icon: Twitter,
        color: "#000000",
        bgColor: "bg-black",
    },
    {
        id: "instagram",
        title: "Instagram",
        description: "Behind the scenes of my developer life",
        href: "https://www.instagram.com/saiifeddine01/",
        Icon: Instagram,
        color: "#E1306C",
        bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },


];

export default function StayConnected() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto ">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-6 text-4xl font-bold  bg-clip-textt"
                >
                    Stay Connected
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
                >
                    Follow my journey, join the community, and stay updated with my latest projects and insights
                </motion.p>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 bg-blue-600 rounded-full mx-auto mt-6"
                ></motion.div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {socials.map(({ id, title, description, href, Icon, color, bgColor }) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * socials.indexOf(socials.find(s => s.id === id)!) }}
                        className="relative"
                    >
                        <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent h-full"
                        >
                            {/* Top accent bar */}
                            <div
                                className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${bgColor}`}
                            ></div>

                            <div className="flex items-start mb-4">
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColor}`}
                                >
                                    <Icon
                                        className="w-6 h-6 text-white"
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                            <p className="text-gray-600 mb-5">{description}</p>

                            <div style={{ color: color }} className="flex items-center text-sm font-medium  transition-colors">
                                <span>Connect</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>


        </section>
    );
}