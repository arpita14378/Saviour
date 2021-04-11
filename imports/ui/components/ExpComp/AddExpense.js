import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import { Button, Grid } from '@material-ui/core';
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

export default function AddExpense() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const [datevar, setDatevar] = useState('')
  const [spent, setSpent] = useState('spent where')
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
          <div>
            <TextField
              id="spend-where"
              label="Spent Where"
              multiline
              rowsMax={4}
              value={spent}
              onChange={(e) => {
                setSpent(e.target.value)
              }}
            />
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

        </form>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >   <Button variant="contained" color="primary" onClick={() => {
          console.log("following list of data for db insert")
          console.log("Spent::  ", spent, " currency:: ", currency, " Amount:: ", amount, "  date:: ", datevar  , " userId ",Meteor.userId())
        }}>Submit</Button>
        </Grid>

      </Card>
    </Grid>
  );
}