import React from 'react';

export default class NameList extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [],
      filterText: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.nameFilter = this.nameFilter.bind(this);
  }

  componentWillMount() {
    this.setState({
      names: this.props.names
    })
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      event: event.type
    })
  }

  nameFilter(event) {
    let newNames = this.state.names.filter((name) => {
      let fullName = `${name.first_name} ${name.last_name}`
      return fullName.toLowerCase().includes(event.target.value.toLowerCase());
    });
    //capture the input
    this.setState({
      names: newNames
    })
  }

  render() {
    let {names} = this.state; //ES6 way. but same as var names = this.state.names
    return (
      <div>
        <h2>{this.state.event}</h2>
        <input
          onChange={this.nameFilter}
          type="text"
        />
        {names.map((name) => <h3 key={name.id}><a href="#" onClick={this.handleClick}>{name.first_name}</a></h3>)}
      </div>
    )
  }
}
