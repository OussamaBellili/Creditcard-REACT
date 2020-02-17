import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardnumber: "005025415241566",
      holdername: "Oussama Bellili",
      expirationdate: "06/21"
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleHolderName = e => {
    //regex just alphabet
    var holdername = e.target.value;
    var result = holdername.replace(/[^a-z]/gi, "");
    this.setState({holdername: result });
  };

  // handleCreditCard = (e) =>{
  //   //regex
  // }

  // handleExpiration=(e)=>{
  //   // regex
  // }

  render() {
    return (
      <div className="container">
        <div className="cardbackground">
          <div className="namecard">
          <p>{this.state.cardnumber}</p>
          <p>{this.state.holdername.toUpperCase()}</p>
          <p>{this.state.expirationdate}</p> </div>
        </div>

        <div className="inputs">
          <input
            placeholder="Put card number"
            name="cardnumber"
            onChange={event => this.handleChange(event)}
          />
          <input
            placeholder="Put your name"
            name="holdername"
            maxLength="20"
            onChange={event => this.handleHolderName(event)}
          />
          <input
            placeholder="Put your expiration date"
            name="expirationdate"
            onChange={event => this.handleChange(event)}
          />
        </div>
      </div>
    );
  }
}
