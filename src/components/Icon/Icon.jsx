import React, { Component } from 'react';

class Icon extends Component {
  render() {
    const { props: { tag } } = this;

    return (
      <span className={`icon-${tag}`}></span>
    )
  }
};

export default Icon;