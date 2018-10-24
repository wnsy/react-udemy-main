import React from 'react';

export default class NameList extends React.Component {
  constructor() {
    super();
    this.state = {
      names: []
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
    console.log(event);
  }

  render() {
    let {names} = this.state //ES6 way. but same as var names = this.state.names
    console.log(names)
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <input type="text" />
          <input type="submit" />
        </form>
        {names.map((name) => <h3 key={name.id}><a href="#" onClick={this.handleClick}>{name.first_name}</a></h3>)}
      </div>
    )
  }
}
