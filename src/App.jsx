import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import ChatPiyush from "./ChatPiyush";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/ChatPiyush" element={<ChatPiyush />} />
      </Routes>
    </Router>
  );
}

export default App;
