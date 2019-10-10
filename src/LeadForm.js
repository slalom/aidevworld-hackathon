import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const scores = [
  {
    value: 500,
    label: 'Bad',
  },
  {
    value: 650,
    label: 'Fair',
  },
  {
    value: 700,
    label: 'Good',
  },
  {
    value: 800,
    label: 'Excellent',
  },
];

const toScore = value => {
  return scores.find(entry => entry.value == value)
}

function valueLabelFormat(value) {
  return value;
}

export default ({ submitToEven }) => {
  const classes = useStyles();
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [score, setScore] = useState(0)

  const submit = event => {
    event.preventDefault()
    submitToEven({ state, zip, score })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State"
                placeholder="CA"
                variant="outlined"
                required
                fullWidth
                autoFocus
                onChange={event => setState(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="zip"
                name="zip"
                label="Zip Code"
                placeholder="94101"
                variant="outlined"
                required
                fullWidth
                autoComplete="lname"
                onChange={event => setZip(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography id="h4">
                Credit Score
              </Typography>
              <Slider
                defaultValue={20}
                valueLabelFormat={valueLabelFormat}
                step={null}
                valueLabelDisplay="auto"
                max={800}
                min={500}
                marks={scores}
                onChange={(event, value) => setScore(toScore(value))}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}