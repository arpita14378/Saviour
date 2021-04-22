import React, { Component } from "react";
import { PieChart } from 'react-minimal-pie-chart';
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
      let colorarr=['#E38627','#C13C37','#6A2135' ,'#BA2135','#DA2135' ,'#CA2135'  ]
      console.log('Our data is fetched');
      const mydata= ExpenseCollection.find({"userId":Meteor.userId()}).fetch();
      let mychart_data={}
      let mylables=[]
      let myChartData=[]
      let mydataval=mydata.map((elm) =>{
       
       let val=parseInt(elm['amount'])
       if(elm['spent'] in mychart_data){
         mychart_data[elm['spent']]=parseInt(mychart_data[elm['spent']])+val
       }else {
         mychart_data[elm['spent']]=val
         mylables.push(elm['spent'])
       }
       
     })

    
     mylables.map((key, i)=>{
       let myval1=mychart_data[key]
        myChartData.push({ title: key, value: mylables[key], color: colorarr[i] })
        
 
     })
      this.setState({
        cdata:myChartData  
      })
     
    }, 1000)
  }
  componentDidMount(){
   
     this.getData()
  
    
  }
  render() {

    let data = this.state.cdata
    console.log("DATA is recieved ", data)
  
    return (
      <PieChart data={data}/>
      
    );
  }
}

export default DoughnutChart;