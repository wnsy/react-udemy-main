import React from 'react';

export default class NameList extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [],
      event: 'no event detected'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      names: this.props.names
    })
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      // read-only property returns a string containing the event's type.
      // It is set when the event is constructed and is the name commonly used
      // to refer to the specific event
      event: event.type
    })
  }

  render() {
    let {names} = this.state //ES6 way. but same as var names = this.state.names
    console.log(names)
    return (
      <div>
        <h2>{this.state.event}</h2>
        <input
          onChange={this.handleClick}
          onFocus={this.handleClick}
          onBlur={this.handleClick}
          onKeyPress={this.handleClick}
          type="text"
        />
        {names.map((name) => <h3 key={name.id}><a href="#" onClick={this.handleClick}>{name.first_name}</a></h3>)}
      </div>
    )
  }
}
