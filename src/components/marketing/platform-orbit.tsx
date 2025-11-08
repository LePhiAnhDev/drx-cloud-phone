"use client";
import React, { useState } from "react";
import Image from "next/image";

// Platform logo component wrapper for consistent sizing
const PlatformLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-10 h-10">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain"
    />
  </div>
);

// Wrapper for individual icons to give them the glassy container style and hover effects
const IconWrapper = ({
  children,
  className = "",
  isHighlighted = false,
  isHovered = false,
  animationDelay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  isHighlighted?: boolean;
  isHovered?: boolean;
  animationDelay?: number;
}) => (
  <div
    className={`
        backdrop-blur-xl rounded-2xl flex items-center justify-center transition-all duration-300 border
        bg-background/75 border-primary/60 shadow-primary/30 shadow-2xl animate-breathing-glow
        ${isHighlighted && "ring-2 ring-primary/40"}
        ${isHovered && "scale-110 shadow-primary/50 border-primary/80"}
        ${!isHovered && "animate-float"}
        ${className}
      `}
    style={{ animationDelay: `${animationDelay}s` }}
  >
    {children}
  </div>
);

// The grid of icons with orbiting animation
const PlatformOrbit = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const outerIcons = [
    { 
      id: 1, 
      component: <PlatformLogo src="/brands/tiktok.svg" alt="TikTok" />,
      name: "TikTok" 
    },
    { 
      id: 2, 
      component: <PlatformLogo src="/brands/facebook.svg" alt="Facebook" />,
      name: "Facebook" 
    },
    { 
      id: 3, 
      component: <PlatformLogo src="/brands/instagram.svg" alt="Instagram" />,
      name: "Instagram" 
    },
    { 
      id: 4, 
      component: <PlatformLogo src="/brands/google.svg" alt="Google" />,
      name: "Google" 
    },
    { 
      id: 5, 
      component: <PlatformLogo src="/brands/youtube.svg" alt="YouTube" />,
      name: "YouTube" 
    },
    { 
      id: 6, 
      component: <PlatformLogo src="/brands/shopee.svg" alt="Shopee" />,
      name: "Shopee" 
    },
    { 
      id: 7, 
      component: <PlatformLogo src="/brands/x.svg" alt="X" />,
      name: "X" 
    },
  ];

  // Constants for layout calculation (tăng kích thước lên 40%)
  const radius = 220; // tăng từ 160 lên 220
  const centralIconRadius = 64; // tăng từ 48 lên 64
  const outerIconRadius = 44; // tăng từ 32 lên 44
  const svgSize = 560; // tăng từ 400 lên 560
  const svgCenter = svgSize / 2;

  return (
    // Use scale to make the entire component responsive (tăng kích thước vừa phải)
    <div className="relative w-[560px] h-[560px] scale-75 md:scale-95 lg:scale-110">
      {/* SVG container for all connecting lines, drawn underneath the icons */}
      <svg width={svgSize} height={svgSize} className="absolute top-0 left-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradient for animated lines */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.3">
              <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="rgb(167, 139, 250)" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.3">
              <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          {/* Radial gradient for connection points */}
          <radialGradient id="pointGlow">
            <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g>
          {/* Draw lines between outer icons (the "web") */}
          {outerIcons.map((icon, i) => {
            const nextIndex = (i + 1) % outerIcons.length;
            const nextIcon = outerIcons[nextIndex];

            const angle1 =
              (-90 + i * (360 / outerIcons.length)) * (Math.PI / 180);
            const x1 =
              svgCenter + (radius - outerIconRadius) * Math.cos(angle1);
            const y1 =
              svgCenter + (radius - outerIconRadius) * Math.sin(angle1);

            const angle2 =
              (-90 + nextIndex * (360 / outerIcons.length)) * (Math.PI / 180);
            const x2 =
              svgCenter + (radius - outerIconRadius) * Math.cos(angle2);
            const y2 =
              svgCenter + (radius - outerIconRadius) * Math.sin(angle2);

            const isLineActive =
              hoveredId === icon.id || hoveredId === nextIcon.id;

            return (
              <g key={`web-line-${icon.id}`}>
                {/* Main line with gradient */}
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={isLineActive ? "rgb(139, 92, 246)" : "url(#lineGradient)"}
                  strokeWidth={isLineActive ? "3" : "2"}
                  className="transition-all duration-300 animate-line-pulse"
                  style={{ 
                    opacity: isLineActive ? 0.9 : 0.6,
                    animationDelay: `${i * 0.3}s`
                  }}
                  filter={isLineActive ? "url(#glow)" : "none"}
                />
                {/* Glowing dots at connection points */}
                <circle
                  cx={x1}
                  cy={y1}
                  r="3"
                  fill="url(#pointGlow)"
                  className="animate-pulse-dot"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              </g>
            );
          })}

          {/* Draw lines from center to outer icons (the "spokes") */}
          {outerIcons.map((icon, i) => {
            const angleInDegrees = -90 + i * (360 / outerIcons.length);
            const angleInRadians = angleInDegrees * (Math.PI / 180);

            const startX =
              svgCenter + centralIconRadius * Math.cos(angleInRadians);
            const startY =
              svgCenter + centralIconRadius * Math.sin(angleInRadians);
            const endX =
              svgCenter + (radius - outerIconRadius) * Math.cos(angleInRadians);
            const endY =
              svgCenter + (radius - outerIconRadius) * Math.sin(angleInRadians);
            const isSpokeActive = hoveredId === icon.id;

            return (
              <g key={`spoke-line-${icon.id}`}>
                {/* Spoke line with gradient */}
                <line
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke={isSpokeActive ? "rgb(139, 92, 246)" : "url(#lineGradient)"}
                  strokeWidth={isSpokeActive ? "3" : "2"}
                  className="transition-all duration-300 animate-line-pulse"
                  style={{ 
                    opacity: isSpokeActive ? 1 : 0.6,
                    animationDelay: `${i * 0.2}s`
                  }}
                  filter={isSpokeActive ? "url(#glow)" : "none"}
                />
                {/* Traveling dot animation */}
                <circle
                  r="4"
                  fill="rgb(139, 92, 246)"
                  className="animate-travel-dot"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path={`M ${startX} ${startY} L ${endX} ${endY}`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </g>
      </svg>

      {/* The main container that acts as the center for the circle */}
      <div className="absolute top-1/2 left-1/2">
        {/* Center Icon - Logo (tăng kích thước) */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
          <IconWrapper
            className="w-32 h-32 p-5"
            isHighlighted={true}
            animationDelay={0}
          >
            <div className="relative w-full h-full">
              <Image
                src="/logo.png"
                alt="DRX Cloud Phone"
                fill
                className="object-contain"
              />
            </div>
          </IconWrapper>
        </div>

        {/* Mapping over the outer icons to place them */}
        {outerIcons.map((icon, i) => {
          const angleInDegrees = -90 + i * (360 / outerIcons.length);
          const angleInRadians = angleInDegrees * (Math.PI / 180);
          const x = radius * Math.cos(angleInRadians);
          const y = radius * Math.sin(angleInRadians);

          const iconStyle = {
            transform: `translate(${x}px, ${y}px)`,
          };
          const isHovered = hoveredId === icon.id;

          return (
            <div
              key={icon.id}
              className="absolute z-10"
              style={iconStyle}
              onMouseEnter={() => setHoveredId(icon.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 relative">
                {/* Spotlight effect */}
                <div
                  className={`absolute inset-[-24px] bg-primary/25 rounded-full blur-3xl transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                ></div>

                <IconWrapper
                  className="w-20 h-20"
                  isHovered={isHovered}
                  animationDelay={i * 0.15}
                >
                  {icon.component}
                </IconWrapper>
              </div>
            </div>
          );
        })}
      </div>

      {/* Style block to define the animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes breathing-glow {
          0% { 
            box-shadow: 0 0 20px 2px rgba(139, 92, 246, 0.5), 
                        0 0 40px 4px rgba(139, 92, 246, 0.2),
                        inset 0 0 20px rgba(139, 92, 246, 0.1); 
          }
          50% { 
            box-shadow: 0 0 30px 8px rgba(139, 92, 246, 0.6), 
                        0 0 60px 12px rgba(139, 92, 246, 0.3),
                        inset 0 0 30px rgba(139, 92, 246, 0.15); 
          }
          100% { 
            box-shadow: 0 0 20px 2px rgba(139, 92, 246, 0.5), 
                        0 0 40px 4px rgba(139, 92, 246, 0.2),
                        inset 0 0 20px rgba(139, 92, 246, 0.1); 
          }
        }
        .animate-breathing-glow {
          animation: breathing-glow 3s ease-in-out infinite;
        }

        @keyframes line-pulse {
          0%, 100% { stroke-opacity: 0.6; }
          50% { stroke-opacity: 0.9; }
        }
        .animate-line-pulse {
          animation: line-pulse 3s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { 
            opacity: 0.4; 
            r: 3px;
          }
          50% { 
            opacity: 0.9; 
            r: 5px;
          }
        }
        .animate-pulse-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes travel-dot {
          0% { opacity: 0; filter: blur(0px); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; filter: blur(2px); }
        }
        .animate-travel-dot {
          animation: travel-dot 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PlatformOrbit;

