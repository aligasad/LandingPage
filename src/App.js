import { useEffect, useState } from "react";
import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Misc from "./components/Misc";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import freshTopicImg from "./assets/academy.png";
import freshTopic2Img from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";
import tempImg from "./assets/logo.png"

import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/sectionT.scss";
import "./styles/footer.scss";
import "./styles/misc.scss";
import "./styles/mediaQuery.scss";
import "./styles/quality.scss"
import "./styles/nomiddle.scss"
import "./styles/promise.scss"
import "./styles/introImg.scss"
import "./styles/LaunchBanner.scss"

import Section1 from "./components/Section1";
import Section2 from "./components/Works";
import Source from "./components/Source";
import Subscription from "./components/Subscription";
import NoMiddleman from "./components/NoMiddleman";
import Quality from "./components/Quality";
import Delivary from "./components/Delivary";
import WhyZaphira from "./components/WhyZaphira";
import LaunchOffer from "./components/LaunchOffer";
import IntroImage from "./components/IntroImage";
import LaunchBanner from "./components/LaunchBanner";


const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";

function App() {

  const [loading, setLoading] = useState(true);

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <IntroVideo />
      
      <Section />
      <LaunchOffer />
      <LaunchBanner />
      <Section1 />
      <Section2 />
      <Source />
      <Subscription />
      <NoMiddleman />
      <Quality />
      <Delivary />
      <WhyZaphira />
      <LaunchBanner />
      <Footer />
      <Misc />
    </>
  );
}

export default App;
