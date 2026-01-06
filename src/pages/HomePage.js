import React from "react";
import HeroSection from "../components/Landing/HeroSection";
import PropertySelector from "../components/Landing/PropertySelector";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PropertySelector />
      
      {/* Additional Features Section */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            fontSize: "2.5rem", 
            textAlign: "center", 
            marginBottom: "50px",
            color: "#1f2937"
          }}>
            Why Choose Our Platform?
          </h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "30px" 
          }}>
            <div style={{ 
              background: "white", 
              padding: "40px 30px", 
              borderRadius: "12px", 
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s ease"
            }}>
              <div style={{ 
                fontSize: "3rem", 
                marginBottom: "20px",
                color: "#3b82f6"
              }}>
                🏠
              </div>
              <h3 style={{ 
                fontSize: "1.5rem", 
                marginBottom: "15px",
                color: "#1f2937"
              }}>
                Virtual Tours
              </h3>
              <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                Experience properties through immersive 360° virtual tours from the comfort of your home.
              </p>
            </div>
            
            <div style={{ 
              background: "white", 
              padding: "40px 30px", 
              borderRadius: "12px", 
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s ease"
            }}>
              <div style={{ 
                fontSize: "3rem", 
                marginBottom: "20px",
                color: "#10b981"
              }}>
                🤝
              </div>
              <h3 style={{ 
                fontSize: "1.5rem", 
                marginBottom: "15px",
                color: "#1f2937"
              }}>
                Expert Agents
              </h3>
              <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                Connect with verified real estate professionals who understand your needs.
              </p>
            </div>
            
            <div style={{ 
              background: "white", 
              padding: "40px 30px", 
              borderRadius: "12px", 
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s ease"
            }}>
              <div style={{ 
                fontSize: "3rem", 
                marginBottom: "20px",
                color: "#f59e0b"
              }}>
                🔒
              </div>
              <h3 style={{ 
                fontSize: "1.5rem", 
                marginBottom: "15px",
                color: "#1f2937"
              }}>
                Secure Transactions
              </h3>
              <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
                Safe, transparent, and legally sound property transactions with full documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
