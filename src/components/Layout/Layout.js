import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ 
        background: "white", 
        padding: "20px", 
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        top: 0
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto", 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center" 
        }}>
          <Link 
            to="/" 
            style={{ 
              fontSize: "24px", 
              fontWeight: "bold", 
              color: "#3b82f6",
              textDecoration: "none"
            }}
          >
            PropertyView
          </Link>
          
          <nav>
            <Link 
              to="/" 
              style={{ 
                marginRight: "20px", 
                textDecoration: "none", 
                color: "#374151", 
                fontWeight: "500" 
              }}
            >
              Home
            </Link>
            <Link 
              to="/careers" 
              style={{ 
                marginRight: "20px", 
                textDecoration: "none", 
                color: "#374151", 
                fontWeight: "500" 
              }}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              style={{ 
                textDecoration: "none", 
                color: "#374151", 
                fontWeight: "500" 
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      
      <main style={{ flex: "1", marginTop: "80px" }}>{children}</main>
      
      <footer style={{ 
        background: "#1f2937", 
        color: "white", 
        padding: "40px 20px", 
        textAlign: "center",
        marginTop: "80px"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "40px",
            marginBottom: "40px",
            textAlign: "left"
          }}>
            <div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "20px" }}>PropertyView</h3>
              <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
                Transforming real estate with immersive virtual experiences and cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "20px" }}>Quick Links</h3>
              <ul style={{ listStyle: "none", padding: 0, color: "#d1d5db" }}>
                <li style={{ marginBottom: "10px" }}><Link to="/" style={{ color: "#d1d5db", textDecoration: "none" }}>Home</Link></li>
                <li style={{ marginBottom: "10px" }}><Link to="/careers" style={{ color: "#d1d5db", textDecoration: "none" }}>Careers</Link></li>
                <li><Link to="/contact" style={{ color: "#d1d5db", textDecoration: "none" }}>Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "20px" }}>Contact</h3>
              <p style={{ color: "#d1d5db", lineHeight: "1.6" }}>
                123 Innovation Drive<br />
                San Francisco, CA 94107<br />
                contact@propertyview.com
              </p>
            </div>
          </div>
          
          <div style={{ 
            borderTop: "1px solid #374151", 
            paddingTop: "20px", 
            color: "#9ca3af" 
          }}>
            <p>&copy; 2024 PropertyView. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
