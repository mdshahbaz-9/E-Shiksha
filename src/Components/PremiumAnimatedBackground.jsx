import React, { useState, useEffect } from 'react';

const PremiumAnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating orbs with enhanced properties
  const generateOrbs = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 120 + 40,
      delay: Math.random() * 8,
      duration: Math.random() * 20 + 25,
      opacity: Math.random() * 0.4 + 0.1,
      color: Math.floor(Math.random() * 6),
    }));
  };

  // Generate neural network nodes
  const generateNodes = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      pulseDelay: Math.random() * 3,
    }));
  };

  const orbs = generateOrbs(15);
  const nodes = generateNodes(25);
  const colorPalettes = [
    'from-violet-500/30 to-purple-500/30',
    'from-blue-500/30 to-cyan-500/30',
    'from-emerald-500/30 to-teal-500/30',
    'from-rose-500/30 to-pink-500/30',
    'from-amber-500/30 to-orange-500/30',
    'from-indigo-500/30 to-blue-500/30',
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic Gradient Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(139, 92, 246, 0.3) 0%, 
            rgba(59, 130, 246, 0.2) 25%, 
            rgba(16, 185, 129, 0.15) 50%, 
            rgba(15, 23, 42, 0.9) 100%)`
        }}
      />

      {/* Animated Mesh Gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-40 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
            left: '10%',
            top: '20%',
            animation: 'meshFloat1 20s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            right: '15%',
            top: '40%',
            animation: 'meshFloat2 25s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-[450px] h-[450px] rounded-full opacity-35 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
            left: '50%',
            bottom: '20%',
            animation: 'meshFloat3 30s ease-in-out infinite',
          }}
        />
      </div>

      {/* Premium Floating Orbs */}
      {orbs.map((orb) => (
        <div
          key={`orb-${orb.id}`}
          className={`absolute rounded-full backdrop-blur-sm border border-white/10 bg-gradient-to-br ${colorPalettes[orb.color]}`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            opacity: orb.opacity,
            animation: `premiumFloat ${orb.duration}s ease-in-out infinite`,
            animationDelay: `${orb.delay}s`,
            boxShadow: '0 0 50px rgba(139, 92, 246, 0.3), inset 0 0 50px rgba(255, 255, 255, 0.1)',
          }}
        />
      ))}

      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
        {nodes.map((node) => (
          <div
            key={`node-${node.id}`}
            className="absolute bg-white/60 rounded-full shadow-lg"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              animation: `nodePulse 3s ease-in-out infinite`,
              animationDelay: `${node.pulseDelay}s`,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.slice(0, 8).map((node, i) => (
          <g key={`connection-${i}`}>
            <line
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nodes[(i + 1) % 8]?.x}%`}
              y2={`${nodes[(i + 1) % 8]?.y}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              opacity="0.3"
              style={{
                animation: `lineGlow 4s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          </g>
        ))}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.4)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`geo-${i}`}
            className="absolute border border-white/20 backdrop-blur-sm"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              borderRadius: i % 2 === 0 ? '0%' : '50%',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `geometricFloat ${15 + i * 3}s linear infinite`,
              animationDelay: `${i * 2}s`,
              background: `linear-gradient(45deg, ${colorPalettes[i % colorPalettes.length]})`,
            }}
          />
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animation: `particleFloat ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 opacity-20 transition-all duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(255, 255, 255, 0.1) 0%, 
            transparent 40%)`
        }}
      />

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes premiumFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-30px) translateX(15px) rotate(90deg) scale(1.1); 
          }
          50% { 
            transform: translateY(-20px) translateX(-20px) rotate(180deg) scale(0.9); 
          }
          75% { 
            transform: translateY(-40px) translateX(10px) rotate(270deg) scale(1.05); 
          }
        }

        @keyframes meshFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(50px, -30px) rotate(120deg); }
          66% { transform: translate(-30px, 40px) rotate(240deg); }
        }

        @keyframes meshFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(-40px, -50px) rotate(180deg) scale(1.2); }
        }

        @keyframes meshFloat3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -20px) rotate(90deg); }
          50% { transform: translate(-20px, -30px) rotate(180deg); }
          75% { transform: translate(40px, 20px) rotate(270deg); }
        }

        @keyframes nodePulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.6; 
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
          50% { 
            transform: scale(1.5); 
            opacity: 1; 
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.8);
          }
        }

        @keyframes lineGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes geometricFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(360deg); }
        }

        @keyframes particleFloat {
          0% { 
            transform: translateY(100vh) translateX(0px); 
            opacity: 0; 
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(-100px) translateX(50px); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumAnimatedBackground;