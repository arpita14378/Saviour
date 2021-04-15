import React ,{useState} from 'react';
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
import {useHistory} from 'react-router-dom';
 import { Link } from 'react-router';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      
       Arpita  Your Website
      
      {new Date().getFullYear()}
      
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();
  const [isLogin,setIsLogin]=useState(false)
  return (
   
   <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {isLogin?<h1>LoggedIn</h1>:<h2>Not Loggedin</h2>}
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        
       
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>{
                setEmail(e.target.value)
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
                Meteor.loginWithPassword(email, password, function(error) {
                    if (error) {
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
           onClick={()=>{
            props.setCompType('register')
            
           }}
          >
            Register
          </Button>
            </Grid>
          </Grid>
         
         

      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}