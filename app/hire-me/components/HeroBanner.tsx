import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Hand, Bot, Sparkle } from "lucide-react";

const HeroBanner = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white dark:bg-background">
            {/* Badge */}
            <Badge className="mb-4 px-4 py-1 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                <Sparkle /> Available for New Projects
            </Badge>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold dark:text-gray-100">
                You and I can make an IMPACT!

            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-700 dark:text-gray-300">
                Get access NOW. Extensive expertise and knowledge.

                Expert Full Stack Development & AI Integration Services.

            </p>


        </section>
    );
};

export default HeroBanner;