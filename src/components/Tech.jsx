import React from "react";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {


  const sliderSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 943,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 677,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center mb-7`}>
          Our Tech{" "}
        </h2>
      </motion.div>

      <Slider {...sliderSettings} className="mt-10 bg-blue-50">
      {/* <div className="flex flex-row flex-wrap justify-center gap-10 "> */}
        {technologies.map((technology) => (
          <div className="w-40 h-28 m-2" key={technology.name}>
            <BallCanvas icon={technology.icon} title={technology.title} />
            <p className={`${styles.sectionSubText} text-center `}>
              {technology.title}
            </p>
          </div>
        ))}
        </Slider>
      {/* </div> */}
    </>
  );
};

export default SectionWrapper(Tech, "");
