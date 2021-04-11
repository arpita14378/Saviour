import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { _id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { _id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { _id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { _id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { _id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { _id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { _id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid id="_id" rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}