import React from "react";
import logoY from "../images/logo-y.svg";
import logoPracticum from "../images/logo-practicum.png";
function Logo() {
  return (
    <div className="logo">
      <img src={logoY} alt="Yandex logo" className="logo__yandex" />
      <img
        src={logoPracticum}
        alt="Practicum logo"
        className="logo__practicum"
      />
    </div>
  );
}

export default Logo;
