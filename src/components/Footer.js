import React from "react";

const Footer = ({ clickTrue, clickFalse }) => {
  return (
    <div className="footer">
      <button onClick={clickTrue} className="btn">True</button>
      <button onClick={clickFalse} className="btn"> Wellll???</button>
    </div>
  );
};

export default Footer;
