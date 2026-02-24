import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              S
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Spookiz Daycare</h1>
              <p className="text-sm text-gray-600">Fun Learning for Kids!</p>
            </div>
          </div>
          
          <a
            href="#download"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span className="hidden sm:inline">Download Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
