import React from 'react';
import {Pie} from 'react-chartjs-2';
import './Cgraph';

const Cgraph2 = ({gConfirm,gRecover,gDeath}) => {
    const pieChart = (<Pie   
        height = {160}
        data = {{ 
         labels: ['Confirmed','Recovered','Death'],
         datasets: [
            {
              backgroundColor:['orange','green','red'],
              data: [gConfirm,gRecover,gDeath]
            },
          ],
        }
        } 
        options={{
          responsive:true,
          maintainAspectRatio:false,
            }
        }
        />
        )
    return (
        <div className ="gcard">
                <p className="ti1 fw7">World Percentage</p>    
                <div className="graph">
                {pieChart}
                </div>
                </div>
                
      );
    }




export default Cgraph2;