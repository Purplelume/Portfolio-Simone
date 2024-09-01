import React from "react";

const HomePage = () => {
  const images = [
    "assets/dragon_1.jpg",
    "assets/dragon_2.jpg",
    "assets/dragon_3.jpg",
    "assets/dragon_4.jpg",
    "assets/dragon_5.jpg",
    "assets/dragon_6.jpg",
    "assets/dragon_7.jpg",
    "assets/dragon_8.jpg",
    "assets/dragon_9.jpg",
    "assets/dragon_10.jpg",
  ];

  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': images.length }}>
        {images.map((image, index) => (
          <div className="item" style={{ '--position': index + 1 }} key={index}>
            <img src={image} alt={`Dragon ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* <div className="content">
        <h1 data-content="CSS ONLY">CSS ONLY</h1>
        <div className="author">
          <h2>LUN DEV</h2>
          <p><b>Web Design</b></p>
          <p>Subscribe to the channel to watch many interesting videos</p>
        </div>
        <div className="model"></div>
      </div> */}
    </div>
  );
};

export default HomePage;
