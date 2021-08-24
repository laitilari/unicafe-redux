import React from "react";

const Button = ({ handleClick, type }) => (
  <button onClick={handleClick}>{type}</button>
);

export default Button;
