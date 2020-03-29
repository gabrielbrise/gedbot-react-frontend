import React from "react";
import styled from "styled-components";

const Button = ({
  color = "#282c34",
  backgroundColor = "#aaff67",
  children,
  onClick,
  className,
  style,
  inverted,
  captcha
}) => (
  <Container
    className={`Montserrat FS2x TextBold MH8 Pointer Flex JCCenter AICenter MV12 ${
      captcha ? "g-recaptcha" : ""
    } ${className}`}
    color={color}
    backgroundColor={backgroundColor}
    onClick={captcha ? undefined : onClick}
    inverted={inverted}
    style={style}
    data-sitekey={
      captcha ? process.env.REACT_APP_RECAPTCHA_SITE_KEY : undefined
    }
    data-callback={captcha ? onClick : undefined}
  >
    {children}
  </Container>
);

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
