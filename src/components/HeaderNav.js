import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { LinksContext } from "../store/context-links";

import logo from "../assets/shared/logo.svg";
import iconBurger from "../assets/shared/icon-hamburger.svg";
import closeIcon from "../assets/shared/icon-close.svg";
import "./Header.css";

const HeaderNav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidebar, setSidebar] = useState(false);
  const linksCtx = useContext(LinksContext);

  const links = (
    <ul className="links">
    <li>
      <NavLink
        to="/"
        className={(isActive) => (isActive ? "active" : '')}
      >
       <span>01</span>  Home
      </NavLink>
    </li>
      
      {linksCtx
        ? Object.keys(linksCtx).map((link, index) => (
            <li key={link}>
              <NavLink
                to={link}
                
                className={(isActive) => (isActive ? 'active': '')}
              >
                <span>{`0${index + 2}`}</span>
                {link}
              </NavLink>
            </li>
          ))
        : null}
    </ul>
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
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          {windowWidth && windowWidth < 368 ? (
            <div className="burgerIcon" onClick={showSidebarHandler}>
              <img src={iconBurger} alt="burgerIcon" />
            </div>
          ) : <>{links}</>}
        </nav>
      </header>
      <aside className={showSidebar ? "aside show-aside" : "aside"}>
        <button onClick={showSidebarHandler}>
          <img src={closeIcon} alt="X" />
        </button>
        {links}
      </aside>
    </>
  );
};

export default HeaderNav;
