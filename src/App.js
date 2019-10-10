import React from "react";
import Offers from './Offers'
import LeadForm from './LeadForm';
import evenClient from './evenClient'
import comprehendClient from './comprehendClient'


const enrichWithDetect = data => {
  return Promise.all(
    data.savingsOffers.map(offer => {
      return comprehendClient.detectKey({ text: offer.partner.description })
        .then(response => {
          offer.partner.keyPoints = response.body.KeyPhrases.map(item => item.Text)
          return offer  
        })
    }))
}
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
      .then(enrichWithDetect)
      .then(response => {
        this.setState({
          savingsOffers: response
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