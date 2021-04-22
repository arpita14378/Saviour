import React ,{useState,useEffect } from 'react'
import {Pie, Doughnut} from 'react-chartjs-2';
// import { PieChart } from 'react-minimal-pie-chart';
import { useTracker } from 'meteor/react-meteor-data';
//import { useTracker } from 'meteor/react-meteor-data';
import { ExpenseCollection } from '../../../api/links';

function PieChartView() {
    const [data, setData] = useState( [])
    const [labelVar, setLabelVar] = useState([])
   
      useEffect(() => {
        let  mydata=ExpenseCollection.find().fetch();
        let mychart_data={}
        let mylables=[]
        let mydataval=mydata.map((elm) =>{
         let val=elm['amount']
         if(elm['spent'] in mychart_data){
          mychart_data[elm['spent']]=mychart_data[elm['spent']]+val
         }else {
           mychart_data[elm['spent']]=val
           mylables.push(elm['spent'])
         }
         
       })
       setLabelVar(mylables)
       let myChartData=[]
       let colorarr=['#E38627','#C13C37','#6A2135' ,'#BA2135','#DA2135' ,'#CA2135'  ]
       mylables.map((key, i)=>{
        let myval1=mychart_data[key]
         myChartData.push(mychart_data[key])
      })
      let myDataSet={
      labels:mylables,
      datasets: [
        {
          label: 'MyExpenses',
          backgroundColor: [
            '#2D0648',
            '#0C0348',
            '#084E4E',
            '#7F0829',
            '#2D0804',
            '#6800B4'
          ],
          hoverBackgroundColor: [
          '#480D7D',
          '#0721AC',
          '#24BCAE',
          '#C81B4C',
          '#561A14',
          '#35014F'
          ],
          data:myChartData
        }
      ]
    }


        setData(myDataSet)   
      }, [setData]);
     
      
     
    return (
        <div>
          <Pie data={data} />
        </div>
    )
}

export default PieChartView
