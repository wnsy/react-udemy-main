import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h4>Welcome to test site, {this.props.firstName}</h4>
        <h4>{this.props.lastName}</h4>
      </div>
    )
  }
}

Welcome.propTypes = {
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string
}
