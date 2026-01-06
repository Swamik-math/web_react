import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We\'ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <div style={{ minHeight: "calc(100vh - 200px)", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ 
          fontSize: "3rem", 
          marginBottom: "20px",
          color: "#1f2937"
        }}>
          Contact Us
        </h1>
        <p style={{ 
          fontSize: "1.125rem", 
          color: "#6b7280", 
          marginBottom: "50px"
        }}>
          Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "60px",
          alignItems: "start"
        }}>
          {/* Contact Form */}
          <div>
            <h2 style={{ 
              fontSize: "1.875rem", 
              marginBottom: "30px",
              color: "#1f2937"
            }}>
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#374151"
                }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    fontSize: "1rem",
                    transition: "border-color 0.3s ease"
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#374151"
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    fontSize: "1rem"
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#374151"
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    fontSize: "1rem",
                    resize: "vertical"
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  background: "#3b82f6",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  alignSelf: "flex-start"
                }}
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 style={{ 
              fontSize: "1.875rem", 
              marginBottom: "30px",
              color: "#1f2937"
            }}>
              Contact Information
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <div>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  marginBottom: "10px",
                  color: "#1f2937"
                }}>
                  Email
                </h3>
                <p style={{ color: "#6b7280", fontSize: "1.125rem" }}>
                  contact@propertyview.com
                </p>
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  marginBottom: "10px",
                  color: "#1f2937"
                }}>
                  Phone
                </h3>
                <p style={{ color: "#6b7280", fontSize: "1.125rem" }}>
                  +1 (555) 123-4567
                </p>
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  marginBottom: "10px",
                  color: "#1f2937"
                }}>
                  Office Address
                </h3>
                <p style={{ color: "#6b7280", fontSize: "1.125rem", lineHeight: "1.6" }}>
                  123 Innovation Drive<br />
                  Suite 500<br />
                  San Francisco, CA 94107
                </p>
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  marginBottom: "10px",
                  color: "#1f2937"
                }}>
                  Office Hours
                </h3>
                <p style={{ color: "#6b7280", fontSize: "1.125rem" }}>
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
