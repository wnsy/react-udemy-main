import React from 'react';

export default class TimerButton extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.isStarted ? 'Start timer' : 'Stop timer'}</button>
    )
  }
}
