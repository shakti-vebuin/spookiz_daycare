import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Download as DownloadIcon, Shield, Star, CheckCircle } from "lucide-react";

export function Download() {
  return (
    <section id="download" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            <div className="text-white space-y-6">
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🎉 Download Now - It's FREE!
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Ready to Start the
                <span className="block">Adventure?</span>
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Download Spookiz Daycare today and give your child the gift of fun, educational entertainment!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">100% Free - No Hidden Costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">Safe & Secure - COPPA Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 flex-shrink-0 fill-white" />
                  <span className="text-lg">4.8★ Rating - Kids & Parents Love It</span>
                </div>
              </div>
              
              <div className="pt-6">
                <button className="flex items-center gap-3 bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <DownloadIcon className="w-6 h-6 text-white" />
                  </div>
                  <span>Download for Android</span>
                </button>
                
                <p className="text-white/80 text-sm mt-4">
                  Compatible with Android 6.0 and above • 150MB
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-8 bg-white/10 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1691256676376-357c3aa66c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwc21hcnRwaG9uZSUyMG1vY2t1cHxlbnwxfHx8fDE3Njk2OTY1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Spookiz Daycare on Android"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              1M+
            </div>
            <p className="text-gray-600 font-semibold">Downloads</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              4.8★
            </div>
            <p className="text-gray-600 font-semibold">Average Rating</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              50K+
            </div>
            <p className="text-gray-600 font-semibold">Reviews</p>
          </div>
          
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              20+
            </div>
            <p className="text-gray-600 font-semibold">Mini-Games</p>
          </div>
        </div>
      </div>
    </section>
  );
}
