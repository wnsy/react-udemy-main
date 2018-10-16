import React from 'react';

export default class NameList extends React.Component {
  nameMapper(nameArray) {
    return nameArray.map((name, i) =>
      <li key={i}>{name}</li>
    )
  }

  render() {
    const nameArray = ["Joe", "Doe", "Jane", "Judy"];
      return (
        <div>
          <Welcome firstName="Chloe" lastName="Hayward" />
          <ul>
            {this.nameMapper(nameArray)}
          </ul>
          <Welcome firstName="Chloe" lastName="Hayward" />
        </div>
      )
  }
}

const Welcome = ((props) => {
  return (
    <div>
      <h4>Welcome to test site, {props.firstName}</h4>
      <h4>{props.lastName}</h4>
    </div>
  )
})
