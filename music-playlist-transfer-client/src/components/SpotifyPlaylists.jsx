import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const SpotifyPlaylists = ({ playlists, loading }) => {

  const [selectedRows, setSelectedRows] = useState()

  const columns = [
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'tracks', headerName: '# of Tracks', width: 130 },
    { field: 'id', headerName: 'ID', width: 80}
  ];
  
  const rows = playlists.map(playlist => {
    return {
      'title': playlist.name,
      'tracks': playlist.tracks.total,
      'id': playlist.id
    }
  })

  const handleRowSelection = (e) => {
    const playlistIds = e.map(playlist => {
      return {
        'id': e
      }
    }
    )
    setSelectedRows(playlistIds)
  };

  const playlistIdQuery = useQuery({
    queryKey: ["selectedRows"],
    queryFn: () => {return selectedRows},
    enabled: !!selectedRows
})

  const handleButtonClick = () => {
    console.log(selectedRows)
  }

  return (
    <div>
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      initialState={{
        columns: {
          columnVisibilityModel: {id: false},
        },
        pagination: {paginationModel: { page: 0, pageSize: 10 }},
      }}
      pageSizeOptions={[5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
      checkboxSelection
      onRowSelectionModelChange={(e) => handleRowSelection(e)}
      >
    </DataGrid>

    <Button onClick={() => handleButtonClick}>Please CLick me</Button>
    </div>
  );
};

export default SpotifyPlaylists;
