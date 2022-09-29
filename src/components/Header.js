import { useEffect, useRef, useState } from "react";
import TopBanner from "./TopBanner";

const NAVLINK = [
  { id: 1, menu: "SHOP", link: "/" },
  { id: 2, menu: "BRAND", link: "/" },
  { id: 3, menu: "CAMPAIGN", link: "/" },
  { id: 4, menu: "LOGIN", link: "/" },
  { id: 5, menu: "ACCOUNT", link: "/" },
];

const Header = () => {
  const [TG, setTG] = useState([false, false]);
  const HL = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let sct = window.scrollY;
      sct > 0
        ? HL.current.classList.add("on")
        : HL.current.classList.remove("on");
    });
  }, []);
  //const [TS, setTS] = useState(false);
  return (
    <header className="Header" ref={HL}>
      <TopBanner />
      <div className="hd_wrap">
        <h1>
          <a href="/">luvfume</a>
        </h1>
        <nav className="Gnb inner">
          <ul>
            {NAVLINK.map((it, idx) => {
              return (
                <li key={it.id}>
                  <a href={it.link}>{it.menu}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="top_service"></div>
      </div>
    </header>
  );
};

export default Header;
