import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './DataGridTable.css'; // Assuming you're using an external CSS for custom styles

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'customer', headerName: 'Employee Name', width: 200 },
  { field: 'lastSeen', headerName: 'Last seen', width: 130 },
  { field: 'orders', headerName: 'Orders', width: 130 },
  { field: 'totalSpent', headerName: 'Total spent', width: 130, 
    renderCell: (params) => (
      <span style={{ color: parseFloat(params.value) > 0 ? 'green' : 'red' }}>
        {params.value}
      </span>
    ),
  },
  { field: 'latestPurchase', headerName: 'Latest purchase', width: 200 },
  { field: 'news', headerName: 'News', width: 90, 
    renderCell: (params) => (
      <span>{params.value === 'yes' ? '✔️' : '❌'}</span>
    ),
  },
  { field: 'segments', headerName: 'Segments', width: 150 },
];

// Updated and sorted data
const rows = [
  { id: 1, customer: 'Anna Bruen', lastSeen: '08/09/2020', orders: 3, totalSpent: '647.91 SUS', latestPurchase: '07/06/2020 07:48:18', news: 'yes', segments: 'Collector' },
  { id: 2, customer: 'Bearson Weimann', lastSeen: '08/10/2020', orders: 2, totalSpent: '263.51 SUS', latestPurchase: '27/11/2019 13:12:25', news: 'yes', segments: 'Regular' },
  { id: 3, customer: 'Both Hill', lastSeen: '08/08/2020', orders: 2, totalSpent: '193.20 SUS', latestPurchase: '08/05/2020 14:23:08', news: 'yes', segments: 'Regular,Collector' },
  { id: 4, customer: 'Brandom Hoyerr', lastSeen: '08/08/2020', orders: 1, totalSpent: '150.10 SUS', latestPurchase: '08/04/2020 10:23:05', news: 'no', segments: 'Return' },
  { id: 5, customer: 'Dina Tilmann', lastSeen: '04/05/2020', orders: 3, totalSpent: '290.00 SUS', latestPurchase: '08/06/2020 09:13:25', news: 'yes', segments: '' },
  { id: 6, customer: 'Florendo Roob', lastSeen: '08/09/2020', orders: 0, totalSpent: '0.00 SUS', latestPurchase: '00/00/0000', news: 'yes', segments: 'Return' },
  { id: 7, customer: 'Gudnum Tromp', lastSeen: '08/08/2020', orders: 0, totalSpent: '0.00 SUS', latestPurchase: '00/00/0000', news: 'no', segments: '' },
  { id: 8, customer: 'Jackob Armstrong', lastSeen: '07/02/2020', orders: 4, totalSpent: '400.40 SUS', latestPurchase: '10/01/2020 12:12:12', news: 'no', segments: 'Collector' },
  { id: 9, customer: 'Janna Grover', lastSeen: '05/02/2020', orders: 6, totalSpent: '650.00 SUS', latestPurchase: '11/12/2020 13:23:50', news: 'yes', segments: 'Regular' },
  { id: 10, customer: 'Madelson Torp', lastSeen: '08/08/2020', orders: 0, totalSpent: '0.00 SUS', latestPurchase: '00/00/0000', news: 'no', segments: '' },
  { id: 11, customer: 'Rashwan Beer', lastSeen: '09/08/2020', orders: 3, totalSpent: '693.50 SUS', latestPurchase: '19/05/2020 10:03:18', news: 'yes', segments: 'Collector' },
  { id: 12, customer: 'Ray Sohuster', lastSeen: '18/08/2020', orders: 5, totalSpent: '500.50 SUS', latestPurchase: '19/03/2020 11:15:30', news: 'yes', segments: '' },
];

export default function DataGridTable() {
  const [searchText, setSearchText] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const filtered = rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setFilteredRows(filtered);
  };

  return (
    <div style={{ height: 600, width: '100%', marginTop: '20px' }}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search"
        style={{
          padding: '10px',
          marginBottom: '10px',
          width: '50%',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
