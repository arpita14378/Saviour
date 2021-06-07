import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router';
import Card from '@material-ui/core/Card';
import swal from 'sweetalert';

// import Alert from '@material-ui/lab/Alert';





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


export default function Login(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false)
  return (

    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      display="flex"
    >

      {/* <Card className={classes.root}> */}


      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {/* {isLogin ? <h1>LoggedIn</h1> : <h2></h2>} */}

          <h1 ><strong>SAViour</strong></h1>
          <br />
          <Typography component="h1" variant="h5">
            Login
              </Typography>


          <TextField
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <br />
          <br />
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <br />
          <br />
          
          <Grid container alignContent='center'>
            <Grid item xs>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                  Meteor.loginWithPassword(email, password, function (error) {
                    if (error) {
                     if(error.reason==="Match failed"){
                       error="email id/password is missing";
                     }
                      swal(`The returned value is: ${error}`);
                     
                      console.log("There was an error:" + error.reason);
                    } else {
                      props.setIsLoggedIn(true)
                      // setIsLogin(true)
                      // console.log("Logged in")
                      // history.push('/navbar')
                    }
                  })


                }}
              >
                Login
          </Button>
            </Grid>
            <Grid item xs></Grid>
            <Grid item xs></Grid>
            <Grid item xs >
              <Button

                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => {
                  props.setCompType('register')

                }}
              >
                Register
          </Button>
            </Grid>
          </Grid>



        </div>
        <Box mt={8}>
        
        </Box>


      </Container>
      {/* </Card> */}
    </Grid>
  );
}