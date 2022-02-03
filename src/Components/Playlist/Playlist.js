import './Playlist.css';
import {TrackList} from '../TrackList/TrackList'
export function Playlist({playlistName, playlistTracks, onRemove, onNameChange, onSave}) {

  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  }


  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} playlistName={playlistName} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave} >SAVE TO SPOTIFY</button>
    </div>
  );
}

