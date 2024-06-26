/* eslint-disable react/prop-types */

import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

// Since value is large therefore dividing it with 1000
const valueFormatter = (value) => `${value/1000}k`;

const chartSetting = {
  yAxis: [
    {
      label: 'Revenue(Rs)',
      valueFormatter: (revenue) => {
        if(revenue !== 0) {
        const revenueInThausand = revenue / 1000;
        return revenueInThausand + 'k';
        }
      }
    },
  ],
  series: [{ dataKey: 'revenue', label: 'Monthly Revenue', valueFormatter }],
  height: 300,
  width: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-20px)',
    },
  },
};

const VerticalBars = ({ data }) => {
  return (
    <div style={{ width: '100%', marginLeft: 20 }}>
      <BarChart
        dataset={data}
        xAxis={[
          { 
            scaleType: 'band', 
            dataKey: 'month', 
            tickPlacement: 'middle', 
            tickLabelPlacement: 'middle', 
            label: 'Months',
          },
        ]}
        margin={{ left: 70 }}
        {...chartSetting}
        skipAnimation={true}
      />
    </div>
  );
}

export default VerticalBars;
