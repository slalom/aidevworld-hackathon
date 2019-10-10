import React from "react";
import Offers from './Offers'
import LeadForm from './LeadForm';
import evenClient from './evenClient'

export default class App extends React.Component {

  constructor() {
    super();
    this.submitToEven.bind(this);
    this.state = {
      users: [],
      savingsOffers: []
    }
  }

  submitToEven = lead => {
    evenClient.createLead(lead)
      .then(response => {
        this.setState({
          leadUuid: response.leadUuid,
          loanOffers: response.loanOffers,
          savingsOffers: response.savingsOffers
        })
      }).catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <div>
        <LeadForm submitToEven={this.submitToEven} />
        <Offers offers={this.state.savingsOffers} />
      </div >
    );
  }
}