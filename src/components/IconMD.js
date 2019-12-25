import React from "react";
import classNames from "classnames";

const IconMD = ({ name, size, className }) => (
  <i
    className={classNames(
      `zmdi zmdi-${name} zmdi-hc-${getSize(size)}`,
      className
    )}
  ></i>
);

const getSize = size => {
  if (!size) return "ig";
  return String(size) + "x";
};

export default IconMD;
