import { motion } from "framer-motion";
import promiseImg from "../assets/promise.png";

const data = {
  heading: "Our Promise",
  points: [
    {
      heading: "Direct Procurement",
      content: "100% middleman-free supply chain.",
    },
    {
      heading: "Traceable Quality",
      content: "Scan a QR on every pack to see farm source, batch, and date.",
    },
    {
      heading: "Cold-Chain Care",
      content: "Chilled from harvest to handover for peak nutrition & taste.",
    },
    {
      heading: "Fair to Farmers",
      content: "Better prices, predictable demand, and long-term partnerships.",
    },
    {
      heading: "Fast Delivery",
      content:
        " 15-minute zones in select areas, same-day citywide, next-day nationwide*.",
    },
  ],
  note: "*Availability varies by location; check your pincode at checkout.",
  btn: "JOIN NOW",
  imgSrc: promiseImg,
  imgSize: "60%",
  backgroundColor: "#D2B48C",
  headingColor: "#407903",
  textColor: "#395b4b",
  btnBgColor: "#ff2705",
  btnColor: "#20B2AA",
};

const Section1 = () => {
  const headingOptions = {
    initial: { y: "-100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };
  const subHeadingOptions = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { delay: 0.8, ease: "easeIn" },
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
      className="promise"
      style={{ backgroundColor: data.backgroundColor, width: '100%' }}
    >
      <div>
        <motion.h3
          style={{ color: data.headingColor, width: "100%" }}
          data-cursorpointer={true}
          {...headingOptions}
        >
          {data.heading}
        </motion.h3>
        <motion.h3
          style={{
            color: "#008B8B",
            fontSize: "1.8rem",
          }}
          data-cursorpointer={true}
          {...subHeadingOptions}
        >
          {data.subheading}
        </motion.h3>

        <motion.ul
          style={{
            color: data.textColor,
            textAlign: "left",
            fontSize: "19px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.9",
            margin: "0 auto",
            width: "100%",
          }}
          // data-cursorpointer={true}
          {...listOptions}
        >
          {data.points.map((data, idx) => (
            <li
              key={idx}
              
              style={{ marginBottom: "0.02rem", fontSize: "1.1rem" }}
              
            >
              <span style={{ fontWeight: "bolder", color: "black" }} data-cursorpointer={true}>
                {data.heading}:{" "}
              </span>{" "}
              <span style={{ color: "white" }} data-cursorpointer={true}>{data.content}</span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          style={{
            color: data.textColor,
            fontFamily: "Montserrat, sans-serif",
            marginTop: "1rem",
            opacity: 0.8,
          }}
          data-cursorpointer={true}
          {...listOptions}
        >
          {data.note}
        </motion.p>

        <motion.button
          style={{
            color: "white",
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
              style={{ width: data.imgSize, marginTop: "1.5rem" }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Section1;
