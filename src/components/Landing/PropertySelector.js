import React, { useState } from "react";

const PropertySelector = () => {
  const [selectedProperty, setSelectedProperty] = useState(1);
  
  const properties = [
    { 
      id: 1, 
      name: "Modern Villa", 
      description: "Luxury villa with ocean view and modern amenities",
      thumb: "property1.jpg",
      images: ["p-1-1.jpg", "p-1-2.jpg", "p-1-3.jpg", "p-1-4.jpg", "p-1-5.jpg"]
    },
    { 
      id: 2, 
      name: "City Apartment", 
      description: "Downtown apartment with premium amenities",
      thumb: "property2.jpg", 
      images: ["p-2-1.jpg", "p-2-2.jpg", "p-2-3.jpg", "p-2-4.jpg", "p-2-5.jpg"]
    },
    { 
      id: 3, 
      name: "Beach House", 
      description: "Beachfront property with private access",
      thumb: "property3.jpg",
      images: ["p-3-1.jpeg", "p-3-2.jpeg", "p-3-3.jpeg", "p-3-4.jpeg", "p-3-5.jpeg"]
    },
    { 
      id: 4, 
      name: "Mountain Cabin", 
      description: "Cozy cabin with mountain views",
      thumb: "property4.jpg",
      images: ["p-4-1.jpeg", "p-4-2.jpg", "p-4-3.jpg", "p-4-4.jpg", "p-4-5.jpg"]
    },
    { 
      id: 5, 
      name: "Urban Loft", 
      description: "Modern loft in city center",
      thumb: "property5.jpg",
      images: ["p-5-1.jpg", "p-5-2.jpg", "p-5-3.jpg", "p-5-4.jpg", "p-5-5.jpg"]
    },
  ];
  
  return (
    <section style={{ padding: "80px 20px", background: "#f9fafb" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ 
          fontSize: "2.5rem", 
          textAlign: "center", 
          marginBottom: "20px",
          color: "#1f2937"
        }}>
          Featured Properties
        </h2>
        <p style={{ 
          textAlign: "center", 
          color: "#6b7280", 
          marginBottom: "50px",
          fontSize: "1.125rem"
        }}>
          Click on a property to view its gallery
        </p>
        
        {/* Property Thumbnails */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "50px"
        }}>
          {properties.map((property) => (
            <button
              key={property.id}
              onClick={() => setSelectedProperty(property.id)}
              style={{
                padding: "10px",
                borderRadius: "12px",
                border: "none",
                background: selectedProperty === property.id ? "#3b82f6" : "white",
                color: selectedProperty === property.id ? "white" : "#374151",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: selectedProperty === property.id 
                  ? "0 10px 25px rgba(59, 130, 246, 0.3)" 
                  : "0 4px 6px rgba(0,0,0,0.1)",
                transform: selectedProperty === property.id ? "translateY(-5px)" : "none",
                width: "180px"
              }}
            >
              <div style={{
                width: "160px",
                height: "160px",
                borderRadius: "10px",
                backgroundImage: `url(/images/${property.thumb})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "12px",
                border: selectedProperty === property.id ? "4px solid white" : "2px solid #e5e7eb"
              }} />
              <h3 style={{ 
                fontWeight: "600", 
                marginBottom: "5px",
                fontSize: "1.1rem"
              }}>
                {property.name}
              </h3>
              <p style={{ 
                fontSize: "0.875rem", 
                opacity: 0.8,
                maxWidth: "160px",
                lineHeight: "1.4"
              }}>
                {property.description}
              </p>
            </button>
          ))}
        </div>
        
        {/* Property Gallery */}
        <div style={{ 
          background: "white", 
          borderRadius: "16px", 
          padding: "40px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ 
            fontSize: "1.875rem", 
            marginBottom: "10px",
            color: "#1f2937"
          }}>
            {properties.find(p => p.id === selectedProperty)?.name} Gallery
          </h3>
          <p style={{ 
            color: "#6b7280", 
            marginBottom: "30px",
            fontSize: "1.125rem"
          }}>
            {properties.find(p => p.id === selectedProperty)?.description}
          </p>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "25px"
          }}>
            {properties
              .find(p => p.id === selectedProperty)
              ?.images.map((image, index) => (
                <div key={index} style={{ 
                  borderRadius: "12px", 
                  overflow: "hidden",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  position: "relative"
                }}>
                  <div style={{
                    height: "220px",
                    backgroundImage: `url(/images/${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }} />
                  <div style={{ 
                    padding: "18px",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.95), white)"
                  }}>
                    <p style={{ 
                      fontWeight: "600", 
                      marginBottom: "8px",
                      color: "#1f2937",
                      fontSize: "1.1rem"
                    }}>
                      View {index + 1}
                    </p>
                    <p style={{ 
                      fontSize: "0.9rem", 
                      color: "#6b7280",
                      lineHeight: "1.5"
                    }}>
                      {index === 0 && "Main living area"}
                      {index === 1 && "Kitchen and dining"}
                      {index === 2 && "Bedroom view"}
                      {index === 3 && "Bathroom facilities"}
                      {index === 4 && "Outdoor space"}
                    </p>
                  </div>
                  <div style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "rgba(0,0,0,0.7)",
                    color: "white",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "500"
                  }}>
                    {index + 1}/5
                  </div>
                </div>
              ))}
          </div>
          
          {/* Property Details */}
          <div style={{ 
            marginTop: "40px",
            padding: "30px",
            background: "#f8fafc",
            borderRadius: "12px",
            borderLeft: "4px solid #3b82f6"
          }}>
            <h4 style={{ 
              fontSize: "1.3rem", 
              marginBottom: "15px",
              color: "#1f2937"
            }}>
              Property Details
            </h4>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px"
            }}>
              <div>
                <span style={{ color: "#6b7280", fontSize: "0.95rem" }}>Type:</span>
                <p style={{ fontWeight: "500", marginTop: "5px" }}>
                  {properties.find(p => p.id === selectedProperty)?.name.split(" ")[0]}
                </p>
              </div>
              <div>
                <span style={{ color: "#6b7280", fontSize: "0.95rem" }}>Bedrooms:</span>
                <p style={{ fontWeight: "500", marginTop: "5px" }}>3-4</p>
              </div>
              <div>
                <span style={{ color: "#6b7280", fontSize: "0.95rem" }}>Bathrooms:</span>
                <p style={{ fontWeight: "500", marginTop: "5px" }}>2-3</p>
              </div>
              <div>
                <span style={{ color: "#6b7280", fontSize: "0.95rem" }}>Square Feet:</span>
                <p style={{ fontWeight: "500", marginTop: "5px" }}>1,800 - 2,500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySelector;
