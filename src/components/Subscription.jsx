import { motion } from "framer-motion";
import promiseImg from '../assets/subscription.png'; 

const data = {
  heading: "Subscriptions You'll Love (Monthly & Flexible)",
  subheading: "Skip the re-ordering grind. Pause/skip anytime.",
  points: [
    {
        heading: " Daily Essentials Box",
        content: "Fruits, vegetables, microgreens, herbs.",
    },
    {
        heading: "Family Fresh Box",
        content: "Weekly big basket for families (8-12 varieties + basics like onion, potato, tomato).",
    },
    {
        heading: "Wellness & Detox Box",
        content: "Leafy greens, sprouts, low-GI fruits, cold-pressed juices-nutritionist-curated.",
    },
    {
        heading: "Kids' Tiffin Box",
        content: "Snack-friendly fruits, baked goodies, and easy-to-pack portions.",
    },
    {
        heading: "Custom Pro (Chef/HoReCa)",
        content: "Bulk cuts, consistent specs, early-morning delivery windows, GST invoice.",
    },
  ],
  btn: "Subscription",
  imgSrc: promiseImg,
  imgSize: "40%",
  backgroundColor: "#D2B48C",
  headingColor: "#407903",
  textColor: "#395b4b",
  btnBgColor: "#ff2705",
  btnColor: "#20B2AA",
};

const Subscription = () => {
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
      className="section"
      style={{ backgroundColor: data.backgroundColor, width: '100%' }}
    >
      <div>
        <motion.h3
          style={{ color: data.headingColor, width: '100%' }}
          data-cursorpointer={true}
          {...headingOptions}
        >
          {data.heading}
        </motion.h3>
        <motion.h3
          style={{ color: '#008B8B', fontSize: '1.8rem', marginTop: '1rem', marginBottom: '1rem' }}
          data-cursorpointer={true}
          {...subHeadingOptions}
        >
          {data.subheading}
        </motion.h3>

        <motion.ul
          style={{ color: data.textColor, textAlign: "left", fontSize: "19px", fontFamily: "Montserrat, sans-serif", lineHeight: "1.9", margin: "0 auto", width: "100%" }}
          data-cursorpointer={true}
          {...listOptions}
        >
          {data.points.map((data, idx) => (
            <li key={idx} style={{ marginBottom: "0.02rem", fontSize: '1.1rem' }}>
              <span style={{fontWeight: 'bolder', color: 'black'}} data-cursorpointer={true}>{data.heading}: </span> <span style={{color: 'white'}} data-cursorpointer={true}>{data.content}</span>
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
              style={{ width: data.imgSize, marginTop: "1.5rem" }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Subscription;
