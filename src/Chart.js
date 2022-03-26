import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';


export default function Chart(props) {
    
    const [stockInfo, setStockInfo] = useState([]);
    const findStock = props.companyName;
    
    useEffect(() => {
        if (props.companyName !== '') {
            const getStockPrices = async () => {
                const api_url = `https://twelve-data1.p.rapidapi.com/time_series?order=ASC&symbol=${findStock}&interval=1month&outputsize=30&format=json`;
                const response = await fetch(api_url, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
                        "x-rapidapi-key": "0cfeed69acmshcf2f63272ffecb8p1103e6jsn55810a173bfa"
                    }
                });
                const stockData = await response.json();
                setStockInfo(stockData.values);
            }
            getStockPrices();
        }
    }, [props.companyName]);
  if (props.companyName === '') {
      return (<div></div>)
  } else {
      return (
        <div>
            
            <Line
                data={{
                    labels: stockInfo.map(value => value.datetime),
                    datasets: [
                    {
                        label: `${findStock} High`,
                        backgroundColor: 'rgb(50, 205, 50)',
                        borderColor: 'rgb(50, 205, 50)',
                        data: stockInfo.map(value => value.high),
                    },
                    {
                        label: `${findStock} Low`,
                        backgroundColor: 'rgb(220, 20, 60)',
                        borderColor: 'rgb(220, 20, 60)',
                        data: stockInfo.map(value => value.low),
                    },
                    ],
                }}
                options={ {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    maintainAspectRatio: false
                }}
                width = {200}
                height = {400}
            />
        </div>
      )
  }
}
