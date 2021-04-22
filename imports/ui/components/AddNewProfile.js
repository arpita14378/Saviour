import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import { Button, Grid } from '@material-ui/core';
import { ProfileCollection } from '../../api/links';
//import { ProfileCollection } from '../../api/links';
const curretdate = () => {
  var tempDate = new Date();
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
  return date
}
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
    {
      value: 'INR',
      label: '₹',
    },
  ];
  
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function AddNewProfile() {
  const classes = useStyles();
  
  const [datevar, setDatevar] = useState('')
  const [SW, setSW] = useState('')
  const [GN, setGN] = useState('')
  const [Occ, setOcc] = useState('')
  const [currency, setCurrency] = React.useState('INR');
  const [Scurrency, setSCurrency] = React.useState('INR');

  const [Income, setIncome] = useState('')
  const [Saving, setSaving] = useState('')


  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card className={classes.root}>
        <form className={classes.root} noValidate autoComplete="off">
          <br/>
          <div>
            <h2 align="center">Add New Profile</h2>
            <TextField
              id="Share with"
              label="Share with"
              multiline
              rowsMax={4}
              value={SW}
              onChange={(e) => {
                setSW(e.target.value)
              }}
            />
            <br />
          
            <TextField
              id="Group Name"
              label="Group Name"
              multiline
              rowsMax={4}
              value={GN}
              onChange={(e) => {
                setGN(e.target.value)
              }}
            />
            <br />
            
           
            
          
          <TextField
            id="Occupation"
            label="Occupation"
            multiline
            rowsMax={4}
            value={Occ}
            onChange={(e) => {
              setOcc(e.target.value)
            }}
          />
          

          </div>
            <br/>
        </form>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >   
        <Button variant="contained" color="primary" onClick={() => {
          console.log("following list of data for db insert")
           console.log("shareWith: ",SW," groupName:" ,GN,"Occupation:",Occ,"currency:",currency, "Income:",Income, "saving_currency:" ,Scurrency, Saving," userId:",Meteor.userId())
         
          ProfileCollection.insert({
            "shareWith":SW," groupName":GN,"date":datevar,"Occupation":Occ,currency,  Income," saving_currency": Scurrency, Saving, "userId":Meteor.userId()
          })
      }}>Submit</Button>
        </Grid>
        <br/>
      </Card>
    </Grid>
  );
}