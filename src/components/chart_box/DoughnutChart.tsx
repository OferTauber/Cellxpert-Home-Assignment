import React from 'react';
import { totalNumOfWords } from '../../utils/calcs';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

const addTransparency = (color: string) => {
  const tempArr = color.split(',');
  tempArr.pop();
  tempArr.push('0.2)');
  return tempArr.join(',');
};

const DoughnutChart = ({
  color,
  numOfWords,
}: {
  color: string;
  numOfWords: number;
}) => {
  const chartData = {
    datasets: [
      {
        data: [numOfWords, totalNumOfWords - numOfWords],
        backgroundColor: [color, addTransparency(color)],
        cutout: '70%',
        borderWidth: 0,
      },
    ],
  };

  return <Doughnut data={chartData} redraw={true} />;
};

export default DoughnutChart;
