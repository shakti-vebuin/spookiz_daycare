import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Star, Users, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🎮 #1 Kids Educational Game
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 bg-clip-text text-transparent">
                Spookiz Daycare
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Join adorable Spookiz characters in a magical daycare adventure! 
              Educational mini-games, creative activities, and endless fun await your little ones.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-900 fill-yellow-900" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">4.8 Rating</p>
                  <p className="text-sm text-gray-600">50K+ Reviews</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-900" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">1M+ Downloads</p>
                  <p className="text-sm text-gray-600">Happy Players</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-pink-900" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Award Winner</p>
                  <p className="text-sm text-gray-600">Best Kids App 2024</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a
                href="#download"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Download Free
              </a>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300">
                Watch Trailer
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1593538573197-4e3ee8a864d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNhcnRvb24lMjBtb25zdGVycyUyMGN1dGV8ZW58MXx8fHwxNzY5Njk2NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Spookiz Characters"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
