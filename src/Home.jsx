import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="home-container">
        <img src="/profile.png" alt="My Profile" className="profile-pic" />
        <h1>Or kya haal chal👋</h1>
        <p>Haan ji chai par charcha kare</p>
        <button className="chat-button" onClick={() => navigate("/chat")}>
          Chat with me Hitesh
        </button>
      </div>
      <div className="home-container">
        <img
          src="/4cfa97b3e1c9ce1a702c88e126edf90979f1cce0.jfif"
          alt="My Profile"
          className="profile-pic"
        />
        <h1>Kese ho aap log👋</h1>
        <p>Kyn confuse ho bhai aap</p>
        <button className="chat-button" onClick={() => navigate("/ChatPiyush")}>
          Chat with me piyush
        </button>
      </div>
    </div>
  );
}
