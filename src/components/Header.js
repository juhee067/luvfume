
import TopBanner from "./TopBanner";
import { Link } from "react-router-dom";
import '../css/Header.scss'

const NAVLINKL = [
  { id: 1, menu: "SHOP", link: "/" },
  { id: 2, menu: "BRAND", link: "/" },
  { id: 3, menu: "CAMPAIGN", link: "/" },
];
const NAVLINKR = [
  { id: 1, menu: "LOGIN", link: "/" },
  { id: 2, menu: "ACCOUNT", link: "/" },
];

const Header = () => {

  return (
    <header className="Header">
      <TopBanner />
      <div className="lf_wrap inner">
        <h1>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + '/assests/images/logo.png'} alt="" />
          </Link>
        </h1>
        <nav className="Gnb inner">
          <ul>
            {NAVLINKL.map((it, idx) => {
              return (
                <li key={it.id}>
                  <a href={it.link}>{it.menu}</a>
                </li>
              );
            })}
          </ul>
          <ul>
            {NAVLINKR.map((it, idx) => {
              return (
                <li key={it.id}>
                  <a href={it.link}>{it.menu}</a>
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
