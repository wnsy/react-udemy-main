import React from 'react';

export default class TimerButton extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.time > 5 ? 'Timer over 5' : 'Timer under 5'}</button>
    )
  }
}
