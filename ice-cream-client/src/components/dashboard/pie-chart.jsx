/* eslint-disable react/prop-types */

import { Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts';

const Chart = ({ data }) => {
  return (
    <>
      <Typography 
        style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}
      >Revenue Share (%)</Typography>
      <PieChart
        series={[
          {
            data,
          },
        ]}
        margin={{ left: 100, top: 30 }}
        slotProps={{
          legend: {
            hidden: true,
          }
        }}
        width={400}
        height={300}
      />
    </>
  )
};

export default Chart;
