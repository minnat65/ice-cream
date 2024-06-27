import Card from '@mui/material/Card';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

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
    <div 
      className='container'
    >
      <Card id="pie">
        <Chart data={revenueShare} />
      </Card>
      <Card id="bar">
        <VerticalBars data={monthlyRevenue} />
      </Card>
    </div>
  )
}

export default Dashboard;
