import React, {Component} from 'react';
import './Cgraph.css';
import {Bar} from 'react-chartjs-2';
class Cgraph extends Component {
    constructor(){
        super() 
          this.state = {
            ghdate: [],
            ghconfirm:[],
          }
        }
        
        
        async componentDidMount(){
           const resp =  await fetch('https://api.covid19india.org/data.json');
           const ndata = await resp.json();
           const stime = ndata.cases_time_series;
           let date = [];
           let confirm = [];
           for(let i = stime.length-1; i>=stime.length-7; i--)
           {
               date.push(stime[i].date);
               confirm.push(stime[i].dailyconfirmed);         
           }
           date.reverse();
           confirm.reverse();
           this.setState({ghdate:date});
           this.setState({ghconfirm:confirm});
          }
    render() {
        const {ghdate,ghconfirm} = this.state;
        const barChart = (<Bar   
        height = {160}
        data = {{ 
         labels: ghdate.map((date) => { return date  }),
         datasets: [
            {
              barPercentage: 0.2,
              label: 'confirmed',
              backgroundColor:'orange',
              data: ghconfirm.map((confirm)=> {return confirm }),
            },
          ],
        }
        } 
        options={{
          responsive:true,
          maintainAspectRatio:false,
          scales:
            {
                xAxes:[{
                  gridLines: {
                  display:false
                 },
                }],
                yAxes: [{
                  gridLines: {
                  display:false,
                    },
                    ticks:{
                        beginAtZero:true,
                        maxTicksLimit:5
                    }

                }]
            },
           
         }

        
        }
        />
        )

      return (
        <div className ="gcard">
                <p className="ti1 fw7">Daily New Cases in India</p>    
                <div className="graph">
                {barChart}
                </div>
                </div>
                
      );
      }
      }

export default Cgraph;
