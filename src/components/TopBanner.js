import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { top_banner } from "../data/common";
import "../css/TopBanner.scss";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const TopBanner = () => {
  const topSlider = useRef(null);
  return (
    <div className="TopBanner">
      <Slider arrows={false} fade={true} autoplay={true} ref={topSlider}>
        {top_banner.map((it, idx) => {
          return (
            <div key={it.id}>
              <div>{it.content}</div>
            </div>
          );
        })}
      </Slider>
      <FiArrowLeft
        onClick={() => topSlider.current.slickPrev()}
        className="icon left"
      />
      <FiArrowRight
        onClick={() => topSlider.current.slickNext()}
        className="icon right"
      />
    </div>
  );
};

export default TopBanner;
