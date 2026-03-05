
import React, { useState, useEffect } from 'react';
import { Youtube, Instagram, Github, Twitter, Linkedin, MessageCircle, Code, Coffee, Zap, Heart } from 'lucide-react';

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingIcon = ({ Icon, delay }) => (
    <div 
      className={`absolute opacity-20 text-orange-500 animate-pulse transition-all duration-1000`}
      style={{
        animationDelay: `${delay}s`,
        transform: `translate(${Math.sin(Date.now() * 0.001 + delay) * 20}px, ${Math.cos(Date.now() * 0.001 + delay) * 15}px)`
      }}
    >
      <Icon size={24} />
    </div>
  );

  return (
    <footer className="relative bg-gradient-to-br from-richblack-800 via-richblack-900 to-gray-400 text-gray-400 min-h-min flex flex-col overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-600/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange-400/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Code Icons */}
        <FloatingIcon Icon={Code} delay={0} />
        <FloatingIcon Icon={Coffee} delay={1.5} />
        <FloatingIcon Icon={Zap} delay={3} />
        <FloatingIcon Icon={Heart} delay={4.5} />
      </div>

      {/* Interactive Glow Effect */}
      <div 
        className="absolute pointer-events-none opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.1), transparent)`,
          width: '100%',
          height: '100%',
        }}
      />

      {/* Main Footer Content */}
      <div className="flex-1 px-8 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            
            {/* Left Side - Enhanced Logo and Social */}
            <div className="lg:col-span-5">
              {/* Logo with Animation */}
              <div 
                className="flex items-center gap-4 mb-8 group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={`relative w-14 h-14 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-500 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
                  <span className="text-white text-2xl animate-bounce">🧑‍💻</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl blur opacity-75 animate-pulse"></div>
                </div>
                <div>
                  <span className="text-white text-3xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text">E-Shiksha</span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
              
              {/* Enhanced Tagline */}
              <div className="mb-10">
                <p className="text-gray-200 text-lg mb-2 font-light">
                  Home for programmers
                </p>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  Where code meets creativity, and developers find their perfect blend of learning, building, and growing together.
                </p>
              </div>
              
              {/* Interactive Social Icons */}
              <div className="flex gap-6 mb-12">
                {[
                  { Icon: Youtube, color: 'hover:text-red-500', bg: 'hover:bg-red-500/10' },
                  { Icon: Instagram, color: 'hover:text-pink-500', bg: 'hover:bg-pink-500/10' },
                  { Icon: Github, color: 'hover:text-white', bg: 'hover:bg-white/10' },
                  { Icon: Twitter, color: 'hover:text-blue-400', bg: 'hover:bg-blue-400/10' },
                  { Icon: Linkedin, color: 'hover:text-blue-600', bg: 'hover:bg-blue-600/10' },
                  { Icon: MessageCircle, color: 'hover:text-purple-500', bg: 'hover:bg-purple-500/10' }
                ].map(({ Icon, color, bg }, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`relative p-3 rounded-xl ${bg} ${color} text-gray-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group`}
                  >
                    <Icon size={24} />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
              
              {/* Enhanced Copyright */}
              <div className="relative">
                <p className="text-gray-200 text-sm flex items-center gap-2">
                  <Heart size={14} className="text-orange-500 animate-pulse" />
                  © 2025 Md Shahbaz. Crafted with passion
                </p>
              </div>
            </div>
            
            {/* Right Side - Enhanced Navigation */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
                
                {/* Products Column */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-transparent rounded-full"></div>
                  <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
                    <Zap size={20} className="text-orange-500" />
                    Products
                  </h3>
                  <ul className="space-y-4">
                    {['Courses', 'Cohort', 'Coding Hero', 'FreeAPI', 'Masterji'].map((item, index) => (
                      <li key={index} className="group">
                        <a 
                          href="#" 
                          className="relative text-gray-400 hover:text-white transition-all duration-300 text-lg flex items-center gap-3 py-2 hover:translate-x-2"
                        >
                          <div className="w-2 h-2 bg-orange-500/50 rounded-full group-hover:bg-orange-500 group-hover:scale-150 transition-all duration-300"></div>
                          {item}
                          <div className="absolute bottom-0 left-5 right-0 h-px bg-gradient-to-r from-orange-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Resources Column */}
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-transparent rounded-full"></div>
                  <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
                    <Code size={20} className="text-orange-500" />
                    Resources
                  </h3>
                  <ul className="space-y-4">
                    {['Docs', 'Privacy Policy', 'Terms of Service', 'Pricing Policy', 'Refund Policy'].map((item, index) => (
                      <li key={index} className="group">
                        <a 
                          href="#" 
                          className="relative text-gray-400 hover:text-white transition-all duration-300 text-lg flex items-center gap-3 py-2 hover:translate-x-2"
                        >
                          <div className="w-2 h-2 bg-orange-500/50 rounded-full group-hover:bg-orange-500 group-hover:scale-150 transition-all duration-300"></div>
                          {item}
                          <div className="absolute bottom-0 left-5 right-0 h-px bg-gradient-to-r from-orange-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spectacular Brand Text */}
      
    </footer>
  );
};

export default Footer;