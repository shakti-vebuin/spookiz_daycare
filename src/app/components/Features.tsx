import { Gamepad2, Palette, Music, Puzzle, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "20+ Mini-Games",
    description: "Exciting educational games to develop cognitive skills and problem-solving abilities",
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Palette,
    title: "Creative Activities",
    description: "Drawing, coloring, and crafting activities to unleash your child's creativity",
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    icon: Music,
    title: "Music & Sounds",
    description: "Delightful music and sound effects that make learning fun and engaging",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Puzzle,
    title: "Educational Puzzles",
    description: "Age-appropriate puzzles to improve memory, logic, and spatial awareness",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Heart,
    title: "Safe & Ad-Free",
    description: "Kid-friendly content with no ads, in-app purchases, or external links",
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: Sparkles,
    title: "Reward System",
    description: "Earn stars and unlock new characters, keeping kids motivated and engaged",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-100",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">
            Amazing Features
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Why Kids Love
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Spookiz Daycare
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Designed by educators and loved by children worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} strokeWidth={2.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
