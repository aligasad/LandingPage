import { motion } from "framer-motion";
import promiseImg from '../assets/quality.png'; 

const data = {
  heading: "Quality, Safety & Traceability",
  subheading: "",
  points: [
    {
        heading: "Multi-point QC",
        content: "Farm pre-checks → arrival grading → final pack audit.",
    },
    {
        heading: "Lab Tests (periodic)",
        content: "Pesticide residue, aflatoxin, microbial checks.",
    },
    {
        heading: "Sanitary Packing",
        content: "Food-grade, tamper-evident, minimal plastic.",
    },
    {
        heading: "Scan to Know",
        content: "QR shows farm, batch, pack date, and tips to store/cook.",
    },
  ],
  btn: "Subscription",
  imgSrc: promiseImg,
  imgSize: "40%",
  backgroundColor: "#db7093",
  headingColor: "#407903",
  textColor: "#395b4b",
  btnBgColor: "#DEB887",
  btnColor: "#20B2AA",
};

const Quality = () => {
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
      className="quality"
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
        <motion.h3
          style={{ color: '#008B8B', fontSize: '1.8rem', marginTop: '1rem', marginBottom: '1rem' }}
          data-cursorpointer={true}
          {...subHeadingOptions}
        >
          {data.subheading}
        </motion.h3>

        <motion.ul
          style={{ color: data.textColor, textAlign: "left", fontSize: "19px", fontFamily: "Montserrat, sans-serif", lineHeight: "1.9", margin: "0 auto", width: "90%" }}
          data-cursorpointer={true}
          {...listOptions}
        >
          {data.points.map((data, idx) => (
            <li key={idx} style={{ marginBottom: "1rem" }}>
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

export default Quality;
