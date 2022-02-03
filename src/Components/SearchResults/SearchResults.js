import './SearchResults.css';
// import { useState } from 'react';
import {TrackList} from '../TrackList/TrackList'

export function SearchResults({searchResults, onAdd}) {
  // const[ isRemoval, setIsRemoval ] = useState(false);

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {<TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />}
    </div>
  );
}

