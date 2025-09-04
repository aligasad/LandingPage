import React, { useState } from "react";
import video from "../assets/heroVideo.mp4";
import poster from "../assets/poster.png";
import LaunchBanner from "./LaunchBanner";
import { transform } from "framer-motion";

const IntroVide = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    opacity: isHovered ? 1 : 0.3,
    transition: "opacity 0.5s ease-in-out",
    placeItems: "center",
  };

  return (
    <section className="intro">
      <video
        src={video}
        muted
        autoPlay
        loop
        playsInline
        controlsList="nodownload"
      ></video>

      <div
        className="poster-wrapper"
        style={{
          zIndex: "29",
          display: "flex",
          justifyContent: "center",
          placeItems: "center",
          transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
          transform: isHovered ? "scale(0.8)" : "scale(1)",
        }}
      >
        {/* <img
          src={poster}
          alt="poster"
          style={containerStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        /> */}

        <div
          style={containerStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* <h3 data-cursorpointer={true}> Zaphira Organic Farm (OPC) Pvt. Ltd.</h3> */}
        </div>
      </div>
    </section>
  );
};

export default IntroVide;
