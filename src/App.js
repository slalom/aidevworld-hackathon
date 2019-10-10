import React from "react";
import SavingsCard from './SavingsCard'
import LeadForm from './LeadForm';
import evenClient from './evenClient'

export default class App extends React.Component {
    constructor() {
        super();
        this.submitLeadForm.bind(this);
    }
  state = {
    users: []
  };

  submitLeadForm = e =>{
    e.preventDefault();

    evenClient.createLead().then((response) => {
      this.setState({
        leadUuid: response.data.leadUuid,
        loanOffers: response.data.loanOffers,
        savingsOffer: response.data.savingsOffers[0]
      })
    }).catch((error) => {
      console.log(error)
    });
  }



  render() {
    return (
      <div>
        <LeadForm submit={this.submitLeadForm}/>
        <div> OFFERS SECTION</div>
            <SavingsCard
                 savingsOffer={this.state.savingsOffer}
            ></SavingsCard>
      </div>
    );
  }
}