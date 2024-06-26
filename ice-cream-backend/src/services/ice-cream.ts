import { IceCream } from "../models/ice-cream";
import { IIceCream } from "../interface";

const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export const addIceCream = async (data: Array<IIceCream>) => {
//   const alldata = await IceCream.create(
//     {
//     name: 'Vanilla Double Scoop',
//     quantity: 5,
//     unitPrice: 80,
//     totalPrice: 400,
//     date: '2019-01-01T00:00:00.000Z'
//   },
//   );
//   return alldata;
// }

export const getAllItems = async () => {
  const items = await IceCream.find({}).lean();

  return items;
}

export const getMonthlyRevenue = async () => {
  const iceCreams = await IceCream.aggregate([
    {
      $match: { date: { $exists: true, $ne:null } }
    },
    {
      $addFields: {
        month: { $month: '$date'}
      }
    },
    {
      $group: {
        _id: '$month',
        revenue: { $sum: '$totalPrice' },
      }
    },
    {
      $project: {
        month: { $arrayElemAt: [months, { $getField: '_id' }] },
        revenue: 1,
      }
    },
    {
      $sort: { '_id': 1 },
    }
  ]);

  return iceCreams;
}

export const getRevenueContribution = async () => {
  const overAllTotalRevenue = await IceCream.aggregate([
    {
      $group: {
        _id: 1,
        totalRevenue: { $sum: '$totalPrice' }
      }
    }
  ]);
  console.log(overAllTotalRevenue, typeof overAllTotalRevenue)

  const items = await IceCream.aggregate([
    {
      $match: { name: { $exists: true, $ne:null } }
    },
    {
      $group: {
        _id: '$name',
        revenue: { $sum: '$totalPrice' },
      }
    },
    {
      $project: {
        id: '$_id',
        label: '$_id',
        value: {
          $multiply: [
            {
              $divide: [
                "$revenue",
                overAllTotalRevenue[0].totalRevenue,
              ]
            },
            100
          ]
        }
      }
    }
  ]);

  return items;
}