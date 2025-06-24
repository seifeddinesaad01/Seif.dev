import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Briefcase, Rocket, CodeXml } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Magic ✨',
    icon: <Sparkles className="w-6 h-6 text-indigo-600" />, 
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend Wizardry 🧙‍♂️',
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />, 
    items: ['Node.js', 'Express', 'Python', 'PostgreSQL'],
  },
  {
    title: 'DevOps Sorcery 🧙‍♀️',
    icon: <Rocket className="w-6 h-6 text-indigo-600" />, 
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
  },
];

const TechnicalArsenal = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-gray-100">
          Technical Arsenal <span className="ml-2">💪</span>
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Tools and technologies I&apos;ve mastered over the years
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((group) => (
          <Card key={group.title} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-100 rounded-md">
                {group.icon}
              </div>
              <CardTitle className="text-lg font-semibold">
                {group.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {group.items.map((tech) => (
                  <li key={tech} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <CodeXml className="w-4 h-4 mr-2 text-blue-500" /> {tech}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TechnicalArsenal;
