import React from "react";
import { motion } from "framer-motion";
import promiseImg from '../assets/logo.png'; // Replace with your actual image path

const data = {
  heading: "How Zaphira Works",
  points: [
    {
        heading: "We Handpick Farms",
        content: "Verified for soil health, water safety, and responsible practices.",
    },
    {
        heading: "We Harvest to Order",
        content: "Minimal lag between harvest, wash, grade, and pack.",
    },
    {
        heading: "We Keep It Cold",
        content: "Temperature-controlled movement, zero break in the chain.",
    },
    {
        heading: "We Deliver Fast",
        content: "Routed via micro-hubs to reach you in minutes/hours-not days.",
    },
  ],
  btn: "How Zaphira Works",
  imgSrc: promiseImg,
  imgSize: "70%",
  backgroundColor: "#DB7093",
  headingColor: "#fff",
  textColor: "#fff",
  btnBgColor: "#DEB887",
  btnColor: "#20B2AA",
};

const Section2 = () => {
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
    <section
      className="section"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div>
        <motion.h3
          style={{ color: data.headingColor }}
          data-cursorpointer={true}
          {...headingOptions}
        >
          {data.heading}
        </motion.h3>

        <motion.ul
          style={{ color: data.textColor, textAlign: "left", fontSize: "19px", fontFamily: "Montserrat, sans-serif", lineHeight: "1.9", margin: "0 auto", width: "80%" }}
          data-cursorpointer={true}
          {...listOptions}
        >
          {data.points.map((data, idx) => (
            <li key={idx} style={{ marginBottom: "1rem" }}>
              <span style={{fontWeight: 'bolder', color: 'black'}}>{data.heading}: </span> <span>{data.content}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          style={{ color: data.textColor, fontSize: "16px", fontFamily: "Montserrat, sans-serif", marginTop: "1rem", opacity: 0.8 }}
          data-cursorpointer={true}
          {...listOptions}
        >
          {data.note}
        </motion.p>

        <motion.button
          style={{
            color: 'white',
            backgroundColor: data.btnBgColor,
          }}
          data-cursorpointer={true}
          {...buttonOptions}
        >
          {data.btn}
        </motion.button>

        {data.imgSrc && (
          <motion.div {...imgOptions}>
            <img
              src={data.imgSrc}
              alt="Our Promise"
              style={{ width: data.imgSize, marginTop: "2rem" }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Section2;
