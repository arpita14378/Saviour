import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
       Arpita  Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
          />
        
           <Grid container alignContent='center'> 
            <Grid item xs>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={()=>{
              console.log("Register function ")
                Meteor.loginWithPassword(username, password, function(error) {
                    if (error) {
                      console.log("There was an error:" + error.reason);
                    } else {
                      console.log("Logged in")
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
           onClick={()=>{
            Accounts.createUser({
                username,
                password,
              });
              Meteor.loginWithPassword(username, password, function(error) {
                if (error) {
                  console.log("There was an error:" + error.reason);
                } else {
                  console.log("Logged in")
                }
              })
           }}
          >
            Register
          </Button>
            </Grid>
          </Grid>
         
         
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}