import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import { Button, Grid } from '@material-ui/core';
import { ExpenseCollection } from '../../../api/links';
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
const Spentwhere = [
  {
    value: 'Food',
    label: 'Food',
  },
  {
    value: 'Household',
    label: 'Household',
  },
  {
    value: 'Clothes',
    label: 'Clothes',
  },
  {
    value: 'Essentials',
    label: 'Essentials',
  },
  {
    value: 'Others',
    label: 'Others',
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

export default function AddExpense() {
  const classes = useStyles();
  const [currency, setCurrency] = useState('INR');

  const [datevar, setDatevar] = useState('DD/mm/yyyy')
  const [spent, setSpent] = useState('')
  const [amount, setAmount] = useState(0.0)
  


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
            <h2 align="center">New Expense</h2>
           
             <TextField
              id="Spent Where"
              select
              label="Spent Where"
              value={spent}
              onChange={(e) => {
                setSpent(e.target.value)
              }}
              helperText="Please select where did you spent"
            >
              {Spentwhere.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <br />
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
              label="Amount"
              multiline
              rowsMax={4}
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
              }}
            />
            <br></br>
            <TextField
              id="date"
              label="expenseDate"
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

          </div>
            <br/>
        </form>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >   
        <Button variant="contained" id="ddd" color="primary" onClick={() => {
          console.log("following list of data for db insert")
          console.log("Spent::  ", spent, " currency:: ", currency, " Amount:: ", amount, "  date:: ", datevar  , " userId ",Meteor.userId())
          ExpenseCollection.insert({
            spent,currency,amount,"date":datevar,userId:Meteor.userId()
          })
          setSpent('')
          setCurrency('')
          setAmount(0.0)
          setDatevar("DD/mm/yyyy")
      }}>Submit</Button>
        </Grid>
        <br/>
      </Card>
    </Grid>
  );
}