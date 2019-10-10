import React from "react";
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import SavingsCard from './SavingsCard'
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
        <Grid container spacing={4}>
          {this.state.savingsOffers.map((post, key) => (
            <Grid item key={key} xs={12} md={6}>
              <CardActionArea component="a" href="#">
                <SavingsCard savingsOffer={post} />
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </div >
    );
  }
}