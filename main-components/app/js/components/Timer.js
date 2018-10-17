import React from 'react';

import { TimerHeader } from './Timer/TimerHeader';
import TimerButton from './Timer/TimerButton';

export default class Timer extends React.Component {
  constructor() {
    super()
    this.state = {
      time: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time += 1
      }))
    }, 1000)
  }

  render() {
    return (
      <div>
        <TimerHeader time={this.state.time} />
        <TimerButton handleClick={this.handleClick} />
      </div>
    )
  }
}
