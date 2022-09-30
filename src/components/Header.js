import React, { useState } from "react";
import TopBanner from "./TopBanner";
import { Link, NavLink } from "react-router-dom";
import "../css/Header.scss";
import { NAVLINKL, NAVLINKR } from "../data/common";

const Header = ({}) => {
  const [togglePop, setTogglePop] = useState(false);
  return (
    <header className="Header">
      <TopBanner />
      <div className="lf_wrap inner">
        <h1>
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/assests/images/logo.png"}
              alt=""
            />
          </Link>
        </h1>
        <nav className="Gnb inner">
          <ul id="major">
            {NAVLINKL.map((it, idx) => {
              return (
                <li
                  key={it.id}
                  onClick={() => {
                    setTogglePop(false);
                  }}
                >
                  <NavLink to={it.link}>{it.menu}</NavLink>
                  <ul className="smenu">
                    {it.submenu.map((s_it, idx) => {
                      return (
                        <li key={s_it.id}>
                          <Link to={s_it.link}>{s_it.menu}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
