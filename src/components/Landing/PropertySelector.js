import React, { useState, useEffect, useRef } from "react";

const PropertySelector = () => {
  const [selectedProperty, setSelectedProperty] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const sectionRef = useRef(null);

  // Fade in animation on scroll
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

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const properties = [
    {
      id: 1,
      name: "Modern Villa",
      description: "Luxury villa with ocean view and modern amenities",
      price: "$4,200,000",
      location: "Beverly Hills, CA",
      bedrooms: 4,
      bathrooms: 3,
      sqft: "2,500",
      thumb: "/images/property1.jpg",
      images: [
        "/images/property1/image1.jpg",
        "/images/property1/image2.jpg", 
        "/images/property1/image3.jpg",
        "/images/property1/image4.jpg",
        "/images/property1/image5.jpg"
      ]
    },
    {
      id: 2,
      name: "City Apartment",
      description: "Downtown apartment with premium amenities",
      price: "$3,500,000",
      location: "New York, NY",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "1,800",
      thumb: "/images/property2.jpg",
      images: [
        "/images/property2/image1.jpg",
        "/images/property2/image2.jpg",
        "/images/property2/image3.jpg",
        "/images/property2/image4.jpg",
        "/images/property2/image5.jpg"
      ]
    },
    {
      id: 3,
      name: "Beach House",
      description: "Beachfront property with private access",
      price: "$2,800,000",
      location: "Miami, FL",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "2,200",
      thumb: "/images/property3.jpg",
      images: [
        "/images/property3/image1.jpg",
        "/images/property3/image2.jpg",
        "/images/property3/image3.jpg",
        "/images/property3/image4.jpg",
        "/images/property3/image5.jpg"
      ]
    },
    {
      id: 4,
      name: "Mountain Cabin",
      description: "Cozy cabin with mountain views",
      price: "$1,900,000",
      location: "Aspen, CO",
      bedrooms: 3,
      bathrooms: 2,
      sqft: "1,600",
      thumb: "/images/property4.jpg",
      images: [
        "/images/property4/image1.jpg",
        "/images/property4/image2.jpg",
        "/images/property4/image3.jpg",
        "/images/property4/image4.jpg",
        "/images/property4/image5.jpg"
      ]
    },
    {
      id: 5,
      name: "Urban Loft",
      description: "Modern loft in city center",
      price: "$2,300,000",
      location: "Chicago, IL",
      bedrooms: 2,
      bathrooms: 2,
      sqft: "1,500",
      thumb: "/images/property5.jpg",
      images: [
        "/images/property5/image1.jpg",
        "/images/property5/image2.jpg",
        "/images/property5/image3.jpg",
        "/images/property5/image4.jpg",
        "/images/property5/image5.jpg"
      ]
    },
  ];

  const selectedProp = properties.find(p => p.id === selectedProperty);

  return (
    <section 
      ref={sectionRef}
      style={{ 
        padding: "80px 20px", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Animated Title */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s"
        }}>
          <h2 style={{
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "bold",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)"
          }}>
            Featured Properties
          </h2>
          <p style={{
            fontSize: "1.25rem",
            textAlign: "center",
            marginBottom: "60px",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            opacity: 0.9
          }}>
            Explore our exclusive collection of premium properties
          </p>
        </div>

        {/* Property Thumbnails with Staggered Animation */}
        <div style={{
          display: "flex",
          gap: "25px",
          overflowX: "auto",
          paddingBottom: "30px",
          marginBottom: "50px",
          scrollbarWidth: "thin",
          scrollbarColor: "#3b82f6 #f1f1f1"
        }}>
          {properties.map((property, index) => (
            <div
              key={property.id}
              onClick={() => {
                setSelectedProperty(property.id);
                setGalleryIndex(0); // Reset gallery on property change
              }}
              style={{
                flex: "0 0 280px",
                borderRadius: "16px",
                overflow: "hidden",
                background: "white",
                boxShadow: selectedProperty === property.id 
                  ? "0 20px 40px rgba(255, 255, 255, 0.3)" 
                  : "0 8px 20px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                transform: selectedProperty === property.id 
                  ? "translateY(-10px) scale(1.05)" 
                  : "translateY(0) scale(1)",
                border: selectedProperty === property.id 
                  ? "4px solid rgba(255, 255, 255, 0.8)" 
                  : "2px solid rgba(255, 255, 255, 0.2)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? (selectedProperty === property.id 
                    ? "translateY(-10px) scale(1.05)" 
                    : "translateY(0) scale(1)")
                  : `translateY(${50 + index * 10}px)`,
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                if (selectedProperty !== property.id) {
                  e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedProperty !== property.id) {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }
              }}
            >
              {/* Property Image with Hover Zoom */}
              <div style={{
                height: "200px",
                backgroundImage: `url(${property.thumb})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${property.thumb})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.5s ease",
                  transform: "scale(1)"
                }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                />
                <div style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "rgba(0,0,0,0.7)",
                  color: "white",
                  padding: "6px 15px",
                  borderRadius: "20px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  animation: "pricePulse 2s infinite"
                }}>
                  {property.price}
                </div>
              </div>
              
              {/* Property Info */}
              <div style={{ padding: "20px" }}>
                <h3 style={{
                  fontWeight: "600",
                  marginBottom: "8px",
                  fontSize: "1.3rem",
                  color: "#1f2937",
                  transition: "color 0.3s ease"
                }}>
                  {property.name}
                </h3>
                <p style={{
                  fontSize: "0.95rem",
                  color: "#6b7280",
                  marginBottom: "15px",
                  lineHeight: "1.5",
                  height: "40px"
                }}>
                  {property.description}
                </p>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.9rem",
                  color: "#4b5563"
                }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ animation: "bounce 2s infinite" }}>📍</span> 
                    {property.location}
                  </span>
                  <span>🛏️ {property.bedrooms} beds</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Property Section with Fade In */}
        <div style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px"
          }}>
            <div style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.5s ease-out 0.6s, transform 0.5s ease-out 0.6s"
            }}>
              <h3 style={{
                fontSize: "2rem",
                marginBottom: "8px",
                color: "#1f2937"
              }}>
                {selectedProp?.name}
              </h3>
              <p style={{
                color: "#6b7280",
                fontSize: "1.1rem"
              }}>
                {selectedProp?.location}
              </p>
            </div>
            <div style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#059669",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.7s",
              animation: "priceFloat 3s ease-in-out infinite"
            }}>
              {selectedProp?.price}
            </div>
          </div>

          {/* Animated Main Image with Ken Burns Effect */}
          <div style={{
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "30px",
            height: "400px",
            position: "relative",
            boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
          }}>
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${selectedProp?.images[galleryIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: "kenBurns 20s infinite alternate",
              transition: "background-image 1s ease-in-out"
            }} />
            <div style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              background: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              backdropFilter: "blur(10px)",
              animation: "slideUpIn 0.8s ease-out"
            }}>
              <div style={{ fontSize: "0.9rem", opacity: 0.8 }}>Currently viewing</div>
              <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {selectedProp?.name} - Image {galleryIndex + 1}
              </div>
            </div>
            
            {/* Gallery Navigation Dots */}
            <div style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              display: "flex",
              gap: "10px"
            }}>
              {selectedProp?.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryIndex(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "none",
                    background: index === galleryIndex 
                      ? "rgba(255, 255, 255, 0.9)" 
                      : "rgba(255, 255, 255, 0.3)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    transform: index === galleryIndex ? "scale(1.3)" : "scale(1)"
                  }}
                  onMouseEnter={(e) => {
                    if (index !== galleryIndex) {
                      e.target.style.transform = "scale(1.2)";
                      e.target.style.background = "rgba(255, 255, 255, 0.6)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== galleryIndex) {
                      e.target.style.transform = "scale(1)";
                      e.target.style.background = "rgba(255, 255, 255, 0.3)";
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Gallery Thumbnails with Slide Animation */}
          <div>
            <h4 style={{
              fontSize: "1.3rem",
              marginBottom: "20px",
              color: "#1f2937",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.5s ease-out 0.8s, transform 0.5s ease-out 0.8s"
            }}>
              Property Gallery
            </h4>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px"
            }}>
              {selectedProp?.images.map((image, index) => (
                <div 
                  key={index}
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    height: "150px",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    position: "relative",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.5s ease-out ${0.9 + index * 0.1}s, 
                               transform 0.5s ease-out ${0.9 + index * 0.1}s,
                               transform 0.3s ease`
                  }}
                  onClick={() => setGalleryIndex(index)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                  }}
                >
                  <div style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background: index === galleryIndex 
                      ? "rgba(59, 130, 246, 0.9)" 
                      : "rgba(0,0,0,0.7)",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    transition: "all 0.3s ease"
                  }}>
                    View {index + 1}
                  </div>
                  {index === galleryIndex && (
                    <div style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: "rgba(59, 130, 246, 0.9)",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      animation: "pulse 2s infinite"
                    }}>
                      Active
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Property Details with Staggered Animation */}
          <div style={{
            marginTop: "40px",
            padding: "30px",
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            borderRadius: "12px",
            borderLeft: "4px solid #3b82f6",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease-out 1.2s, transform 0.6s ease-out 1.2s"
          }}>
            <h4 style={{
              fontSize: "1.3rem",
              marginBottom: "20px",
              color: "#1f2937"
            }}>
              Property Details
            </h4>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px"
            }}>
              {[
                { icon: "🛏️", label: "Bedrooms", value: selectedProp?.bedrooms },
                { icon: "🛁", label: "Bathrooms", value: selectedProp?.bathrooms },
                { icon: "📐", label: "Square Feet", value: selectedProp?.sqft },
                { icon: "📍", label: "Location", value: selectedProp?.location }
              ].map((detail, index) => (
                <div 
                  key={index}
                  style={{ 
                    textAlign: "center",
                    padding: "20px",
                    background: "white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease-out ${1.3 + index * 0.1}s, 
                               transform 0.5s ease-out ${1.3 + index * 0.1}s`
                  }}
                >
                  <div style={{ 
                    fontSize: "2rem", 
                    marginBottom: "10px",
                    animation: "float 3s ease-in-out infinite",
                    animationDelay: `${index * 0.5}s`
                  }}>
                    {detail.icon}
                  </div>
                  <div style={{ 
                    fontWeight: "bold", 
                    fontSize: "1.2rem",
                    color: "#1f2937",
                    marginBottom: "5px"
                  }}>
                    {detail.value}
                  </div>
                  <div style={{ 
                    color: "#6b7280",
                    fontSize: "0.9rem"
                  }}>
                    {detail.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySelector;
