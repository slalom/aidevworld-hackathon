import React from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import SavingsCard from './SavingsCard'
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
                 partnerName={"HSBC Savings - Direct"}
                 partnerDescription={"Take advantage of one of the best savings rates with an online-only HSBC Direct Savings account."}
                 partnerDisclaimer={"Deposit products are offered in the U.S. by HSBC Bank USA, N.A. Member FDIC."}
                 partnerImageUrl={"https://images.evenfinancial.com/logos/hsbc/hsbc.png"}
                 productType={"TEst data"}
                 productSubType={"TEst data"}
                 url={"TEst data"}
                 recommendationScore={"TEst data"}
                 disclaimer={"TEst data"}
                 rate={"TEst data"}
                 annualPercentYield={"TEst data"}
                 compoundingMethod={"TEst data"}
                 minimumDeposit={"TEst data"}
                 minimumDepositWithFees={"TEst data"}
                 monthlyFee={"TEst data"}
                 checkWriting={"TEst data"}
                 effectiveAsOf={"TEst data"}
            ></SavingsCard>
      </div>
    );
  }
}