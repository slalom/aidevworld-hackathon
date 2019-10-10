import React from "react";
import SavingsCard from './SavingsCard'
import LeadForm from './LeadForm';
import evenClient from './evenClient'

export default class App extends React.Component {

  constructor() {
    super();
    this.submitLeadForm.bind(this);
    this.state = {
      users: []
    }
  }

  submitLeadForm = e => {
    e.preventDefault();

    evenClient.createLead().then(response => {
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
        <LeadForm submit={this.submitLeadForm} />
        {this.renderSavingsCard()}
      </div>
    );
  }
}