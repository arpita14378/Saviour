import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { useTracker } from 'meteor/react-meteor-data';
import { ExpenseCollection } from '../../../api/links';

class DoughnutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cdata: [],
      labels:[]

   }
    
  }
  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      const mydata= ExpenseCollection.find({"userId":Meteor.userId()}).fetch();
      let mychart_data={}
      let mylables=[]
      let mydataval=mydata.map((elm) =>{
       let val=parseInt(elm['amount'])
       if(elm['spent'] in mychart_data){
         mychart_data[elm['spent']]=mychart_data[elm['spent']]+val
       }else {
         mychart_data[elm['spent']]=val
         mylables.push(elm['spent'])
       }
       
     })
     let my_data_val=[]
     mylables.map((key)=>{
       let myval1=mychart_data[key]
        console.log("myval1", myval1)
        my_data_val.push(myval1)
 
     })
 

      this.setState({
        cdata:my_data_val,
        lables:mylables
      })
    }, 1000)
  }
  componentDidMount(){
   
     this.getData()
  
    
  }
  render() {

    let data = this.state.cdata
    let labels = this.state.labels
    console.log("DATA ",data)
    let customLabels = labels.map((label,index) =>`${label}: ${data[index]}`)

    const chartdata = {
      labels: customLabels,
      datasets: [
        {
          label: "Markets Monitored",
          backgroundColor: [
            "#83ce83",
            "#959595",
            "#f96a5d",
            "#00A6B4",
            "#6800B4",
          ],
          data: data,
        },
      ],
    };
    return (
      <Doughnut
        data={chartdata}
        options={{
          legend: { display: true, position: "right" },

          datalabels: {
            display: true,
            color: "white",
          },
          tooltips: {
            backgroundColor: "#5a6e7f",
          },
        }}
      />
    );
  }
}

export default DoughnutChart;