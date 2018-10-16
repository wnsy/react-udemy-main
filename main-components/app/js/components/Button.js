import React from 'react';

export default class Button extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <button onClick={this.props.changeName.bind(this)}>{this.props.firstName}</button>
    )
  }
}
