import React, { Component } from "react";
import styled from "styled-components";

export default class SmoothDropdown extends Component {
  ref = React.createRef();

  render = () => (
    <Container
      style={{ maxHeight: this.props.show ? this.ref.current.offsetHeight : 0 }}
    >
      {console.log("offsetHeight", this.ref)}
      <div ref={this.ref}>{this.props.children}</div>
    </Container>
  );
}

const Container = styled.div`
  transition: all 0.3s ease;
  overflow-y: hidden;
`;
