import React from 'react';


const Film = ({ info }) => (
  <div key={info.id}>
    <img src={info.poster_path} />
    <div>
      <h3>{info.title}</h3>
      <span>{info.genres.join(', ')}</span>
      <span>
        {info.release_date.split('-')[0]}
      </span>
    </div>
  </div>
);

export default Film;