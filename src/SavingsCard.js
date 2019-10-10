import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BarChartable from './BarChartable'
const useStyles = makeStyles(theme => ({
  card: {
    marginLeft: 50,
    maxWidth: 500,
    width: 500
  },
  header: {
    backgroundColor: '#fff'
  },
  media: {
    height: 0,
    backgroundSize:300,
    backgroundColor: '#fffff !important',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SavingsCard({savingsOffer}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showGraph, setShowGraph] = React.useState(false);
  const [graphData, setGraphData] = React.useState('');
    const {
        partner: {
            uuid,
            name,
            description,
            disclaimer,
            supportsPersonalizedOffers,
            imageUrl
        },
            productType,
            productSubType,
            url,
            recommendationScore,
            details: {
                rate,
                annualPercentYield,
                compoundingMethod,
                minimumDeposit,
                minimumDepositWithFees,
                monthlyFee,
                checkWriting,
                effectiveAsOf}
        } = savingsOffer;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const data = [
  {
    name: 'rate', current: 4.0, offer: rate
  },
  {
    name: 'annual % yield', current: 1.0    , offer: annualPercentYield
  }
];

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            DS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {name}
        subheader= {disclaimer}
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title="HSNBC"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {

            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <BarChartable
            data={data}
        />
        </CardContent>
      </Collapse>
    </Card>
  );
}
