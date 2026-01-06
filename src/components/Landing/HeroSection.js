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
  
  // Check if images exist
  const [imagesLoaded, setImagesLoaded] = useState({
    background: false,
    girl: false
  });
  
  useEffect(() => {
    // Try to load images
    const img1 = new Image();
    img1.src = "/images/background.jpg";
    img1.onload = () => setImagesLoaded(prev => ({...prev, background: true}));
    img1.onerror = () => console.log("Background image failed to load");
    
    const img2 = new Image();
    img2.src = "/images/girl.png";
    img2.onload = () => setImagesLoaded(prev => ({...prev, girl: true}));
    img2.onerror = () => console.log("Girl image failed to load");
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
          transition: "transform 0.1s ease-out",
          backgroundColor: imagesLoaded.background ? "transparent" : "#4f46e5"
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
          height: "80%",
          objectFit: "contain",
          zIndex: 10,
          opacity: Math.max(1 - scrollPosition * 0.002, 0.3),
          transition: "opacity 0.3s ease-out",
          display: imagesLoaded.girl ? "block" : "none"
        }}
      />
      
      {/* Girl placeholder if image doesn"t load */}
      {!imagesLoaded.girl && (
        <div style={{
          position: "absolute",
          bottom: 0,
          right: "5%",
          height: "80%",
          width: "300px",
          background: "rgba(255,255,255,0.1)",
          border: "2px dashed rgba(255,255,255,0.3)",
          borderRadius: "10px",
          zIndex: 10,
          opacity: Math.max(1 - scrollPosition * 0.002, 0.3),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "18px"
        }}>
          Girl Image
        </div>
      )}
      
      {/* 5 Disappearing Small Images */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5 }}>
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "10px",
              border: "4px solid white",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              backgroundImage: `url(/images/property${num}.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#3b82f6", // Fallback color
              transition: "all 0.7s ease-out",
              opacity: visibleImages[num - 1] ? 1 : 0,
              transform: visibleImages[num - 1] ? "scale(1)" : "scale(0)",
              top: `${20 + num * 10}%`,
              left: `${10 + num * 12}%`
            }}
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
            animation: "fadeIn 1s ease-out"
          }}>
            Discover Your Dream Property
          </h1>
          <p style={{ 
            fontSize: "1.25rem", 
            marginBottom: "30px",
            animation: "slideUp 0.8s ease-out 0.3s both"
          }}>
            Immersive virtual tours and the finest selection of premium properties
          </p>
          <button style={{
            background: "#3b82f6",
            color: "white",
            padding: "12px 32px",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            animation: "slideUp 0.8s ease-out 0.6s both"
          }}>
            Explore Properties
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div style={{
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20
      }}>
        <div style={{ 
          animation: "bounce 2s infinite",
          color: "white",
          fontSize: "30px"
        }}>
          ↓
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
