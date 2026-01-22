import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
    { name: "Join", path: "/join" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header */}
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        background: isScrolled ? "rgba(255, 255, 255, 0.95)" : "white",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px", // Increased side padding
          height: "80px", // Slightly taller header
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          {/* Logo */}
          <Link 
            to="/" 
            style={{
              textDecoration: "none",
              fontSize: "1.8rem",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "transform 0.3s ease",
              marginRight: "60px" // Space between logo and nav items
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            AIGETAI
          </Link>

          {/* Desktop Navigation */}
          <nav style={{
            display: "flex",
            alignItems: "center",
            gap: "45px", // Increased gap between nav items
            flex: 1,
            justifyContent: "flex-start"
          }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  textDecoration: "none",
                  color: isActive(item.path) ? "#3b82f6" : "#4b5563",
                  fontWeight: isActive(item.path) ? "600" : "500",
                  fontSize: "1.05rem", // Slightly larger font
                  padding: "10px 5px", // Added horizontal padding
                  position: "relative",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.3px" // Better letter spacing
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = "#3b82f6";
                    e.target.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = "#4b5563";
                    e.target.style.transform = "translateY(0)";
                  }
                }}
              >
                {item.name}
                {isActive(item.path) && (
                  <span style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: "5px",
                    right: "5px",
                    height: "3px",
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                    borderRadius: "3px",
                    animation: "underlineGrow 0.3s ease"
                  }} />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Login Button - Pushed to right */}
          <div style={{ marginLeft: "auto" }}>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                color: "white",
                padding: "12px 28px", // More padding
                borderRadius: "12px", // More rounded
                fontWeight: "600",
                fontSize: "1rem",
                transition: "all 0.3s ease",
                display: "inline-block",
                marginLeft: "20px" // Space from nav items
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 10px 25px rgba(59, 130, 246, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              fontSize: "1.8rem",
              cursor: "pointer",
              color: "#4b5563",
              padding: "8px",
              marginLeft: "20px"
            }}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: "absolute",
            top: "80px",
            left: 0,
            right: 0,
            background: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            padding: "20px 40px",
            animation: "slideDown 0.3s ease"
          }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: isActive(item.path) ? "#3b82f6" : "#4b5563",
                  fontWeight: isActive(item.path) ? "600" : "500",
                  padding: "18px 0", // More vertical padding on mobile
                  fontSize: "1.2rem",
                  borderBottom: "1px solid #f3f4f6",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = "#3b82f6";
                    e.target.style.paddingLeft = "10px";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.target.style.color = "#4b5563";
                    e.target.style.paddingLeft = "0";
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              style={{
                display: "block",
                textDecoration: "none",
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                color: "white",
                padding: "16px",
                borderRadius: "12px",
                fontWeight: "600",
                textAlign: "center",
                marginTop: "20px",
                fontSize: "1.1rem",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
            >
              Login
            </Link>
          </div>
        )}
      </header>

      {/* Main Content - Add more top margin for taller header */}
      <main style={{ marginTop: "80px", minHeight: "calc(100vh - 140px)" }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
        color: "white",
        padding: "60px 40px 30px" // Match header padding
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "50px", // More gap in footer
            marginBottom: "50px"
          }}>
            {/* Company Info */}
            <div>
              <div style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "25px"
              }}>
                AIGETAI
              </div>
              <p style={{
                color: "#d1d5db",
                lineHeight: "1.7", // Better line height
                marginBottom: "25px",
                fontSize: "0.95rem"
              }}>
                Transforming real estate through innovative technology and 
                immersive virtual experiences.
              </p>
              <div style={{ display: "flex", gap: "18px" }}> {/* More gap between social icons */}
                {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "44px", // Slightly larger
                      height: "44px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(255,255,255,0.2)";
                      e.target.style.transform = "translateY(-3px) scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(255,255,255,0.1)";
                      e.target.style.transform = "translateY(0) scale(1)";
                    }}
                  >
                    {social === "twitter" ? "🐦" : 
                     social === "linkedin" ? "💼" : 
                     social === "facebook" ? "📘" : "📸"}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{
                fontSize: "1.3rem", // Slightly larger
                fontWeight: "600",
                marginBottom: "25px",
                color: "#f3f4f6",
                letterSpacing: "0.5px"
              }}>
                Quick Links
              </h3>
              <div style={{ display: "grid", gap: "16px" }}> {/* More gap between links */}
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      color: "#d1d5db",
                      textDecoration: "none",
                      fontSize: "1rem", // Slightly larger
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px" // More gap between arrow and text
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#60a5fa";
                      e.target.style.paddingLeft = "8px";
                      e.target.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#d1d5db";
                      e.target.style.paddingLeft = "0";
                      e.target.style.transform = "translateX(0)";
                    }}
                  >
                    →
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: "600",
                marginBottom: "25px",
                color: "#f3f4f6",
                letterSpacing: "0.5px"
              }}>
                Services
              </h3>
              <div style={{ display: "grid", gap: "16px" }}>
                {[
                  "Virtual Tours",
                  "Property Listings", 
                  "AI Recommendations",
                  "Market Analysis",
                  "Investment Consulting"
                ].map((service) => (
                  <span 
                    key={service}
                    style={{
                      color: "#d1d5db",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      padding: "4px 0"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#60a5fa";
                      e.target.style.paddingLeft = "8px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#d1d5db";
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    • {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: "600",
                marginBottom: "25px",
                color: "#f3f4f6",
                letterSpacing: "0.5px"
              }}>
                Stay Updated
              </h3>
              <p style={{
                color: "#d1d5db",
                fontSize: "0.95rem",
                marginBottom: "25px",
                lineHeight: "1.7"
              }}>
                Subscribe to our newsletter for the latest property updates and market insights.
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    flex: 1,
                    padding: "14px 18px",
                    borderRadius: "10px",
                    border: "1px solid #4b5563",
                    background: "rgba(255,255,255,0.1)",
                    color: "white",
                    fontSize: "1rem"
                  }}
                />
                <button style={{
                  background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                  color: "white",
                  border: "none",
                  padding: "14px 24px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap"
                }}
                onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            borderTop: "1px solid #374151",
            paddingTop: "40px", // More padding
            textAlign: "center",
            color: "#9ca3af",
            fontSize: "0.95rem"
          }}>
            <p style={{ marginBottom: "20px" }}>
              © {new Date().getFullYear()} Aigetai Technologies. All rights reserved.
            </p>
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px", // More gap between policy links
              flexWrap: "wrap"
            }}>
              <Link to="/privacy" style={{ color: "#9ca3af", textDecoration: "none", padding: "5px 0" }}>
                Privacy Policy
              </Link>
              <Link to="/terms" style={{ color: "#9ca3af", textDecoration: "none", padding: "5px 0" }}>
                Terms of Service
              </Link>
              <Link to="/cookies" style={{ color: "#9ca3af", textDecoration: "none", padding: "5px 0" }}>
                Cookie Policy
              </Link>
              <Link to="/sitemap" style={{ color: "#9ca3af", textDecoration: "none", padding: "5px 0" }}>
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Add animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes underlineGrow {
          from {
            transform: scaleX(0);
            opacity: 0;
          }
          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        
        /* Media query for mobile */
        @media (max-width: 768px) {
          header > div {
            padding: 0 20px !important;
          }
          
          nav {
            display: none !important;
          }
          
          button[style*="display: none"] {
            display: block !important;
          }
          
          footer {
            padding: 40px 20px 30px !important;
          }
        }
        
        /* Media query for tablets */
        @media (min-width: 769px) and (max-width: 1024px) {
          nav {
            gap: 30px !important;
          }
          
          header > div {
            padding: 0 30px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
