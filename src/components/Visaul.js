import React from "react";
import "../css/Main.scss";
import ReactPlayer from "react-player";

const Main = () => {
  return (
    <main>
      <div class="animated-title">
        <div class="track">
          <span>LUV FUME</span>
          <span>LUV FUME</span>
          <span>LUV FUME</span>
          <span>LUV FUME</span>
          <span>LUV FUME</span>
        </div>
      </div>
      <div class="animated-subtitle">
        <div class="track">
          <span>LEAVE A SCENT ON ALL MEMORIES </span>
          <span>LEAVE A SCENT ON ALL MEMORIES </span>
          <span>LEAVE A SCENT ON ALL MEMORIES </span>
        </div>
      </div>

      {/* <ReactPlayer
                auto="true"
                url='https://player.vimeo.com/video/604562148?h=96d0dbd70d' /> */}
      <div class="trxVdo">
        <iframe
          id="trxVdo01"
          src="https://player.vimeo.com/video/604562148?background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0&amp;muted=1&amp;autopause=false&amp;dnt=true"
          width="1920"
          height="865"
          frameborder="0"
          allow="autoplay; "
          title="40Sec"
          data-ready="true"
        ></iframe>
      </div>
      <div className="cover">
        <img
          src={process.env.PUBLIC_URL + "/assests/images/main_visual_image.png"}
          alt=""
        />
      </div>
    </main>
  );
};

export default Main;
