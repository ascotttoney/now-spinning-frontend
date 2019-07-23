import React from "react";

const Album = props => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.images[1].url} alt="Album cover artwork" />
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.name}</p>
            <p className="subtitle is-6">Artist: {props.artists[0].name}</p>
          </div>
        </div>

        <p className="subtitle is-7">Release Date: {props.release_date}</p>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          Listen on Spotify
        </a>
        <br />
        <button>Add To Collection</button>
      </div>
    </div>
  );
};

export default Album;
