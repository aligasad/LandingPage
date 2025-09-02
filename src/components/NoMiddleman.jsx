import { motion } from "framer-motion";
import promiseImg from "../assets/noMiddleman.png";

const data = {
  heading: "No-Middlemen Manifesto",
  subheading: "Skip the re-ordering grind. Pause/skip anytime.",
  points: [
    "We contract directly with farmers & co-ops",
    "Transparent pricing and predictable offtake",
    "Input support, training, and agronomy guidance",
    "Bonus payouts for quality & consistency",
  ],
  btn: "No-Middleman Manifesto",
  imgSize: "60%",
  imgSrc: promiseImg,
  backgroundColor: "#407903",
  headingColor: "#d2b48c",
  textColor: "#395b4b",
  btnBgColor: "#db7093",
  btnColor: "#db7093",
};

const NoMiddleman = () => {
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
      className="nomiddle"
      style={{ backgroundColor: data.backgroundColor, width: '100%' }}
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
          style={{
            color: 'white',
            textAlign: "left",
            fontSize: "19px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.9",
            margin: "0 auto",
            width: "60%",
          }}
          data-cursorpointer={true}
          {...listOptions}
        >
          {data.points.map((option, idx) => (
            <li key={idx} style={{ marginBottom: "1rem" }}>
              {
                idx % 2 !== 0 ? <span style={{color: '#d2b48c'}} data-cursorpointer={true}>{option}</span> : <span data-cursorpointer={true}>{option}</span>
              }
            </li>
          ))}
        </motion.ul>

        <motion.p
          style={{
            color: data.textColor,
            fontSize: "16px",
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

export default NoMiddleman;
