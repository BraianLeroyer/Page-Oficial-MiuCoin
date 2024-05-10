import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Equipo 10%', 'Comunidad 50%', 'Reserva 25%', 'Distribucion 15%'],
            datasets: [
                {
                    data: [10, 50, 25, 15],
                    backgroundColor: [
                        ('#007ad9'), 
                        ('#ffcc00'), 
                        ('#4caf50'),
                        ('#ff0000')
                    ],
                    hoverBackgroundColor: [
                      ('#007ad9'), 
                       ('#ffcc00'), 
                      ('#4caf50'),
                      ('#ff0000')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="flex justify-center">
            <div className="card flex justify-content-center">
                <Chart type="doughnut" data={chartData} options={chartOptions} className=" w-72 md:w-30rem" />
            </div>
        </div>
    )
}