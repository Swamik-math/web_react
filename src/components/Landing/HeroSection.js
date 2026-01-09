import React, { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const backgroundRef = useRef(null);
  
  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Parallax effect for background
      if (backgroundRef.current) {
        const move = position * -0.5;
        backgroundRef.current.style.transform = `translateY(${move}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // 5 disappearing images animation
  const [visibleImages, setVisibleImages] = useState([true, true, true, true, true]);
  
  useEffect(() => {
    const timers = [1, 2, 3, 4, 5].map((index) =>
      setTimeout(() => {
        setVisibleImages(prev => {
          const newArr = [...prev];
          newArr[index - 1] = false;
          return newArr;
        });
      }, index * 500)
    );
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);
  
  return (
    <section style={{ 
      position: "relative", 
      height: "100vh", 
      overflow: "hidden",
      backgroundColor: "#000"
    }}>
      {/* Background Image with Zoom Effect */}
      <div
        ref={backgroundRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/images/background.jpg)",
          backgroundSize: "110% 110%",
          backgroundPosition: "center",
          transition: "transform 0.1s ease-out"
        }}
      />
      
      {/* Girl Image Overlay */}
      <img
        src="/images/girl.png"
        alt="Girl overlay"
        style={{
          position: "absolute",
          bottom: 0,
          right: "5%",
          height: "85%",
          objectFit: "contain",
          zIndex: 10,
          opacity: Math.max(1 - scrollPosition * 0.002, 0.3),
          transition: "opacity 0.3s ease-out",
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))"
        }}
      />
      
      {/* 5 Disappearing Property Thumbnails */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5 }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            style={{
              position: "absolute",
              width: "120px",
              height: "120px",
              borderRadius: "12px",
              border: "4px solid rgba(255,255,255,0.8)",
              boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
              backgroundImage: `url(/images/property${num}.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "all 0.7s ease-out",
              opacity: visibleImages[num - 1] ? 1 : 0,
              transform: visibleImages[num - 1] ? "scale(1) rotate(0deg)" : "scale(0) rotate(180deg)",
              top: `${15 + num * 12}%`,
              left: `${8 + num * 13}%`,
              cursor: "pointer"
            }}
            title={`Property ${num}`}
          />
        ))}
      </div>
      
      {/* Text Content */}
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
        <div style={{ color: "white", maxWidth: "600px" }}>
          <h1 style={{ 
            fontSize: "3.5rem", 
            fontWeight: "bold", 
            marginBottom: "20px",
            animation: "fadeIn 1s ease-out",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}>
            Discover Your Dream Property
          </h1>
          <p style={{ 
            fontSize: "1.25rem", 
            marginBottom: "30px",
            animation: "slideUp 0.8s ease-out 0.3s both",
            textShadow: "0 1px 5px rgba(0,0,0,0.3)",
            lineHeight: "1.6"
          }}>
            Explore our curated collection of premium properties with immersive virtual tours and detailed galleries.
          </p>
          <button style={{
            background: "#3b82f6",
            color: "white",
            padding: "14px 36px",
            borderRadius: "10px",
            fontSize: "1.1rem",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            animation: "slideUp 0.8s ease-out 0.6s both",
            boxShadow: "0 4px 15px rgba(59, 130, 246, 0.4)",
            transition: "all 0.3s ease"
          }}
          onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
          onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
          >
            Explore Properties
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20
      }}>
        <div style={{ 
          animation: "bounce 2s infinite",
          color: "white",
          fontSize: "40px",
          opacity: 0.8,
          cursor: "pointer"
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          ↓
        </div>
        <p style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "0.9rem",
          marginTop: "10px",
          textAlign: "center"
        }}>
          Scroll to explore
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
