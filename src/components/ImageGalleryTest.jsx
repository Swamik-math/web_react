import React, { useState } from "react";

const ImageGalleryTest = () => {
  const [selectedProperty, setSelectedProperty] = useState(1);
  
  const properties = [
    { 
      id: 1, 
      name: "Modern Villa", 
      thumb: "/images/property1.jpg",
      gallery: [
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
      thumb: "/images/property2.jpg",
      gallery: [
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
      thumb: "/images/property3.jpg",
      gallery: [
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
      thumb: "/images/property4.jpg",
      gallery: [
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
      thumb: "/images/property5.jpg",
      gallery: [
        "/images/property5/image1.jpg",
        "/images/property5/image2.jpg",
        "/images/property5/image3.jpg",
        "/images/property5/image4.jpg",
        "/images/property5/image5.jpg"
      ]
    }
  ];

  const selectedProp = properties.find(p => p.id === selectedProperty);

  return (
    <div style={{ padding: "40px", background: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#333" }}>
        Image Gallery Test
      </h1>
      
      {/* Property Selector */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "15px", 
        marginBottom: "40px",
        flexWrap: "wrap" 
      }}>
        {properties.map(prop => (
          <button
            key={prop.id}
            onClick={() => setSelectedProperty(prop.id)}
            style={{
              padding: "12px 24px",
              background: selectedProperty === prop.id ? "#3b82f6" : "white",
              color: selectedProperty === prop.id ? "white" : "#333",
              border: "2px solid #3b82f6",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontWeight: "600"
            }}
          >
            {prop.name}
          </button>
        ))}
      </div>
      
      {/* Main Image Display */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: "#555" }}>
          {selectedProp.name} - Main Thumbnail
        </h2>
        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }}>
          <img
            src={selectedProp.thumb}
            alt={selectedProp.name}
            style={{ width: "100%", height: "auto", display: "block" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/600x400/cccccc/666666?text=Image+Not+Found";
            }}
          />
          <div style={{ 
            padding: "15px", 
            background: "white",
            color: "#666",
            fontSize: "0.9rem"
          }}>
            Path: {selectedProp.thumb}
          </div>
        </div>
      </div>
      
      {/* Gallery Images */}
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#555" }}>
          Gallery Images (5 total)
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {selectedProp.gallery.map((img, index) => (
            <div key={index} style={{
              background: "white",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}>
              <div style={{
                height: "150px",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }} />
              <div style={{ 
                padding: "10px", 
                textAlign: "center",
                color: "#666",
                fontSize: "0.8rem",
                borderTop: "1px solid #eee"
              }}>
                Image {index + 1}
                <div style={{ color: "#999", fontSize: "0.7rem" }}>
                  {img}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Special Images */}
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "30px", color: "#555" }}>
          Special Images
        </h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap"
        }}>
          <div>
            <h3 style={{ color: "#666", marginBottom: "10px" }}>Girl Image</h3>
            <img 
              src="/images/girl.png" 
              alt="Girl" 
              style={{ 
                width: "200px", 
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200x300/cccccc/666666?text=Girl+Not+Found";
              }}
            />
          </div>
          <div>
            <h3 style={{ color: "#666", marginBottom: "10px" }}>Background</h3>
            <img 
              src="/images/background.jpg" 
              alt="Background" 
              style={{ 
                width: "300px", 
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x150/cccccc/666666?text=Background+Not+Found";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryTest;
