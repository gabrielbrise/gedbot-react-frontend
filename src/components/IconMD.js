import React from "react";
import classNames from "classnames";

const IconMD = ({ name, size, className, onClick, style }) => (
  <i
    className={classNames(
      `zmdi zmdi-${name} zmdi-hc-${getSize(size)}`,
      className
    )}
    style={style}
    onClick={onClick}
  ></i>
);

const getSize = size => {
  if (!size) return "ig";
  return String(size) + "x";
};

export default IconMD;
