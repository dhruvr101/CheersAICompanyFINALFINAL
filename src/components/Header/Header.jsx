import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/get-started",
    display: "Get Started",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>CheersAI</h2>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <Link to={item.path} className="menu__link">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <span className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
