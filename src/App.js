import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import ImageGalleryTest from "./components/ImageGalleryTest";

// Simple Job Detail Page
const JobDetailPage = () => (
  <div style={{ minHeight: "calc(100vh - 200px)", padding: "80px 20px" }}>
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "30px" }}>Job Details</h1>
      <p style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>
        Detailed job description would appear here. This could include responsibilities,
        requirements, benefits, and application instructions.
      </p>
    </div>
  </div>
);

// Join Page Component
const JoinPage = () => (
  <div style={{ minHeight: "calc(100vh - 200px)", padding: "80px 20px" }}>
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "30px" }}>Join Our Community</h1>
      <p style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>
        Join our community to get updates on new properties, virtual tours, and real estate insights.
      </p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:jobId" element={<JobDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/test-images" element={<ImageGalleryTest />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
