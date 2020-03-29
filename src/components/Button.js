import React, { useEffect } from "react";
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
  setFetching
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
      style={style}
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
  background-color: ${props => props.backgroundColor};
  border-radius: 30px;
  border: ${props =>
    `2px solid ${props.inverted ? props.color : props.backgroundColor}`};
  transition: all 0.2s ease;
  color: ${props => props.color};

  :hover {
    color: ${props => props.backgroundColor};
    background-color: ${props => props.color};
  }
`;
