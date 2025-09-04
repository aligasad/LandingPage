import React, { useEffect, useState } from "react";
import "../styles/LaunchBanner.scss";

const LaunchBanner = () => {
  const launchDate = new Date("2025-09-12T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <section className="launch-banner">
      {/* Left Side */}
      <div className="left" >
        <h3 className="side-title">
          <span>We are</span> Launching on
        </h3>

        <div className="date-card">
          <div>
            <span>DATE</span>
            <h2>10</h2>
          </div>
          <div>
            <span>MONTH</span>
            <h2>SEP</h2>
          </div>
          <div>
            <span>YEAR</span>
            <h2>2025</h2>
          </div>
        </div>

        <div className="countdown">
          <div><h2>{timeLeft.days}</h2><span>Days</span></div>
          <div><h2>{timeLeft.hours}</h2><span>Hours</span></div>
          <div><h2>{timeLeft.minutes}</h2><span>Minutes</span></div>
          <div><h2>{timeLeft.seconds}</h2><span>Seconds</span></div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right">
        <p className="soon">Live Soon <span className="underline"></span></p>
        <h1>Zaphira Organic Farm</h1>
        <h3 className="link">THEZAPHIRA.COM</h3>
        <p className="address">Near Krishi Bhawan, Hazrat Ganj</p>
        <p className="address1">Lucknow, UP.</p>
        
        <div className="contacts">
          <p>@office@thezaphira.com</p>
          <p>seo@thezaphira.com</p>
        </div>
        
        <p className="phone">+91-7518202507 <br /> <span className="phoneC">FOR MORE INFO</span></p>
      </div>
    </section>
  );
};

export default LaunchBanner;
