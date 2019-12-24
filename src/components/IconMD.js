import React from "react";

const IconMD = ({ name, size }) => (
  <i className={`zmdi zmdi-${name} zmdi-hc-${getSize(size)}`}></i>
);

const getSize = size => {
  if (!size) return "ig";
  return String(size) + "x";
};

export default IconMD;
