"use client"

import './datatable.scss'

import * as React from 'react';

import { DataGrid, GridToolbar , GridColDef } from '@mui/x-data-grid';
import { GRID_DEFAULT_LOCALE_TEXT } from './localeTextConstants';

type datatableType = {
  rows: any,
  columns: GridColDef[]
} 



export default function DataGridDemo({ rows, columns }: datatableType) {
  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid'
        localeText={GRID_DEFAULT_LOCALE_TEXT}
        rows={rows} 
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
              
            },
          },
        }}
        
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}