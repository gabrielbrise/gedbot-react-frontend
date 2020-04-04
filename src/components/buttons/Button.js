import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const Button = ({
  color = "#282c34",
  backgroundColor = "#aaff67",
  children,
  onClick,
  className,
  style,
  inverted,
  captcha,
  setFetching,
}) => {
  return (
    <Container
      className={classNames(
        "Montserrat FS2x TextBold MH8 Pointer Flex JCCenter AICenter MV12",
        { "g-recaptcha": captcha },
        className
      )}
      color={color}
      backgroundColor={backgroundColor}
      onClick={captcha ? setFetching : onClick}
      inverted={inverted}
      style={{
        "--background-color": backgroundColor,
        "--color": color,
        "--border-color": inverted ? color : backgroundColor,
        ...style,
      }}
      data-sitekey={
        captcha ? process.env.REACT_APP_RECAPTCHA_SITE_KEY : undefined
      }
      data-callback={captcha ? "handleRecaptcha" : undefined}
    >
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  height: 32px;
  width: min-content;
  padding: 4px 12px;
  background-color: var(--background-color);
  border-radius: 30px;
  border: 2px solid var(--border-color);
  transition: all 0.2s ease;
  color: var(--color);

  :hover {
    color: var(--background-color);
    background-color: var(--color);
  }
`;
