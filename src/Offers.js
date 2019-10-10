import React from 'react'
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import SavingsCard from './SavingsCard'

export default ({offers}) => {
  return (
    <Grid container>
      {offers.map((post, key) => (
        <Grid item key={key} xs={6} md={6} className="margin-top-20">
          <CardActionArea component="a" href="#">
            <SavingsCard savingsOffer={post} />
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  )
}