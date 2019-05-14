import React from 'react';
import '../assets/css/green-button.css'

export default class GreenButton extends React.Component {

  constructor(props){
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.togglePremium = this.togglePremium.bind(this);
  }

  togglePremium(){
    alert("Premium!");
  }

    render() {
        return (
          <button className="green-button" onClick={this.togglePremium}>{this.props.text}</button>
        )
    }
}
