import React, { useState } from "react";

const PropertySelector = () => {
  const [selectedProperty, setSelectedProperty] = useState(1);
  
  const properties = [
    { id: 1, name: "Modern Villa", description: "Luxury villa with ocean view" },
    { id: 2, name: "City Apartment", description: "Downtown apartment with amenities" },
    { id: 3, name: "Beach House", description: "Beachfront property with private access" },
    { id: 4, name: "Mountain Cabin", description: "Cozy cabin in the mountains" },
    { id: 5, name: "Urban Loft", description: "Modern loft in city center" },
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
                transform: selectedProperty === property.id ? "translateY(-5px)" : "none"
              }}
            >
              <div style={{
                width: "150px",
                height: "150px",
                borderRadius: "8px",
                backgroundImage: `url(/images/property${property.id}.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: "10px",
                border: selectedProperty === property.id ? "3px solid white" : "3px solid transparent"
              }} />
              <h3 style={{ 
                fontWeight: "600", 
                marginBottom: "5px",
                fontSize: "1rem"
              }}>
                {property.name}
              </h3>
              <p style={{ 
                fontSize: "0.875rem", 
                opacity: 0.8,
                maxWidth: "150px"
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
            gap: "20px"
          }}>
            {[1, 2, 3, 4, 5].map((imgNum) => (
              <div key={imgNum} style={{ 
                borderRadius: "12px", 
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease"
              }}>
                <div style={{
                  height: "200px",
                  backgroundImage: `url(/images/property${selectedProperty}/image${imgNum}.svg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"][imgNum-1]
                }} />
                <div style={{ padding: "15px" }}>
                  <p style={{ 
                    fontWeight: "600", 
                    marginBottom: "5px",
                    color: "#1f2937"
                  }}>
                    View {imgNum}
                  </p>
                  <p style={{ 
                    fontSize: "0.875rem", 
                    color: "#6b7280"
                  }}>
                    Beautiful view of the property
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySelector;
