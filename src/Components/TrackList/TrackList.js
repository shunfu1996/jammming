import './TrackList.css';
import {Track} from '../Track/Track'
/* <!-- You will add a map method that renders a set of Track components  --> */

export const TrackList = ({tracks, playlistName, onAdd, isRemoval, onRemove}) => {  
  return (
    <div className="TrackList">
        {tracks.map((track) => {
          const { name, artist, album, id} = track;
          return(
            <Track 
              track={track} 
              key={id}
              name={name}
              artist={artist}
              album={album}

              playlistName={playlistName}
              onAdd={onAdd}
              onRemove={onRemove}
              isRemoval={isRemoval}
            />
          );
        })}
    </div>
  );
}

