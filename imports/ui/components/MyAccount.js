import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import { Button, Grid } from '@material-ui/core';
import { IncomeCollection } from '../../api/links';
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

export default function MyAccount() {
  const classes = useStyles();

  const [datevar, setDatevar] = useState('')
  const [FN, setFN] = useState('')
  const [LN, setLN] = useState('')
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
          <br />
          <div>
            <h2 align="center">My Account</h2>
            
            <TextField
              id="standard-select-currency"
              select
              label="Currency"
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value)
              }}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-multiline-flexible"
              label="Income"
              multiline
              rowsMax={4}
              value={Income}
              onChange={(e) => {
                setIncome(e.target.value)
              }}
            />
            <br></br>
            <TextField
              id="standard-select-currency"
              select
              label="Currency"
              value={Scurrency}
              onChange={(e) => {
                setSCurrency(e.target.value)
              }}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-multiline-flexible"
              label="Saving Limit"
              multiline
              rowsMax={4}
              value={Saving}
              onChange={(e) => {
                setSaving(e.target.value)
              }}
              helperText="Please Enter the saving limit"
            />
            <br></br>

          </div>
          <br />
        </form>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button variant="contained" color="primary" onClick={() => {
            console.log("following list of data for db insert")
            console.log( " currency:: ", currency, " Income:: ", Income, " currency:: ", currency, " Saving Limit:: ", Saving, " userId ", Meteor.userId())
            var d = new Date();
            var createdAt = d.toISOString();    
            IncomeCollection.insert({
               currency, Income, " saving_currency": Scurrency, Saving, "userId": Meteor.userId(), "createdAt": createdAt
            })
            setIncome(0.0)
            setSaving(0.0)
          }}>Submit</Button>
        </Grid>
        <br />
      </Card>
    </Grid>
  );
}