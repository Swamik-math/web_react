import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CareersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredJob, setHoveredJob] = useState(null);
  const sectionRef = useRef(null);

  // Job categories from reference website
  const jobCategories = [
    "All", "Engineering", "Research", "Design", "Product", "Marketing", "Business", "People"
  ];

  // Enhanced job data matching reference website structure
  const jobs = [
    {
      id: "software-engineer-backend",
      title: "Software Engineer - Backend",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $180,000",
      description: "Build scalable backend systems and APIs for our real estate platform.",
      requirements: ["Node.js/Python", "AWS/GCP", "PostgreSQL", "Redis", "Docker"],
      featured: true,
      urgent: false
    },
    {
      id: "software-engineer-frontend-ui",
      title: "Software Engineer - Frontend UI",
      department: "Engineering", 
      location: "Remote",
      type: "Full-time",
      salary: "$110,000 - $170,000",
      description: "Create beautiful, responsive user interfaces with modern React.",
      requirements: ["React", "TypeScript", "CSS/SCSS", "Figma", "REST APIs"],
      featured: true,
      urgent: true
    },
    {
      id: "product-manager",
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time", 
      salary: "$140,000 - $200,000",
      description: "Lead product strategy and development for our core platform.",
      requirements: ["5+ years PM experience", "Agile/Scrum", "Data analysis", "User research"],
      featured: true,
      urgent: false
    },
    {
      id: "research-scientist",
      title: "Research Scientist",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      salary: "$160,000 - $240,000",
      description: "Conduct cutting-edge AI/ML research for property recommendation systems.",
      requirements: ["PhD in CS/AI", "Publications", "TensorFlow/PyTorch", "NLP/CV"],
      featured: true,
      urgent: false
    },
    {
      id: "ai-tooling-engineer",
      title: "AI Tooling Engineer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130,000 - $190,000",
      description: "Build tools and infrastructure for AI model training and deployment.",
      requirements: ["Python", "MLOps", "Kubernetes", "CI/CD", "Monitoring"],
      featured: false,
      urgent: true
    },
    {
      id: "growth-marketer",
      title: "Growth Marketer",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $140,000",
      description: "Drive user acquisition and retention through data-driven marketing.",
      requirements: ["Digital marketing", "Analytics", "A/B testing", "SEO/SEM"],
      featured: false,
      urgent: false
    },
    {
      id: "product-designer",
      title: "Product Designer",
      department: "Design",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$100,000 - $150,000",
      description: "Design intuitive user experiences for property discovery and virtual tours.",
      requirements: ["Figma/Sketch", "User research", "Prototyping", "Design systems"],
      featured: false,
      urgent: false
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      department: "Research",
      location: "Remote",
      type: "Full-time",
      salary: "$130,000 - $190,000",
      description: "Analyze property data and build predictive models for market insights.",
      requirements: ["Python/R", "SQL", "Statistics", "Machine Learning", "Data visualization"],
      featured: false,
      urgent: true
    },
    {
      id: "business-development-executive",
      title: "Business Development Executive",
      department: "Business",
      location: "Multiple Locations",
      type: "Full-time",
      salary: "$100,000 - $160,000 + Commission",
      description: "Build partnerships with real estate agencies and property developers.",
      requirements: ["Sales experience", "Negotiation", "Market analysis", "Relationship building"],
      featured: false,
      urgent: false
    },
    {
      id: "recruiter-product-engineering",
      title: "Recruiter - Product & Engineering",
      department: "People",
      location: "Remote",
      type: "Full-time",
      salary: "$85,000 - $130,000",
      description: "Help us build an exceptional team by recruiting top tech talent.",
      requirements: ["Tech recruiting", "Sourcing", "Interviewing", "Employer branding"],
      featured: false,
      urgent: false
    },
    {
      id: "software-engineer-ios",
      title: "Software Engineer - iOS",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$115,000 - $175,000",
      description: "Develop our mobile app for property discovery on iOS devices.",
      requirements: ["Swift", "UIKit", "XCTest", "CI/CD", "App Store"],
      featured: false,
      urgent: true
    },
    {
      id: "distributed-systems-engineer",
      title: "Distributed Systems Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$150,000 - $220,000",
      description: "Design and build scalable distributed systems for global property data.",
      requirements: ["Go/Rust", "Distributed systems", "Database design", "Performance optimization"],
      featured: true,
      urgent: false
    }
  ];

  // Scroll animation trigger
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

  // Filter jobs based on category and search
  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === "All" || job.department === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Get unique departments for stats
  const departments = [...new Set(jobs.map(job => job.department))];
  const featuredJobs = jobs.filter(job => job.featured);
  const urgentJobs = jobs.filter(job => job.urgent);

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
        
        {/* Hero Section with Animation */}
        <div style={{
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
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 10px rgba(59, 130, 246, 0.1)"
          }}>
            Build the Future with Us
          </h1>
          <p style={{
            fontSize: "1.25rem",
            color: "#6b7280",
            marginBottom: "40px",
            maxWidth: "800px",
            lineHeight: "1.7"
          }}>
            We're transforming how people discover and experience properties through 
            innovative technology. Join our team of passionate engineers, designers, 
            and visionaries.
          </p>

          {/* Stats Bar */}
          <div style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            marginBottom: "40px"
          }}>
            <div style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              flex: "1",
              minWidth: "200px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s"
            }}>
              <div style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#3b82f6",
                marginBottom: "10px"
              }}>
                {jobs.length}+
              </div>
              <div style={{ color: "#6b7280", fontSize: "1rem" }}>
                Open Positions
              </div>
            </div>
            <div style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              flex: "1",
              minWidth: "200px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s"
            }}>
              <div style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#10b981",
                marginBottom: "10px"
              }}>
                {departments.length}
              </div>
              <div style={{ color: "#6b7280", fontSize: "1rem" }}>
                Departments
              </div>
            </div>
            <div style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              flex: "1",
              minWidth: "200px",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s"
            }}>
              <div style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#f59e0b",
                marginBottom: "10px"
              }}>
                {urgentJobs.length}
              </div>
              <div style={{ color: "#6b7280", fontSize: "1rem" }}>
                Urgent Roles
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div style={{
          marginBottom: "50px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s"
        }}>
          {/* Search Bar */}
          <div style={{
            position: "relative",
            marginBottom: "30px",
            maxWidth: "600px"
          }}>
            <input
              type="text"
              placeholder="Search jobs by title, skills, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "18px 24px 18px 50px",
                borderRadius: "12px",
                border: "2px solid #e5e7eb",
                fontSize: "1.1rem",
                background: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
              onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
            />
            <span style={{
              position: "absolute",
              left: "18px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "1.25rem",
              color: "#9ca3af"
            }}>
              🔍
            </span>
          </div>

          {/* Category Filter */}
          <div style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "20px"
          }}>
            {jobCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: "12px 24px",
                  borderRadius: "30px",
                  border: "none",
                  background: selectedCategory === category 
                    ? "linear-gradient(90deg, #3b82f6, #6366f1)" 
                    : "white",
                  color: selectedCategory === category ? "white" : "#6b7280",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: selectedCategory === category 
                    ? "0 6px 20px rgba(59, 130, 246, 0.3)" 
                    : "0 2px 8px rgba(0,0,0,0.08)",
                  transform: selectedCategory === category ? "scale(1.05)" : "scale(1)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? (selectedCategory === category ? "scale(1.05)" : "scale(1)")
                    : "translateY(20px)",
                  animationDelay: `${0.7 + index * 0.05}s`
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.12)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Job Results Counter */}
        <div style={{
          marginBottom: "30px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.5s ease-out 0.8s, transform 0.5s ease-out 0.8s"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px"
          }}>
            <h2 style={{
              fontSize: "1.75rem",
              color: "#1f2937",
              fontWeight: "600"
            }}>
              {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"} Found
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </h2>
            {searchTerm && (
              <div style={{
                background: "#f3f4f6",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                color: "#6b7280"
              }}>
                Search: "{searchTerm}"
              </div>
            )}
          </div>
        </div>

        {/* Featured Jobs Banner */}
        {featuredJobs.length > 0 && selectedCategory === "All" && !searchTerm && (
          <div style={{
            background: "linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
            padding: "25px",
            borderRadius: "16px",
            marginBottom: "40px",
            borderLeft: "5px solid #3b82f6",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.5s ease-out 0.9s, transform 0.5s ease-out 0.9s",
            animation: "pulse 3s infinite"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "10px"
            }}>
              <span style={{
                background: "#3b82f6",
                color: "white",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "0.9rem",
                fontWeight: "bold"
              }}>
                🔥 FEATURED
              </span>
              <h3 style={{
                fontSize: "1.3rem",
                color: "#1f2937",
                fontWeight: "600"
              }}>
                Top Priority Roles - Apply Now!
              </h3>
            </div>
            <p style={{ color: "#6b7280", fontSize: "1rem" }}>
              These roles are critical to our mission and come with accelerated hiring processes.
            </p>
          </div>
        )}

        {/* Jobs Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          gap: "30px",
          marginBottom: "80px"
        }}>
          {filteredJobs.map((job, index) => (
            <Link
              key={job.id}
              to={`/careers/${job.id}`}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                textDecoration: "none",
                color: "inherit",
                display: "block",
                border: "2px solid transparent",
                position: "relative",
                overflow: "hidden",
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? (hoveredJob === job.id ? "translateY(-10px)" : "translateY(0)")
                  : "translateY(40px)",
                transition: `opacity 0.6s ease-out ${1 + index * 0.1}s, 
                           transform 0.6s ease-out ${1 + index * 0.1}s,
                           all 0.3s ease`,
                animation: hoveredJob === job.id ? "jobHover 0.3s forwards" : "none"
              }}
              onMouseEnter={() => setHoveredJob(job.id)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              {/* Urgent Badge */}
              {job.urgent && (
                <div style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "linear-gradient(90deg, #ef4444, #dc2626)",
                  color: "white",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  animation: "pulse 1.5s infinite",
                  zIndex: 1
                }}>
                  ⚡ URGENT
                </div>
              )}

              {/* Featured Badge */}
              {job.featured && (
                <div style={{
                  position: "absolute",
                  top: job.urgent ? "45px" : "15px",
                  right: "15px",
                  background: "linear-gradient(90deg, #f59e0b, #d97706)",
                  color: "white",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  zIndex: 1
                }}>
                  ⭐ FEATURED
                </div>
              )}

              {/* Hover Effect Overlay */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.03), rgba(139, 92, 246, 0.03))",
                opacity: hoveredJob === job.id ? 1 : 0,
                transition: "opacity 0.3s ease",
                zIndex: 0
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Job Title */}
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                  color: "#1f2937",
                  fontWeight: "600",
                  paddingRight: job.featured || job.urgent ? "100px" : "0",
                  transition: "color 0.3s ease"
                }}>
                  {job.title}
                </h3>

                {/* Job Description */}
                <p style={{
                  color: "#6b7280",
                  marginBottom: "25px",
                  lineHeight: "1.6",
                  fontSize: "1rem",
                  minHeight: "48px"
                }}>
                  {job.description}
                </p>

                {/* Tags */}
                <div style={{ 
                  display: "flex", 
                  gap: "10px", 
                  marginBottom: "25px", 
                  flexWrap: "wrap" 
                }}>
                  <span style={{
                    background: "#dbeafe",
                    color: "#1e40af",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease"
                  }}>
                    {job.department}
                  </span>
                  <span style={{
                    background: "#dcfce7",
                    color: "#166534",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease"
                  }}>
                    {job.location}
                  </span>
                  <span style={{
                    background: "#fef3c7",
                    color: "#92400e",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease"
                  }}>
                    {job.type}
                  </span>
                </div>

                {/* Salary and Requirements */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                  paddingTop: "20px",
                  borderTop: "1px solid #e5e7eb"
                }}>
                  <div style={{ color: "#059669", fontWeight: "bold", fontSize: "1.1rem" }}>
                    {job.salary}
                  </div>
                  <div style={{
                    color: "#3b82f6",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.3s ease"
                  }}>
                    View Details
                    <span style={{ 
                      fontSize: "1.25rem",
                      transform: hoveredJob === job.id ? "translateX(5px)" : "translateX(0)",
                      transition: "transform 0.3s ease"
                    }}>
                      →
                    </span>
                  </div>
                </div>

                {/* Skills Preview */}
                <div style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginTop: "20px"
                }}>
                  {job.requirements.slice(0, 3).map((skill, i) => (
                    <span key={i} style={{
                      background: "#f3f4f6",
                      color: "#4b5563",
                      padding: "6px 12px",
                      borderRadius: "12px",
                      fontSize: "0.8rem",
                      transition: "all 0.3s ease"
                    }}>
                      {skill}
                    </span>
                  ))}
                  {job.requirements.length > 3 && (
                    <span style={{
                      background: "#f3f4f6",
                      color: "#4b5563",
                      padding: "6px 12px",
                      borderRadius: "12px",
                      fontSize: "0.8rem"
                    }}>
                      +{job.requirements.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "80px 20px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease-out 1s, transform 0.6s ease-out 1s"
          }}>
            <div style={{
              fontSize: "4rem",
              marginBottom: "20px",
              color: "#d1d5db"
            }}>
              🔍
            </div>
            <h3 style={{
              fontSize: "1.8rem",
              marginBottom: "15px",
              color: "#1f2937"
            }}>
              No jobs found
            </h3>
            <p style={{
              color: "#6b7280",
              marginBottom: "30px",
              fontSize: "1.1rem"
            }}>
              {searchTerm 
                ? `No jobs match "${searchTerm}"${selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}`
                : `No jobs available${selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}`}
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              style={{
                background: "#3b82f6",
                color: "white",
                padding: "12px 28px",
                borderRadius: "10px",
                border: "none",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
            >
              View All Jobs
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div style={{
          textAlign: "center",
          padding: "60px 20px",
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))",
          borderRadius: "24px",
          marginTop: "60px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.6s ease-out 1.2s, transform 0.6s ease-out 1.2s"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            color: "#1f2937",
            fontWeight: "bold"
          }}>
            Don't See the Perfect Role?
          </h2>
          <p style={{
            fontSize: "1.125rem",
            color: "#6b7280",
            marginBottom: "30px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.7"
          }}>
            We're always looking for talented people. Send us your resume and 
            we'll contact you when a suitable position opens up.
          </p>
          <button style={{
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
            color: "white",
            padding: "16px 36px",
            borderRadius: "12px",
            border: "none",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
            transition: "all 0.3s ease",
            animation: "pulse 2s infinite"
          }}
          onMouseEnter={(e) => e.target.style.transform = "translateY(-3px) scale(1.05)"}
          onMouseOut={(e) => e.target.style.transform = "translateY(0) scale(1)"}
          >
            Submit General Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
