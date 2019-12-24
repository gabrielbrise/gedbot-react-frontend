import React from "react";

const Header = ({ title, subtitle }) => (
  <header>
    <h1 className="Montserrat ColorLime">
      <div className="Montserrat TextBold FS10x">{title}</div>
      <div className="Montserrat FS3x">{subtitle}</div>
    </h1>
  </header>
);

export default Header;
