import React,{useState} from 'react';
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
import { Accounts } from 'meteor/accounts-base';
import { ProfileCollection } from '../../api/links';
import {useHistory} from 'react-router-dom';
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

export default function RegisterForm(props) {
  const classes = useStyles();
  const [email,setEmail]=useState('')
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const [password,setPassword]=useState('')
  const [userId,setUserId]=useState('')
  const [occupation,setOccupationd]=useState('')
  const [datevar,setDatevar] = useState()
  const curretdate = () => {
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
    return date
  }
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       
        <Typography component="h1" variant="h5">
            Register User
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
              id="First Name"
              label="First Name"
              multiline
              rowsMax={4}
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
            />
            <br />
          
            <TextField
              id="Last Name"
              label="Last Name"
              multiline
              rowsMax={4}
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
            />
            <br />
            
           
            <TextField
              id="date"
              label="Date of Birth"
              type="date"
              defaultValue={curretdate}
              className={classes.textField}
              onChange={(e) => {
                console.log("Selected Date ==> ", e.target.value)
                setDatevar(e.target.value)
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
             <br />
          

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            autoFocus
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
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            autoComplete="current-password"
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userid"
            label="userId"
            type="text"
            id="userId"
            value={userId}
            onChange={(e)=>{
                setUserId(e.target.value)
            }}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="occupation"
            label="occupation"
            type="text"
            id="occupation"
            value={occupation}
            onChange={(e)=>{
                setOccupationd(e.target.value)
            }}
          />
         
         <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={()=>{
                console.log("Register function ")
                console.log("Here is your values\n\n\n")
                console.log(
                    "first",firstname,
                    "lastname",lastname,
                    "email",email,
                                        "password",password
                )
               
                  Accounts.createUser({email, password}, function(err) {
                  if (err){
                    console.log(err);
                  }
                    else
                     { console.log('success!');
                      ProfileCollection.insert({
                        "FirstName::  ":firstname," LastName:: ":lastname,"date":datevar,"Occupation":occupation,   "userId":Meteor.userId()
                      })
                      props.setCompType('login')
                    }
                     
                  });
                 
            }}
          >
            Register
          </Button>
           
         
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}