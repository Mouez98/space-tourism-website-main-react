import React, { useEffect, useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { LinksContext } from "../store/context-links";

import logo from "../assets/shared/logo.svg";
import iconBurger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";

const HeaderNav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidebar, setSidebar] = useState(false);
  const linksCtx = useContext(LinksContext);

  const links = (
    <>
      
      <Link to="/">01 Home</Link>
      {linksCtx
        ? Object.keys(linksCtx).map((link, index) => (
            <Link to={link} key={link}>
              {`0${index + 2}`} {link}
            </Link>
          ))
        : null}
    </>
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const showSidebarHandler = () => setSidebar((prev) => !prev);
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          {windowWidth && windowWidth < 368 ? (
            <div className="burgerIcon" onClick={showSidebarHandler}>
              <img src={iconBurger} alt="burgerIcon" />
            </div>
          ) : (
            <ul>{links}</ul>
          )}
        </nav>
      </header>
      <aside className={showSidebar ? "aside show-aside" : "aside"}>
        <button onClick={showSidebarHandler}>
          <img src={closeIcon} alt="X" />
        </button>
        <ul className="links">{links}</ul>
      </aside>
    </>
  );
};

export default HeaderNav;
