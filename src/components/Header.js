import React from "react";
import Logo from "./Logo";
import Button from "./Button";

function Header() {
  return (
    <nav className="header">
      <Logo />
      <ul className="header__menu">
        <li className="header__menu-items">We can help!</li>
        <li className="header__menu-items">About</li>
        <li className="header__menu-items">How to start</li>
        <li className="header__menu-items">Projects</li>
        <li className="header__menu-items">Contacts</li>
      </ul>
      <Button />

      <div className="header__hamburger">
        <span className="header__hamburger-bars"></span>
        <span className="header__hamburger-bars"></span>
      </div>
    </nav>
  );
}

export default Header;
