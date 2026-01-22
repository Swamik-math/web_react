import React, { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeAnimation, setActiveAnimation] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundRef = useRef(null);
  const girlRef = useRef(null);
  const containerRef = useRef(null);

  // Initial load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Parallax effect for background
      if (backgroundRef.current) {
        const move = position * -0.5;
        const scale = 1 + (position * 0.0005);
        backgroundRef.current.style.transform = `translateY(${move}px) scale(${scale})`;
      }

      // Girl image fade on scroll
      if (girlRef.current) {
        const opacity = Math.max(1 - position * 0.002, 0.2);
        const scale = Math.max(1 - position * 0.0003, 0.7);
        girlRef.current.style.opacity = opacity;
        girlRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }

      // Trigger animation phases based on scroll
      if (position < 100) setActiveAnimation(1);
      else if (position < 300) setActiveAnimation(2);
      else setActiveAnimation(3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      
      setMousePosition({ x, y });

      // Apply subtle parallax to girl image
      if (girlRef.current) {
        girlRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // 5 disappearing images animation with enhanced effects
  const [visibleImages, setVisibleImages] = useState([true, true, true, true, true]);
  const [imagePositions, setImagePositions] = useState([
    { x: 10, y: 15, rotation: 0 },
    { x: 5, y: 60, rotation: -5 },
    { x: 75, y: 30, rotation: 10 },
    { x: 85, y: 70, rotation: -8 },
    { x: 50, y: 50, rotation: 5 }
  ]);

  useEffect(() => {
    const timers = [];
    
    // Phase 1: Initial entrance
    timers.push(setTimeout(() => setIsLoaded(true), 500));

    // Phase 2: Sequential disappearance with different effects
    [1, 2, 3, 4, 5].forEach((index) => {
      timers.push(
        setTimeout(() => {
          setVisibleImages(prev => {
            const newArr = [...prev];
            newArr[index - 1] = false;
            return newArr;
          });

          // Add bounce effect to remaining images
          setImagePositions(prev => prev.map((pos, i) => 
            i === index ? { ...pos, y: pos.y + 5 } : pos
          ));
        }, index * 800)
      );
    });

    // Phase 3: Reset after all disappear
    timers.push(
      setTimeout(() => {
        setVisibleImages([true, true, true, true, true]);
        // Reposition images randomly
        setImagePositions([
          { x: Math.random() * 80 + 10, y: Math.random() * 80 + 10, rotation: Math.random() * 20 - 10 },
          { x: Math.random() * 80 + 10, y: Math.random() * 80 + 10, rotation: Math.random() * 20 - 10 },
          { x: Math.random() * 80 + 10, y: Math.random() * 80 + 10, rotation: Math.random() * 20 - 10 },
          { x: Math.random() * 80 + 10, y: Math.random() * 80 + 10, rotation: Math.random() * 20 - 10 },
          { x: Math.random() * 80 + 10, y: Math.random() * 80 + 10, rotation: Math.random() * 20 - 10 }
        ]);
      }, 6000)
    );

    // Loop the animation
    const loopTimer = setInterval(() => {
      setVisibleImages([true, true, true, true, true]);
      timers.forEach(timer => clearTimeout(timer));
      
      // Reset positions
      setImagePositions([
        { x: 10, y: 15, rotation: 0 },
        { x: 5, y: 60, rotation: -5 },
        { x: 75, y: 30, rotation: 10 },
        { x: 85, y: 70, rotation: -8 },
        { x: 50, y: 50, rotation: 5 }
      ]);
    }, 12000);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(loopTimer);
    };
  }, []);

  // Text animation states
  const [textState, setTextState] = useState({
    title: { opacity: 0, y: 30 },
    subtitle: { opacity: 0, y: 30 },
    button: { opacity: 0, y: 30 }
  });

  useEffect(() => {
    const titleTimer = setTimeout(() => {
      setTextState(prev => ({ ...prev, title: { opacity: 1, y: 0 } }));
    }, 800);

    const subtitleTimer = setTimeout(() => {
      setTextState(prev => ({ ...prev, subtitle: { opacity: 1, y: 0 } }));
    }, 1200);

    const buttonTimer = setTimeout(() => {
      setTextState(prev => ({ ...prev, button: { opacity: 1, y: 0 } }));
    }, 1600);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 1s ease-out"
      }}
    >
      {/* Animated Background with Gradient Overlay */}
      <div
        ref={backgroundRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/background.jpg)",
          backgroundSize: "120% 120%",
          backgroundPosition: "center",
          transition: "transform 0.1s ease-out",
          filter: "brightness(0.6) contrast(1.2)",
          transform: `translateY(0px) scale(1)`
        }}
      />

      {/* Animated Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(59,130,246,0.3) 50%, rgba(0,0,0,0.7) 100%)",
        opacity: 0.5,
        mixBlendMode: "overlay",
        animation: "gradientShift 8s ease infinite"
      }} />

      {/* Particle Effects */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              background: "white",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particleFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* === CENTERED GIRL IMAGE WITH ENHANCED EFFECTS === */}
      <img
        ref={girlRef}
        src="/images/girl.png"
        alt="Girl overlay"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "85%",
          maxWidth: "90vw",
          objectFit: "contain",
          zIndex: 10,
          opacity: 1,
          transition: "opacity 0.3s ease-out, transform 0.1s ease-out",
          filter: `
            drop-shadow(0 20px 40px rgba(0,0,0,0.6))
            drop-shadow(0 0 30px rgba(59, 130, 246, 0.4))
          `,
          animation: "girlGlow 3s ease-in-out infinite",
          willChange: "transform"
        }}
      />

      {/* 5 Disappearing Property Thumbnails with Enhanced Effects */}
      <div style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        zIndex: 5 
      }}>
        {[1, 2, 3, 4, 5].map((num) => {
          const pos = imagePositions[num - 1];
          return (
            <div
              key={num}
              style={{
                position: "absolute",
                width: "140px",
                height: "140px",
                borderRadius: "16px",
                border: "3px solid rgba(255,255,255,0.9)",
                boxShadow: `
                  0 20px 40px rgba(0,0,0,0.5),
                  0 0 30px rgba(59, 130, 246, 0.3),
                  inset 0 0 20px rgba(255,255,255,0.1)
                `,
                backgroundImage: `url(/images/property${num}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                opacity: visibleImages[num - 1] ? 1 : 0,
                transform: visibleImages[num - 1] 
                  ? `translate(${pos.x}vw, ${pos.y}vh) scale(1) rotate(${pos.rotation}deg)`
                  : `translate(${pos.x}vw, ${pos.y + 20}vh) scale(0) rotate(${pos.rotation + 180}deg)`,
                cursor: "pointer",
                overflow: "hidden",
                animation: visibleImages[num - 1] 
                  ? `thumbnailFloat ${4 + num}s ease-in-out infinite` 
                  : "none"
              }}
              title={`Property ${num}`}
              onClick={() => {
                // Add click effect
                setVisibleImages(prev => {
                  const newArr = [...prev];
                  newArr[num - 1] = false;
                  return newArr;
                });
              }}
              onMouseEnter={(e) => {
                if (visibleImages[num - 1]) {
                  e.currentTarget.style.transform = 
                    `translate(${pos.x}vw, ${pos.y}vh) scale(1.2) rotate(${pos.rotation}deg)`;
                  e.currentTarget.style.boxShadow = 
                    "0 30px 60px rgba(0,0,0,0.7), 0 0 50px rgba(59, 130, 246, 0.6)";
                }
              }}
              onMouseLeave={(e) => {
                if (visibleImages[num - 1]) {
                  e.currentTarget.style.transform = 
                    `translate(${pos.x}vw, ${pos.y}vh) scale(1) rotate(${pos.rotation}deg)`;
                  e.currentTarget.style.boxShadow = 
                    "0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(59, 130, 246, 0.3)";
                }
              }}
            >
              {/* Inner glow effect */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 100%)",
                pointerEvents: "none"
              }} />
              {/* Property number badge */}
              <div style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "rgba(0,0,0,0.8)",
                color: "white",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
                fontWeight: "bold"
              }}>
                {num}
              </div>
            </div>
          );
        })}
      </div>

      {/* Text Content with Enhanced Animations */}
      <div style={{
        position: "relative",
        zIndex: 20,
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        height: "100%",
        display: "flex",
        alignItems: "center"
      }}>
        <div style={{ 
          color: "white", 
          maxWidth: "600px",
          transform: `translateX(${mousePosition.x * 0.1}px)`
        }}>
          {/* Main Title with Typing Effect */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "bold",
            marginBottom: "25px",
            opacity: textState.title.opacity,
            transform: `translateY(${textState.title.y}px)`,
            transition: "opacity 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55), transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            textShadow: `
              0 2px 10px rgba(0,0,0,0.5),
              0 0 30px rgba(59, 130, 246, 0.5)
            `,
            background: "linear-gradient(90deg, #fff 0%, #93c5fd 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "titleGlow 2s ease-in-out infinite"
          }}>
            Discover Your Dream Property
          </h1>
          
          {/* Subtitle with Fade In */}
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            marginBottom: "40px",
            opacity: textState.subtitle.opacity,
            transform: `translateY(${textState.subtitle.y}px)`,
            transition: "opacity 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.2s, transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.2s",
            textShadow: "0 1px 5px rgba(0,0,0,0.3)",
            lineHeight: "1.7",
            color: "#e5e7eb"
          }}>
            Explore our curated collection of premium properties with 
            <span style={{
              color: "#60a5fa",
              fontWeight: "600",
              animation: "textPulse 2s infinite"
            }}> immersive virtual tours </span>
            and detailed galleries.
          </p>
          
          {/* CTA Buttons */}
          <div style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            opacity: textState.button.opacity,
            transform: `translateY(${textState.button.y}px)`,
            transition: "opacity 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.4s, transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.4s"
          }}>
            <button 
              style={{
                background: "linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)",
                color: "white",
                padding: "18px 40px",
                borderRadius: "12px",
                fontSize: "1.1rem",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px) scale(1.05)";
                e.target.style.boxShadow = "0 15px 35px rgba(59, 130, 246, 0.6)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)";
              }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <span style={{ position: "relative", zIndex: 1 }}>
                Explore Properties
              </span>
              <div style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                animation: "shimmer 2s infinite"
              }} />
            </button>
            
            <button 
              style={{
                background: "transparent",
                color: "white",
                padding: "18px 40px",
                borderRadius: "12px",
                fontSize: "1.1rem",
                fontWeight: "600",
                border: "2px solid rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.1)";
                e.target.style.borderColor = "rgba(255,255,255,0.6)";
                e.target.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.borderColor = "rgba(255,255,255,0.3)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div style={{
        position: "absolute",
        bottom: "50px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        opacity: scrollPosition < 100 ? 1 : 0,
        transition: "opacity 0.5s ease"
      }}>
        <div 
          style={{
            animation: "bounce 2s infinite",
            color: "white",
            fontSize: "50px",
            opacity: 0.8,
            cursor: "pointer",
            textShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
            filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))"
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.2)";
            e.target.style.filter = "drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.filter = "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))";
          }}
        >
          ↓
        </div>
        <p style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "0.9rem",
          marginTop: "10px",
          textAlign: "center",
          animation: "fadeInOut 3s infinite"
        }}>
          Scroll to explore
        </p>
      </div>

      {/* Animation Phase Indicator (Debug/Visual) */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "20px",
        fontSize: "0.9rem",
        backdropFilter: "blur(10px)",
        zIndex: 30,
        opacity: 0.7
      }}>
        Animation Phase: {activeAnimation}
      </div>
    </section>
  );
};

export default HeroSection;
