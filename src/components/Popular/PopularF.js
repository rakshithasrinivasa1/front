import React from "react";
import "./PopularF.css";

const services = [
  { title: "React Developer", img: "/img/react.png" },
  { title: "Android Developer", img: "/img/android.png" },
  { title: "Website Developer", img: "/img/website.png" },
  { title: "Wix/WordPress Workflow", img: "/img/wix_wordpress.png" },
  { title: "Flutter Developer", img: "/img/flutter.png" },
  { title: "iOS Developer", img: "/img/ios.png" },
  { title: "Figma Designer", img: "/img/figma.png" },
  { title: "Artificial Intelligence", img: "/img/Artificial.png" },
  { title: "Logo Design", img: "/img/logo.png" },
  { title: "Blockchain", img: "/img/block.png" },
  { title: "Dotnet developers", img: "/img/dotnet.png" },
  { title: "User Testing Q/A and Review", img: "/img/user.png" },
];

// const whatsNew = [
//   { img: "/img/Zero_commission.png", title: "Zero Commissio Free", description: "Keep 100% of your earnings" },
//   { img: "/img/less_saturation.png", title: "Less Market Saturation", description: "Low Computation, early birds get the grain!" },
//   { img: "/img/fast_payment.png", title: "Faster Payment Processing", description: "Get your money in a swoosh!" },
//   { img: "/img/Global_research.png", title: "Global Reach", description: "End-to-end encrypted, we value your privacy" },
//   { img: "/img/client_pic.png", title: "100% Private Client Chats", description: "Description of Feature 5" },
//   { img: "/img/Save_time.png", title: "Save Time & Money", description: "Let out team help you get started with clients" },
// ];

const PopularF = () => {
  return (
    <div className="popular-services">
      <h2 className="services-title">Popular Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <img src={service.img} alt={service.title} className="service-image" />
          </div>
        ))}
      </div>
      {/* Blue Box */}
      <div className="blue-box">
        <div className="box-column">
          <p>$300 - $8,000</p>
          <p>Average Monthly</p>
          <p>Earnings</p>
        </div>
        <div className="box-column">
          <p>470+</p>
          <p>Projects Delivered</p>
          <p>Pre-release</p>
        </div>
        <div className="box-column">
          <p>$170K+</p>
          <p>Paid to freelancers at</p>
          <p>0% commission</p>
        </div>
        <div className="box-column">
          <p>50+</p>
          <p>Skills to choose from</p>
        </div>
      </div>
      {/* What's New Section */}
      {/* <h2 className="whats-new-title">What's New?</h2>
      <div className="whats-new-container">
        {whatsNew.map((item, index) => (
          <div key={index} className="whats-new-card">
            <img src={item.img} alt={item.title} className="whats-new-image" />
            <p className="whats-new-title-bold">{item.title}</p>
            <p className="whats-new-description">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="payment-box">
  <div className="payment-column">
    <p className="payment-title">Payment Partners</p>
    <p className="payment-description">Accepted in more than 160+ countries</p>
  </div>
  <div className="payment-column">
    <img src="/img/P_logo.png" alt="Payment Partner 1" className="payment-image" />
  </div>
  <div className="payment-column">
    <img src="/img/stripe_logo.png" alt="Payment Partner 2" className="payment-image" />
  </div>
  <div className="payment-column">
    <img src="/img/payoneer.png" alt="Payment Partner 3" className="payment-image" />
  </div>
</div>

<div className="new-blue-box">
  <div className="new-box-column">
    <img src="/img/one_lakh.png" alt="Feature Image1" className="new-box-image" />
  </div>
  
  <div className="new-box-card">
    <p className="new-box-paragraph">With Zlance You Lose</p>
    <p className="new-box-highlight">$0</p>
    <p className="new-box-paragraph">0% COMMISSION FEE</p>
  </div>
  
  <div className="new-box-card">
    <p className="new-box-paragraph">WITH OTHER PLATFORMS YOU LOSE</p>
    <p className="new-box-highlight">$20,000</p>
    <p className="new-box-paragraph">20% COMMISSION FEE</p>
  </div>
</div>

<div className="light-blue-background">
  <img src="/img/Indian_freelancer_logo.png" alt="Image1" className="light-blue-image" />
</div> */}

</div>
  );
};

export default PopularF;