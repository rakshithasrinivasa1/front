import React from "react";
import { useNavigate } from "react-router-dom";
import PopularF from "../Popular/PopularF";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleFreelanceClick = () => {
    navigate("/freelance");
  };

  const handleClientClick = () => {
    navigate("/client");
  };

  return (
    <div className="home-container">
      {/* Flex container for content and image */}
      <div className="home-flex-container">
        <div className="content-section">
          <div className="button-group">
            <button className="freelance-client-btn" onClick={handleFreelanceClick}>
              Freelance
            </button>
            <button className="freelance-client-btn" onClick={handleClientClick}>
              Client
            </button>
          </div>
          <h1 className="welcome-text">
            Welcome to <span>Zlanze</span>
          </h1>
          <h3 className="commission-text">Commission is a thing of past!</h3>
          <button className="register-btn" onClick={() => navigate("/register")}>
            Register Now
          </button>
          <p className="small-text">Freelance at 0% commission</p>
        </div>

        <div className="image-section">
          <img src="/img/images.png" alt="Beautiful View" className="home-image" />
        </div>
      </div>

      {/* Popular Services Section */}
      <div className="popular-services-container">
        <PopularF />
      </div>
    </div>
  );
};

export default Home;