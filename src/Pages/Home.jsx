import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={`relative min-h-screen flex flex-col lg:flex-row bg-black lg:bg-none lg:bg-black overflow-hidden`}>
      {/* Dynamic background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      

      {/* Left: Black background with text */}
      <div className="w-full lg:w-3/5 lg:bg-black flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0 relative order-2 lg:order-1">
        <div className={`text-white z-10 max-w-2xl w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Responsive Panther Image with enhanced effects */}
          <div className="mb-6 lg:mb-8 flex justify-center relative">
            <div className="relative group">
              <img 
                src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyeTd5dnNzNzk2eHhmbnJzdHl3ZGcweHc2eDczbzB0cW1peTdkYThiaiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/toKRS6CM1KJW7RYRgY/source.gif" 
                alt="Panther Animated Logo" 
                className="w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] drop-shadow-2xl -mt-30 lg:mt-30 relative z-10 transition-all duration-500 group-hover:scale-105"
                style={{ 
                  filter: 'drop-shadow(0 8px 32px rgba(239, 68, 68, 0.3)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
                }}
              />
            </div>
          </div>
          
          <h1 className={`-mt-19 text-4xl sm:text-4xl sm:-mt-30 md:text-5xl lg:text-6xl lg:-mt-37 xl:text-7xl font-extrabold mb-4 lg:mb-6 bg-gradient-to-r from-white via-gray-100 to-red-100 bg-clip-text text-transparent transition-all duration-700 ${isLoaded ? 'animate-slide-up' : ''}`}>
            PantherFit
          </h1>
          
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 lg:mb-8 text-gray-300 leading-relaxed max-w-lg mx-auto px-2 transition-all duration-700 delay-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            Built to Perform. Designed to Dominate.
          </p>
          
          <p className={`text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 text-gray-400 max-w-md mx-auto px-2 transition-all duration-700 delay-500 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            Unleash your inner beast with premium athletic wear that moves with you
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0 transition-all duration-700 delay-700 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <button className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 w-full sm:w-auto max-w-xs sm:max-w-none mt-10 overflow-hidden">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-0 h-full bg-white/20 group-hover:w-full transition-all duration-500 ease-out"></div>
            </button>
            
            <button className="group relative border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wider transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none lg:mt-9 overflow-hidden">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
          
          {/* Enhanced Stats with better animations */}
          <div className={`mt-18 sm:mt-12 lg:mt-16 grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-sm sm:max-w-md mx-auto px-4 sm:px-0 transition-all duration-700 delay-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="text-center group cursor-pointer">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-red-500 mb-1 group-hover:text-red-400 transition-colors duration-300 group-hover:scale-110 transform">100%</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300 transition-colors duration-300">Premium Cotton</div>
              <div className="w-full h-0.5 bg-red-500/20 group-hover:bg-red-500/40 transition-colors duration-300 mt-1"></div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-red-500 mb-1 group-hover:text-red-400 transition-colors duration-300 group-hover:scale-110 transform">🇮🇳</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300 transition-colors duration-300">Made in India</div>
              <div className="w-full h-0.5 bg-red-500/20 group-hover:bg-red-500/40 transition-colors duration-300 mt-1"></div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-red-500 mb-1 group-hover:text-red-400 transition-colors duration-300 group-hover:scale-110 transform">7-Day</div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300 transition-colors duration-300">Easy Returns</div>
              <div className="w-full h-0.5 bg-red-500/20 group-hover:bg-red-500/40 transition-colors duration-300 mt-1"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-transparent via-black/50 to-black opacity-80 z-0 hidden lg:block"></div>
        
        {/* Enhanced animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-red-600 rounded-full opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-red-300 rounded-full opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-500 rounded-full opacity-35 animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
      </div>

      {/* Right: Enhanced Image Section */}
      <div className="w-full lg:w-2/5 relative overflow-hidden min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-screen order-1 lg:order-2 group">
        {/* Enhanced gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-transparent via-black/50 to-black opacity-70 z-10 hidden lg:block"></div>
        
        {/* Mobile gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 lg:hidden"></div>
        
        {/* Main background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 group-hover:scale-110"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1597888317848-cc73e593ad1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            filter: 'blur(4px) brightness(0.8) contrast(1.1)',
            transform: 'scale(1.1)'
          }}
        />
        
        {/* Additional overlays for depth */}
        <div className="absolute inset-0 bg-black/20 z-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-800/10 z-6"></div>
        
        {/* Enhanced floating elements */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-red-500/30 rounded-full animate-bounce opacity-60 hidden sm:block group-hover:border-red-400/50 transition-colors duration-300">
          <div className="absolute inset-2 border border-red-400/20 rounded-full animate-pulse"></div>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 border-red-400/40 rounded-full animate-pulse opacity-50 hidden sm:block group-hover:border-red-300/60 transition-colors duration-300">
          <div className="absolute inset-1 bg-red-500/20 rounded-full animate-ping"></div>
        </div>
        
        {/* New floating elements */}
        <div className="absolute top-1/2 right-1/4 w-6 h-6 border border-red-300/30 rounded-full animate-spin-slow opacity-40 hidden lg:block"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-red-500/30 rounded-full animate-pulse opacity-50 hidden lg:block"></div>
      </div>
      
      {/* Enhanced custom keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.7s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.7s ease-out;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -12px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
            transform: translate3d(0, -6px, 0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;