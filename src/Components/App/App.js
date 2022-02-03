import './App.css';
import { useState } from 'react';
import {Playlist} from '../Playlist/Playlist';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';

import Spotify from '../../util/Spotify';

const App = () =>{

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist")
  const [playlistTracks,setPlaylistTracks] = useState([])


  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  const addTrack = (track) => {
    let tracks = playlistTracks;
    if(tracks.includes(track)){
      return
    }
    setPlaylistTracks([...playlistTracks,track]);
    // addtracks to the playlist
  }

  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter((currentTrack) => currentTrack.id !== track.id))
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName,trackURIs);
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);

  }

  const search = async (term) => {
    const search = await Spotify.search(term);
    setSearchResults(search); 
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}


export default App
