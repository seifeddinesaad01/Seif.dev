// components/PersonalPhilosophy.tsx
import { Heart, Rocket, TrendingUp, Medal, Sparkles } from 'lucide-react';

const PersonalPhilosophy = () => {
  const philosophies = [
    {
      title: "Passion-Driven Development",
      description: "Coding isn’t just a job - it’s a calling. Every line of code is written with purpose and passion.",
      icon: <Heart className="w-8 h-8" />,
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      hoverBorder: "hover:border-red-300"
    },
    {
      title: "Impact-Focused",
      description: "Striving to build solutions that make a real difference in people’s lives.",
      icon: <Rocket className="w-8 h-8" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      hoverBorder: "hover:border-blue-300"
    },
    {
      title: "Continuous Growth",
      description: "Believing in the power of practice and repetition to achieve excellence in software development.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      hoverBorder: "hover:border-green-300"
    },
    {
      title: "Quality First",
      description: "Committed to crafting high-quality, maintainable code that stands the test of time.",
      icon: <Medal className="w-8 h-8" />,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
      hoverBorder: "hover:border-amber-300"
    }
  ];

  return (
    <section className="w-full max-w-full mx-auto px-4 py-16 md:py-24 bg-white">
      <div className="text-center mb-16 relative">
       
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Personal Philosophy
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          What I stand for and believe in
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
        {philosophies.map((item, index) => (
          <div 
            key={index}
            className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${item.borderColor} ${item.hoverBorder} transition-all duration-300 ease-in-out hover:shadow-xl`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start p-6 md:p-8">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${item.bgColor} flex items-center justify-center mr-5 transition-colors duration-300 group-hover:${item.bgColor.replace('50', '100')}`}>
                  <div className={`${item.color} transition-transform duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-auto px-6 pb-6">
                <div className={`w-full h-1 ${item.bgColor} rounded-full overflow-hidden`}>
                  <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out ${item.color.replace('text', 'bg')}`}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersonalPhilosophy;