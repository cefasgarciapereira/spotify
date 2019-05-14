import React from 'react';
import '../assets/css/green-button.css'

export default class GreenButton extends React.Component {

  constructor(props){
    super(props);

  }

    render() {
        return (
          <button className="green-button">{this.props.text}</button>
        )
    }
}
