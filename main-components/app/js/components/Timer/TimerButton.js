import React from 'react';

export default class TimerButton extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <button onClick={this.props.handleClick}>Click to start</button>
    )
  }
}
