import React, { Component } from "react";
import IconMD from "./IconMD";
import SmoothDropdown from "./SmoothDropdown";
import styled from "styled-components";
import classNames from "classnames";

export default class DropdownSection extends Component {
  state = {
    show: false
  };

  toggleShow = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <Container className="PB24 Flex FlexColumn AICenter">
        <div
          className="Flex FlexRow AICenter ColorLime Pointer"
          onClick={this.toggleShow}
        >
          <h2 className="Uppercase FS2x PR12 TextBold Montserrat">
            {this.props.title}
          </h2>
          <IconMD
            name="chevron-down"
            size={2}
            className={classNames({ Show: this.state.show })}
          />
        </div>
        <SmoothDropdown
          show={this.state.show}
          className="Flex FlexColumn AICenter PT12"
        >
          {this.props.children}
        </SmoothDropdown>
      </Container>
    );
  }
}

const Container = styled.div`
  i {
    transition: all 0.2s ease;
    &.Show {
      transform: rotateX(180deg);
    }
  }
`;
