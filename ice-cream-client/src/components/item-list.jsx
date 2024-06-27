import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { GET_ALL_DATA } from '../appConstant';

const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 90,
  },
  {
    field: 'unitPrice',
    headerName: 'Unit Price',
    type: 'number',
    width: 90,
  },
  {
    field: 'totalPrice',
    headerName: 'Total Price',
    type: 'number',
    width: 90,
  },
  {
    field: 'date',
    headerName: 'Timestamp',
    type: 'Date',
    width: 200,
  },
];

const DataTable = () => {
  const [data, setData] = useState([]);

  const getAllIceCreamData = useCallback(async () => {
    const {data} = await axios.get(GET_ALL_DATA);

    setData(data);
  }, []);
  useEffect(() => {
    getAllIceCreamData();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        getRowId={(data) => data._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}

export default DataTable;

