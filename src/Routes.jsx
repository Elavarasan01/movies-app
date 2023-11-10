import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const Writeonmedium = React.lazy(() => import("pages/Writeonmedium"));
const BlogPage = React.lazy(() => import("pages/BlogPage"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<BlogPage />} />
          <Route path="/feedback" element={<Writeonmedium />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
