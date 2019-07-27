import React from "react";

const Album = props => {
  return (
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <img
              src={props.images[1].url}
              alt={"Album cover artwork for " + props.name + " by " + props.artists[0].name}
            />
          </div>
        </div>

        <div className="tile is-parent is-10">
          <article className="tile is-child box">
            <p className="title is-3">{props.name}</p>
            <p className="subtitle is-5">Artist: {props.artists[0].name}</p>
            <p className="subtitle is-6">Release Date: {props.release_date}</p>
            <a href={props.href} target="_blank" rel="noopener noreferrer">Listen on Spotify</a>
              <br />
            <button>Add To Collection</button>
          </article>
        </div>
      </div>
  );
};

export default Album;
