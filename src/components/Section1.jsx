import React from "react";
import { motion } from "framer-motion";
import promiseImg from '../assets/promise.png';
import "../components/stylesS/section1.css";

const data = {
  heading: "Our Promise",
  points: [
    {
      heading: "Direct Procurement",
      content: "100% middleman-free supply chain."
    },
    {
      heading: "Traceable Quality",
      content: "Scan a QR on every pack to see farm source, batch, and date."
    },
    {
      heading: "Cold-Chain Care",
      content: "Chilled from harvest to handover for peak nutrition & taste."
    },
    {
      heading: "Fair to Farmers",
      content: "Better prices, predictable demand, and long-term partnerships."
    },
    {
      heading: "Fast Delivery",
      content: " 15-minute zones in select areas, same-day citywide, next-day nationwide*."
    },
  ],
  note: "*Availability varies by location; check your pincode at checkout.",
  btn: "JOIN NOW",
  imgSrc: promiseImg,
};

const Section1 = () => {
  const headingOptions = {
    initial: { y: "-100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };

  const listOptions = {
    initial: { y: "-100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { delay: 0.3 },
  };

  const buttonOptions = {
    initial: { y: "100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { delay: 0.3, ease: "easeIn" },
  };

  const imgOptions = {
    initial: { scale: 0.1, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { delay: 0.3 },
  };

  return (
    <section className="section1">
      <div className="section1-content">
        <motion.h3
          className="section1-heading"
          data-cursorpointer={true}
          {...headingOptions}
        >
          {data.heading}
        </motion.h3>

        <motion.ul
          className="section1-list"
          data-cursorpointer={true}
          {...listOptions}
        >
          {data.points.map((obj, idx) => (
            <li key={idx}>
              <span style={{fontWeight: 'bolder', color: 'black'}}>{obj.heading}:</span> <span>{obj.content}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          className="section1-note"
          data-cursorpointer={true}
          {...listOptions}
        >
          {data.note}
        </motion.p>

        <motion.button
          className="section1-btn"
          data-cursorpointer={true}
          {...buttonOptions}
        >
          {data.btn}
        </motion.button>

        {data.imgSrc && (
          <motion.div {...imgOptions}>
            <img
              src={promiseImg}
              alt="Our Promise"
              className="section1-img"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Section1;
