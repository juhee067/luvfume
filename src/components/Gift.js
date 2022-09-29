import React from "react";
import "../css/Gift.scss";
import { Link } from "react-router-dom";
const NAVLINKL = [
  {
    id: 1,
    title: "HAND CREAM SET \n SLATE KEY & HAND CREAM",
    price: "35,000won",
    des: "러퓸만의 감성을 담은 프리미엄 핸드 크림 세트입니다",
    src: "../../public/assests/images/list01.jpg",
  },
  {
    id: 2,
    title: "HAND CARE SET\nSLATE KEY & HAND CREAM & HAND WASH",
    price: "64,000won",
    des: "러퓸만의 감성을 담은 프리미엄 핸드 케어 세트입니다.",
    src: "../../public/assests/images/list02.png",
  },
  {
    id: 3,
    title: "BODY CARE SET\nBODY WASH & BODY LOTION",
    price: "81,000won",
    des: "러퓸만의 감성을 담은 프리미엄 바디 케어 세트입니다.",
    src: "../../public/assests/images/list03.jpg",
  },
];
const Gift = () => {
  return (
    <section id="Gift" className="inner">
      <h2>GIFT SET</h2>

      <figure key={it.id}>
        <Link to={"/shopItem/" + it.id}>
          <div className="box">
            <img src={it.src} alt="" />
          </div>
          <div className="title">{it.title}</div>
          <div className="price">
            {" "}
            <span>{it.price.toLocaleString()}</span> 원
          </div>
          <div className="des">{it.des}</div>
        </Link>
      </figure>
    </section>
  );
};

export default Gift;
