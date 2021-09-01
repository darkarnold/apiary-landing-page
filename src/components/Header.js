import React, { useState } from "react";
import logoY from "../images/logo-y.svg";
import logoPracticum from "../images/logo-practicum.png";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__content-wrapper">
        <div className="logo">
          <img src={logoY} alt="Yandex logo" className="logo__yandex" />
          <img
            src={logoPracticum}
            alt="Practicum logo"
            className="logo__practicum"
          />
        </div>
        <button
          className="button__hamburger"
          onClick={() => setOpen(!open)}
        ></button>
        <nav>
          <ul className="header__menu">
            <li className="header__menu-items">We can help!</li>
            <li className="header__menu-items">About</li>
            <li className="header__menu-items">How to start</li>
            <li className="header__menu-items">Projects</li>
            <li className="header__menu-items">Contacts</li>
          </ul>
        </nav>
        <button className="button">Delegate a task</button>
      </div>
    </header>
  );
}

export default Header;
