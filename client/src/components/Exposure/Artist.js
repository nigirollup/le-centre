import React from 'react';
import avatar from './../../assets/avatar.png';

const Artist = ({ artists }) => {
  const backUrl = 'https://le-centre-api.herokuapp.com';
  return (
    <div className="artist">
      <p className="title-exposure">
        artistes
        </p>
      <ul className="artist-galery">
        {artists.map(artist => {
          return (
            <li key={artist.id}>
              <img src={backUrl + artist.avatar.url} />
              <p>{artist.name}</p>
            </li>

          )
        })}
      </ul>
    </div>
  )
}

export default Artist;