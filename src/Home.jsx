import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img
        src="./src/assets/11613311.png"
        alt="My Profile"
        className="profile-pic"
      />
      <h1>Or kya haal chal👋</h1>
      <p>Haan ji toh bat karne ke liye click kare</p>
      <button className="chat-button" onClick={() => navigate("/chat")}>
        💬 Chat with me
      </button>
    </div>
  );
}
