// import { useState } from 'react';
import './Track.css';

export const Track = ({name, artist, album, id, isRemoval, onAdd, onRemove, track}) => {
  // const[ isRemoval, setIsRemoval ] = useState(false);
  
  const addTrack = () => {
    onAdd(track);
  };  

  const removeTrack = () => {
    onRemove(track)
  }

  const renderAction = () => {
    if(isRemoval){
      return <button className="Track-action" onClick={removeTrack}>-</button>
    } else if (!isRemoval){
      return <button className="Track-action" onClick={addTrack} >+</button>
    }
  }
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>{artist}{album}</p>
      </div>
      {renderAction()}
    </div>
  );
}


