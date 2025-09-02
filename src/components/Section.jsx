import React from "react";
import { motion } from "framer-motion";
import SectionImg from '../assets/farmto.png'

const data = {
  heading: "From Farms to Your Home-No Middlemen. Only Trust.",
  text: "We're Zaphira: India's premium farm-to-home platform for truly fresh, honest, and ethically-sourced food. We buy directly from partner farms & artisanal producers, process with care, and deliver straight to your doorstep-so you get fresher produce, fair prices, and full traceability.",
  btn: "JOIN NOW",
  imgSrc: SectionImg,
  imgSize: "70%",
  backgroundColor: "#407903",
  headingColor: "#fff",
  textColor: "#fff",
  btnBgColor: "#fff",
  btnColor: "#20B2AA",
};

const Section = () => {
  const headingOptions = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  const textOptions = {
    ...headingOptions,
    transition: {
      delay: 0.3,
    },
  };
  const buttonOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };
  const imgOptions = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };

  return (
    <section
      className="sectionT"
      style={{
        backgroundColor: data.backgroundColor, width: '100%'
      }}
    >
      <div>
        <motion.h3
          style={{
            color: data.headingColor,
          }}
          data-cursorpointer={true}
          {...headingOptions}
        >
          {data.heading}
        </motion.h3>

        <motion.p
          style={{
            color: data.textColor,
          }}
          data-cursorpointer={true}
          {...textOptions}
        >
          {data.text}
        </motion.p>

        <motion.button
          style={{
            color: data.btnColor,
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
              src={SectionImg}
              alt="ImgSrc"
              style={{
                width: data.imgSize,
              }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Section;
