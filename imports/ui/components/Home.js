// import React from 'react'

// export default function Home() {
//     return (
//         <div>
//              <img src={'/saviourLogo.jpeg'} width="300" height="300" />
//         <h1>Home page</h1> 
//         </div>
//     )
// }

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
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
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
    backgroundColor: red[400],
  },
  
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
    <br/>
    <br/>
    <Card className={classes.root}>
      
      <CardHeader
        avatar={
          <Avatar aria-label="SAViour" className={classes.avatar}>
            S
          </Avatar>
        }
        title="SAViour "
        //subheader="September 14, 2016"
      />
      <img src={'/saviourLogo.jpeg'} width="345" height="300" />
      <CardContent>
        <h3 align="center"> Welcome to project SAViour!</h3>
        <Typography variant="body2" color="textSecondary" component="p">
         We would help you manage your expenses by 
         <strong><br/>
           * Showing your expense history <br/>
           * Showing where you are expending most <br/>
           * Helping you reach your saving limit and avail your discount coupons <br/>
         </strong>
        </Typography>
      </CardContent>
     
    </Card>
    </Grid>
  );
}

