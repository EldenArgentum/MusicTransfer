import React from 'react';

const SpotifyPlaylists = ({ playlists }) => {
  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  );
};

export default SpotifyPlaylists;