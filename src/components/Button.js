import React from "react";
import styled from "styled-components";

const Button = ({
  color = "#282c34",
  backgroundColor = "#aaff67",
  children,
  onClick,
  className,
  style,
  inverted
}) => (
  <Container
    className={`Montserrat FS2x TextBold MH8 Pointer Flex JCCenter AICenter MV12 ${className}`}
    color={color}
    backgroundColor={backgroundColor}
    onClick={onClick}
    inverted={inverted}
    style={style}
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
