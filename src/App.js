import React from "react";
import SavingsCard from './SavingsCard'
import LeadForm from './LeadForm';
import evenClient from './evenClient'

export default class App extends React.Component {

  constructor() {
    super();
    this.submitToEven.bind(this);
    this.state = {
      users: []
    }
  }

  submitToEven = lead => {
    evenClient.createLead(lead)
      .then(response => {
        console.log(response)
        this.setState({
          leadUuid: response.leadUuid,
          loanOffers: response.loanOffers,
          savingsOffer: response.savingsOffers[0]
        })
      }).catch((error) => {
        console.log(error)
      });
  }

  renderSavingsCard() {
    return this.state.savingsOffer ? <SavingsCard savingsOffer={this.state.savingsOffer} /> : <div></div>
  }

  render() {
    return (
      <div>
        <LeadForm submitToEven={this.submitToEven} />
        {this.renderSavingsCard()}
      </div>
    );
  }
}