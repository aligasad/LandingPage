import { motion } from "framer-motion";
import promiseImg from "../assets/poster.png";

const IntroImage = () => {

  const imgOptions = {
    initial: { scale: 0.1, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { delay: 0.3 },
  };

  return (
    <section
      className="introImg"
      style={{ paddingTop: '11rem' }}
    >
      <div>

        {promiseImg && (
          <motion.div {...imgOptions}>
            <img
              src={promiseImg}
              style={{ width: '100%', marginTop: "1.5rem" }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default IntroImage;
