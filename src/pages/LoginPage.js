import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const sectionRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", loginData);
      setIsLoading(false);
      // In a real app, you would handle login success/error here
      alert(activeTab === "login" ? "Login successful!" : "Account created!");
    }, 1500);
  };

  const socialLogins = [
    { icon: "G", name: "Google", color: "#DB4437", bg: "#DB443720" },
    { icon: "f", name: "Facebook", color: "#4267B2", bg: "#4267B220" },
    { icon: "in", name: "LinkedIn", color: "#0077B5", bg: "#0077B520" },
    { icon: "git", name: "GitHub", color: "#333", bg: "#33333320" }
  ];

  return (
    <div 
      ref={sectionRef}
      style={{ 
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none"
      }}>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              filter: "blur(10px)"
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <div 
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Logo/Brand */}
        <div style={{
          textAlign: "center",
          marginBottom: "40px"
        }}>
          <div style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "10px"
          }}>
            AIGETAI
          </div>
          <p style={{
            color: "#6b7280",
            fontSize: "1.1rem"
          }}>
            {activeTab === "login" ? "Welcome back to your account" : "Join our community"}
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex",
          background: "#f1f5f9",
          borderRadius: "12px",
          padding: "5px",
          marginBottom: "30px"
        }}>
          <button
            onClick={() => setActiveTab("login")}
            style={{
              flex: 1,
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              background: activeTab === "login" ? "white" : "transparent",
              color: activeTab === "login" ? "#3b82f6" : "#64748b",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: activeTab === "login" ? "0 4px 12px rgba(0,0,0,0.1)" : "none"
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            style={{
              flex: 1,
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              background: activeTab === "signup" ? "white" : "transparent",
              color: activeTab === "signup" ? "#3b82f6" : "#64748b",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: activeTab === "signup" ? "0 4px 12px rgba(0,0,0,0.1)" : "none"
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Social Login */}
        <div style={{ marginBottom: "30px" }}>
          <p style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "15px",
            fontSize: "0.95rem"
          }}>
            {activeTab === "login" ? "Sign in with" : "Sign up with"}
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px"
          }}>
            {socialLogins.map((social, i) => (
              <button
                key={i}
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  background: social.bg,
                  color: social.color,
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem"
                }}
                onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          display: "flex",
          alignItems: "center",
          margin: "30px 0"
        }}>
          <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }}></div>
          <div style={{ 
            padding: "0 15px", 
            color: "#94a3b8", 
            fontSize: "0.9rem",
            fontWeight: "500"
          }}>
            OR CONTINUE WITH EMAIL
          </div>
          <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }}></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit}>
          <div style={{ display: "grid", gap: "20px" }}>
            {/* Email */}
            <div>
              <label style={{
                display: "block",
                marginBottom: "8px",
                color: "#475569",
                fontWeight: "500",
                fontSize: "0.95rem"
              }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "15px 18px",
                  borderRadius: "12px",
                  border: "2px solid #e2e8f0",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  background: "white"
                }}
                onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
                onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
              />
            </div>

            {/* Password */}
            <div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px"
              }}>
                <label style={{
                  color: "#475569",
                  fontWeight: "500",
                  fontSize: "0.95rem"
                }}>
                  Password
                </label>
                {activeTab === "login" && (
                  <Link 
                    to="/forgot-password" 
                    style={{
                      color: "#3b82f6",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: "500"
                    }}
                    onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                    onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                placeholder="••••••••"
                minLength="8"
                style={{
                  width: "100%",
                  padding: "15px 18px",
                  borderRadius: "12px",
                  border: "2px solid #e2e8f0",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  background: "white"
                }}
                onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
                onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
              />
              {activeTab === "signup" && (
                <p style={{
                  fontSize: "0.85rem",
                  color: "#94a3b8",
                  marginTop: "8px"
                }}>
                  Must be at least 8 characters with letters and numbers
                </p>
              )}
            </div>

            {/* Remember Me & Terms (for signup) */}
            {activeTab === "login" ? (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                  style={{
                    width: "18px",
                    height: "18px",
                    accentColor: "#3b82f6"
                  }}
                />
                <label 
                  htmlFor="rememberMe"
                  style={{
                    color: "#475569",
                    fontSize: "0.95rem",
                    cursor: "pointer"
                  }}
                >
                  Remember me for 30 days
                </label>
              </div>
            ) : (
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px"
              }}>
                <input
                  type="checkbox"
                  id="terms"
                  required
                  style={{
                    width: "18px",
                    height: "18px",
                    accentColor: "#3b82f6",
                    marginTop: "3px"
                  }}
                />
                <label 
                  htmlFor="terms"
                  style={{
                    color: "#475569",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    lineHeight: "1.5"
                  }}
                >
                  I agree to the{" "}
                  <Link to="/terms" style={{ color: "#3b82f6", textDecoration: "none" }}>
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" style={{ color: "#3b82f6", textDecoration: "none" }}>
                    Privacy Policy
                  </Link>
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                color: "white",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: isLoading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                marginTop: "10px",
                opacity: isLoading ? 0.8 : 1,
                position: "relative"
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.transform = "translateY(0)";
                }
              }}
            >
              {isLoading ? (
                <>
                  <span style={{ opacity: 0 }}>{activeTab === "login" ? "Sign In" : "Create Account"}</span>
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "20px",
                    height: "20px",
                    border: "3px solid rgba(255,255,255,0.3)",
                    borderTop: "3px solid white",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite"
                  }} />
                </>
              ) : (
                activeTab === "login" ? "Sign In" : "Create Account"
              )}
            </button>
          </div>
        </form>

        {/* Switch Prompt */}
        <div style={{
          textAlign: "center",
          marginTop: "30px",
          paddingTop: "20px",
          borderTop: "1px solid #e2e8f0"
        }}>
          <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
            {activeTab === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}
              style={{
                background: "none",
                border: "none",
                color: "#3b82f6",
                fontWeight: "600",
                cursor: "pointer",
                padding: "0",
                fontSize: "0.95rem"
              }}
            >
              {activeTab === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>

        {/* Security Note */}
        <div style={{
          marginTop: "30px",
          padding: "15px",
          background: "#f8fafc",
          borderRadius: "10px",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "#64748b",
          border: "1px solid #e2e8f0"
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "5px" }}>
            <span>🔒</span>
            <span style={{ fontWeight: "500" }}>Bank-level Security</span>
          </div>
          <p style={{ margin: 0 }}>
            Your data is protected with 256-bit SSL encryption and GDPR compliance.
          </p>
        </div>
      </div>

      {/* Add spin animation for loading */}
      <style>{`
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
