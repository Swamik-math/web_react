import React from "react";
import { Link } from "react-router-dom";


const CareersPage = () => {
  const jobs = [
    { id: "software-engineer-backend", title: "Software Engineer - Backend", department: "Engineering", location: "Remote" },
    { id: "product-manager", title: "Product Manager", department: "Product", location: "San Francisco" },
    { id: "research-scientist", title: "Research Scientist", department: "Research", location: "Remote" },
    { id: "ai-tooling-engineer", title: "AI Tooling Engineer", department: "Engineering", location: "New York" },
    { id: "growth-marketer", title: "Growth Marketer", department: "Marketing", location: "Remote" },
    { id: "product-designer", title: "Product Designer", department: "Design", location: "Austin" },
  ];
  
  return (
    <div style={{ minHeight: "calc(100vh - 200px)", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ 
          fontSize: "3rem", 
          marginBottom: "20px",
          color: "#1f2937"
        }}>
          Join Our Team
        </h1>
        <p style={{ 
          fontSize: "1.125rem", 
          color: "#6b7280", 
          marginBottom: "50px",
          maxWidth: "800px"
        }}>
          We\'re building the future of real estate technology. Join us in creating immersive 
          experiences that transform how people discover and interact with properties.
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
          gap: "30px" 
        }}>
          {jobs.map((job) => (
            <Link
              key={job.id}
              to={`/careers/${job.id}`}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                textDecoration: "none",
                color: "inherit",
                display: "block",
                transition: "all 0.3s ease",
                border: "1px solid #e5e7eb"
              }}
            >
              <h3 style={{ 
                fontSize: "1.5rem", 
                marginBottom: "15px",
                color: "#1f2937"
              }}>
                {job.title}
              </h3>
              <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
                <span style={{
                  background: "#dbeafe",
                  color: "#1e40af",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "0.875rem",
                  fontWeight: "500"
                }}>
                  {job.department}
                </span>
                <span style={{
                  background: "#dcfce7",
                  color: "#166534",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "0.875rem",
                  fontWeight: "500"
                }}>
                  {job.location}
                </span>
                <span style={{
                  background: "#fef3c7",
                  color: "#92400e",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "0.875rem",
                  fontWeight: "500"
                }}>
                  Full-time
                </span>
              </div>
              <div style={{ 
                color: "#3b82f6", 
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                View Details
                <span style={{ fontSize: "1.25rem" }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
