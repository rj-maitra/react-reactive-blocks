import React, { Component } from 'react';
import SubContents from './SubContents';

class Alpha extends Component {
  // componentDidMount = () => {
  //   alert("Utilizing componentDidMount to alert you that Alpha is here!");
  // }
  render() {
    return (
      <div style={{
        backgroundColor: "#e06666", 
        height: "500px", 
        display: "inline-block",
        width: "720px",
        verticalAlign: "top",
        paddingLeft: "20px"
      }}>
      <SubContents />
      <SubContents />
      </div>
    );
  }
}

export default Alpha;