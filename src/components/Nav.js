import React from "react";

const Nav = ({ correct, incorrect }) => {
  return (
    <div className="Nav">
      <p>Correct:{correct}</p>
      <p>So Bad:{incorrect}</p>
    </div>
  );
};

export default Nav;
