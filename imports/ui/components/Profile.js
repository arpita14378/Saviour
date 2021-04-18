import React from 'react'
import { ProfileCollection } from '../../api/links';
import { useTracker } from 'meteor/react-meteor-data';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
export default function Profile() {
    
    const myprofile = useTracker(() => {
        return ProfileCollection.findOne({"userId":Meteor.userId()});
    
    });
    const classes = useStyles();
    console.log("Myprofile data\n ",myprofile)
    return (
        <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card className={classes.root}>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Typography component="h1" variant="h5">
          My Profile
        </Typography>
    
        <form className={classes.form} noValidate>
          <TextField
            required
            id="First Name"
            label="First Name"
            rowsMax={4}
            value={myprofile.FirstName}
            disabled={true}
            variant="outlined"
            
          />
          <br />
          <br/>

          <TextField
            required
            id="Last Name"
            label="Last Name"
            rowsMax={4}
            value={myprofile.LastName}
            disabled={true}
            variant="outlined"

          />
          <br />
          <br />


          <TextField

            required
            id="date"
            label="Date of Birth"
            type="date"
            defaultValue={myprofile.Date}
            className={classes.textField}
            disabled={true}
            variant="outlined"
           
          />
          <br />
          <br />

          <TextField
            required
            fullWidth
            name="occupation"
            label="Occupation"
            type="text"
            id="occupation"
            value={myprofile.Occupation}
            disabled={true}
            variant="outlined"
          />
         

        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    </Card>
    </Grid>
    )
}
