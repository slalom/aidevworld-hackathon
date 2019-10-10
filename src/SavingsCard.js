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
import Orders from './Orders'
import Title from './Title';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

const useStyles = makeStyles(theme => ({
  card: {
    marginLeft: 50,
    maxWidth: 500,
    width: 500,
    backgroundColor: 'rgba(63, 81, 181, 0.4x)',
  },
  header: {
    backgroundColor: '#fff'
  },
  media: {
    height: 0,
    backgroundSize: 200,
    backgroundColor: '#fffff !important',
    paddingTop: '30.25%', // 16:9
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

export default function SavingsCard({ savingsOffer }) {
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
      imageUrl,
      keyPoints
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
      effectiveAsOf }
  } = savingsOffer;

  console.log(savingsOffer.partner)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const data = [
    {
      name: 'rate', current: 4.0, offer: rate
    },
    {
      name: 'annual % yield', current: 1.0, offer: annualPercentYield
    }
  ];

  const columnSet1 = ['product type', 'sub type', 'recommendation score', 'rate']
  const rowData1 = [
    [productType, productSubType, recommendationScore, rate]
  ];

  const columnSet2 = ['annual % yield', 'compounding method', 'minimum deposit', 'minimum deposit with fees']
  const rowData2 = [
    [annualPercentYield, compoundingMethod, minimumDeposit, minimumDepositWithFees]
  ];

  const columnSet3 = ['monthly fee', 'effective date']
  const rowData3 = [
    [monthlyFee, effectiveAsOf]
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
        title={name}
        subheader={disclaimer}
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
          <Typography component="h4" variant="h5">
            Key Points:
          </Typography>
          <List>
            {keyPoints.map(point => {
              return (<ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary={point} />
              </ListItem>)
            })}
          </List>
          <BarChartable
            data={data}
          />
          <Title>Details about your offer</Title>
          <Orders
            columns={columnSet1}
            rows={rowData1}
          />
          <Orders
            columns={columnSet2}
            rows={rowData2}
          />
          <Orders
            columns={columnSet3}
            rows={rowData3}
          />

        </CardContent>
      </Collapse>
    </Card>
  );
}
