import React from "react";
import IconMD from "../IconMD";
import Button from "../buttons/Button";

const CopySentenceButton = ({ onClick }) => (
  <Button
    onClick={onClick}
    backgroundColor={"#282c34"}
    color={"#ededed"}
    inverted
    style={{ borderWidth: 1 }}
  >
    <IconMD name="copy" size={1} style={{ fontSize: 18 }} />
  </Button>
);

export default CopySentenceButton;
