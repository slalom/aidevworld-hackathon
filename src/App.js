import React from "react";
import LeadForm from './LeadForm';
import evenClient from './evenClient'

export default class App extends React.Component {
  state = {
    users: []
  };

  submitLeadForm = e =>{
    e.preventDefault();
    evenClient.createLead().then((response) => {
      this.setState({
        leadUuid: response.data.leadUuid,
        loanOffers: response.data.loanOffers,
        savingsOffers: response.data.savingsOffers
      })
      console.log(this.state)
    }).catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <div>
        <LeadForm submit={this.submitLeadForm}/>
        HELLO Dan Siwiec ( Sheveeitz)
            Here is  you rate - {this.state.leadUuid}
      </div>
    );
  }
}