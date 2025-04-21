import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
