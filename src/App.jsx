import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Page } from "./pages/GenericPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/run-for-office" element={<Page title="Run for Office" />} />
        <Route path="/meetings-events" element={<Page title="Meetings & Events" />} />
        <Route path="/voter-info" element={<Page title="Voter Info" />} />
        <Route path="/donate" element={<Page title="Donate" />} />
        <Route path="/contact" element={<Page title="Contact Details" />} />
        <Route path="/indiana-democrats" element={<Page title="Indiana Democrats" />} />
      </Routes>
    </Router>
  );
}
