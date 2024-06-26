import Card from '@mui/material/Card';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Chart from "../components/dashboard/pie-chart";
import VerticalBars from "../components/dashboard/vertical-bars";
import { GET_MONTHLY_REVENUE, GET_REVENUE_SHARE } from '../appConstant';

const Dashboard = () => {
  const [revenueShare, setRevenueShare] = useState([]);
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);

  const getRevenueShare = useCallback(async () => {
    const { data } = await axios.get(GET_REVENUE_SHARE);

    setRevenueShare(data);
  }, []);

  const getMonthlyRevenue = useCallback(async () => {
    const { data } = await axios.get(GET_MONTHLY_REVENUE);

    setMonthlyRevenue(data);
  }, []);

  useEffect(() => {
    console.log('Rendered.....')
    getRevenueShare();
    getMonthlyRevenue();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px', width: '100vw' }}>
      <Card style={{ width: '30%' }}>
        <Chart data={revenueShare} />
      </Card>
      <Card style={{ width: '60%' }}>
        <VerticalBars data={monthlyRevenue} />
      </Card>
    </div>
  )
}

export default Dashboard;
