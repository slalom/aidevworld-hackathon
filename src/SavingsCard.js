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

const useStyles = makeStyles(theme => ({
  card: {
    marginLeft: 50,
    maxWidth: 345,
  },
  media: {
    height: 0,
    backgroundSize:300,
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

export default function SavingsCard({
    partnerName,
    partnerDescription,
    partnerDisclaimer,
    partnerImageUrl,
    productType,
    productSubType,
    url,
    recommendationScore,
    disclaimer,
    rate,
    annualPercentYield,
    compoundingMethod,
    minimumDeposit,
    minimumDepositWithFees,
    monthlyFee,
    checkWriting,
    effectiveAsOf
    }   ) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
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
        title= {partnerName}
        subheader= {partnerDisclaimer}
      />
      <CardMedia
        className={classes.media}
        image={partnerImageUrl}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {partnerDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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

          <Typography paragraph>Product Type: {productType}</Typography>
          <Typography paragraph>Product Url {url}</Typography>
          <Typography paragraph>Product Url for more details{url}</Typography>
          <Typography paragraph>Recommendation Score {recommendationScore}</Typography>
          <Typography paragraph>Rate : {rate}</Typography>
          <Typography paragraph>Annual Percent Yield : {annualPercentYield}</Typography>
          <Typography paragraph>Compounding Method : {compoundingMethod}</Typography>
          <Typography paragraph>Minimum Deposit : {minimumDeposit}</Typography>
          <Typography paragraph> Minimum Deposit With Fees: {minimumDepositWithFees}</Typography>
          <Typography paragraph> Monthly Fee: {monthlyFee}</Typography>
          <Typography paragraph> Check Writing: {checkWriting}</Typography>
          <Typography paragraph> Effective Data: {effectiveAsOf}</Typography>


        </CardContent>
      </Collapse>
    </Card>
  );
}
