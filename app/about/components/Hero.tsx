import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Hand, Bot } from "lucide-react";

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white dark:bg-background">
            {/* Badge */}
            <Badge className="mb-4 px-4 py-1 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
               <Bot /> Software Developer
            </Badge>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold dark:text-gray-100">
                Hi, I&apos;m Seif Saad 👋
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300">
                A passionate software developer who turned coding love into a successful career, from freelancing to running my own agency.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                    size="lg"
                    variant="default"
                    className="group bg-pink-500 hover:bg-pink-600 rounded-xl px-8 py-6 font-semibold cursor-pointer transform transition-all duration-150 ease-out hover:shadow-2xl"
                >
                    <Link href="/hire-me" className="flex items-center gap-2 transition-all duration-150 ease-out group-hover:gap-4">
                        <span>Request CV</span>
                        <Download className="w-5 h-5 text-white" />
                    </Link>
                </Button>

                <Button size="lg" variant="outline" className="cursor-pointer py-6 px-8 flex items-center gap-2 rounded-xl">
                    Let&apos; work together
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
        </section>
    );
};

export default Hero;