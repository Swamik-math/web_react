import React, { useState, useEffect, useRef } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: ["hello@aigetai.com", "support@aigetai.com"],
      color: "#3b82f6"
    },
    {
      icon: "📱",
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "#10b981"
    },
    {
      icon: "📍",
      title: "Office",
      details: ["123 AI Street", "San Francisco, CA 94107", "United States"],
      color: "#8b5cf6"
    },
    {
      icon: "⏰",
      title: "Hours",
      details: ["Mon-Fri: 9am-6pm PST", "Sat: 10am-4pm PST", "Sun: Closed"],
      color: "#f59e0b"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      style={{ 
        minHeight: "calc(100vh - 200px)", 
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{
          textAlign: "center",
          marginBottom: "60px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s"
        }}>
          <h1 style={{
            fontSize: "3.5rem",
            marginBottom: "20px",
            color: "#1f2937",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Get in Touch
          </h1>
          <p style={{
            fontSize: "1.25rem",
            color: "#6b7280",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.7"
          }}>
            Have questions about our properties or services? We're here to help. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start"
        }}>
          
          {/* Left: Contact Information */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s"
          }}>
            <h2 style={{
              fontSize: "2rem",
              marginBottom: "30px",
              color: "#1f2937"
            }}>
              Contact Information
            </h2>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "25px"
            }}>
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  style={{
                    background: "white",
                    padding: "25px",
                    borderRadius: "16px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    borderLeft: `4px solid ${info.color}`,
                    transition: "all 0.3s ease",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease-out ${0.5 + index * 0.1}s, transform 0.5s ease-out ${0.5 + index * 0.1}s`
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "translateY(-5px)"}
                  onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
                >
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginBottom: "15px"
                  }}>
                    <div style={{
                      width: "50px",
                      height: "50px",
                      background: `${info.color}20`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem"
                    }}>
                      {info.icon}
                    </div>
                    <h3 style={{
                      fontSize: "1.3rem",
                      color: "#1f2937",
                      fontWeight: "600"
                    }}>
                      {info.title}
                    </h3>
                  </div>
                  
                  <div>
                    {info.details.map((detail, i) => (
                      <p key={i} style={{
                        color: "#6b7280",
                        marginBottom: "8px",
                        lineHeight: "1.5"
                      }}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map/Office Image */}
            <div style={{
              marginTop: "40px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.6s ease-out 0.9s, transform 0.6s ease-out 0.9s"
            }}>
              <div style={{
                height: "200px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.2rem"
              }}>
                🗺️ Interactive Map Here
              </div>
              <div style={{
                padding: "20px",
                background: "white",
                textAlign: "center"
              }}>
                <p style={{ color: "#6b7280", marginBottom: "5px" }}>
                  Visit our headquarters
                </p>
                <p style={{ fontWeight: "600", color: "#1f2937" }}>
                  123 AI Street, San Francisco
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(30px)",
            transition: "opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s"
          }}>
            <div style={{
              background: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
            }}>
              <h2 style={{
                fontSize: "2rem",
                marginBottom: "30px",
                color: "#1f2937"
              }}>
                Send us a Message
              </h2>
              
              {isSubmitted ? (
                <div style={{
                  background: "#dcfce7",
                  border: "2px solid #10b981",
                  borderRadius: "12px",
                  padding: "30px",
                  textAlign: "center",
                  animation: "fadeIn 0.5s ease"
                }}>
                  <div style={{
                    fontSize: "3rem",
                    marginBottom: "20px",
                    color: "#10b981"
                  }}>
                    ✅
                  </div>
                  <h3 style={{
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    color: "#065f46"
                  }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ color: "#047857" }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gap: "20px" }}>
                    {/* Name & Email */}
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px"
                    }}>
                      <div>
                        <label style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#4b5563",
                          fontWeight: "500"
                        }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{
                            width: "100%",
                            padding: "14px 18px",
                            borderRadius: "10px",
                            border: "2px solid #e5e7eb",
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            background: "#f9fafb"
                          }}
                          onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
                          onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                        />
                      </div>
                      
                      <div>
                        <label style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#4b5563",
                          fontWeight: "500"
                        }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{
                            width: "100%",
                            padding: "14px 18px",
                            borderRadius: "10px",
                            border: "2px solid #e5e7eb",
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            background: "#f9fafb"
                          }}
                          onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
                          onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "#4b5563",
                        fontWeight: "500"
                      }}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{
                          width: "100%",
                          padding: "14px 18px",
                          borderRadius: "10px",
                          border: "2px solid #e5e7eb",
                          fontSize: "1rem",
                          transition: "all 0.3s ease",
                          background: "#f9fafb"
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
                        onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "#4b5563",
                        fontWeight: "500"
                      }}>
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        style={{
                          width: "100%",
                          padding: "14px 18px",
                          borderRadius: "10px",
                          border: "2px solid #e5e7eb",
                          fontSize: "1rem",
                          transition: "all 0.3s ease",
                          background: "#f9fafb",
                          resize: "vertical"
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
                        onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      style={{
                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                        color: "white",
                        padding: "16px 32px",
                        borderRadius: "10px",
                        border: "none",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        marginTop: "10px",
                        boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-3px)";
                        e.target.style.boxShadow = "0 12px 30px rgba(59, 130, 246, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.3)";
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}

              {/* Privacy Notice */}
              <div style={{
                marginTop: "30px",
                padding: "15px",
                background: "#f8fafc",
                borderRadius: "10px",
                fontSize: "0.9rem",
                color: "#6b7280",
                borderLeft: "3px solid #3b82f6"
              }}>
                <p style={{ margin: 0 }}>
                  <strong>Privacy Note:</strong> We respect your privacy and will never 
                  share your information with third parties. All data is protected 
                  with 256-bit SSL encryption.
                </p>
              </div>
            </div>

            {/* FAQ Preview */}
            <div style={{
              marginTop: "40px",
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                marginBottom: "20px",
                color: "#1f2937"
              }}>
                Frequently Asked Questions
              </h3>
              
              <div style={{ display: "grid", gap: "15px" }}>
                {[
                  { q: "How quickly do you respond?", a: "Within 24 hours on business days." },
                  { q: "Do you offer virtual tours?", a: "Yes, for all premium properties." },
                  { q: "What are your business hours?", a: "Mon-Fri 9am-6pm PST" }
                ].map((faq, i) => (
                  <div key={i} style={{
                    padding: "15px",
                    background: "#f9fafb",
                    borderRadius: "10px",
                    borderLeft: "3px solid #e5e7eb"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px"
                    }}>
                      <span style={{ color: "#3b82f6", fontWeight: "bold" }}>Q:</span>
                      <span style={{ fontWeight: "600", color: "#4b5563" }}>
                        {faq.q}
                      </span>
                    </div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}>
                      <span style={{ color: "#10b981", fontWeight: "bold" }}>A:</span>
                      <span style={{ color: "#6b7280" }}>{faq.a}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button style={{
                marginTop: "20px",
                background: "transparent",
                color: "#3b82f6",
                border: "2px solid #3b82f6",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                width: "100%"
              }}
              onMouseEnter={(e) => e.target.style.background = "#3b82f610"}
              onMouseLeave={(e) => e.target.style.background = "transparent"}
              >
                View All FAQs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
