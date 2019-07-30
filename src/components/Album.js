import React from "react";
import { connect } from "react-redux";
import { getAlbumDetails } from "../actions/albumActions";
import ReactModal from "react-modal";

class Album extends React.Component {
  state = { showModal: false };

  handleOpenModal = () => {
    fetch(`http://localhost:3000/album-details?id=${this.props.id}`)
    .then(res => res.json())
    .then(data => this.props.dispatch(getAlbumDetails(data.details)))
    .then(this.setState({ showModal: true }) )
  }

  handleCloseModal = () => { this.setState({ showModal: false }) }

  handleSaveAlbum = () => {
    fetch("http://localhost:3000/albums", {
      method: "POST",
      headers: {"Accept": "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({album: {
        spotify_id: this.props.id,
        title: this.props.name,
        artist: this.props.artists[0].name,
        cover: this.props.images[0].url
      }})
    })
    .then(res => res.json())
    .then(data => {
      fetch("http://localhost:3000/collections", {
        method: "POST",
        headers: {"Accept": "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({collection: {user_id: this.props.user.id, album_id: data.album.id}})
      })
    })
  }


  render(props) {
    return (
      <React.Fragment>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <img src={this.props.images[1].url}
                alt={"Album cover artwork for " + this.props.name + " by " + this.props.artists[0].name} />
            </div>
          </div>

          <div className="tile is-parent is-10">
            <div className="tile is-child box a">
              <p className="title is-3">{this.props.name}</p>
              <p className="subtitle is-4">{this.props.artists[0].name}</p>
              <p className="subtitle is-5">Release Date: {this.props.release_date}</p>

              <div className="columns is-variable is-1">
                <div className="column">
                  <button className="button is-primary is-rounded is-small"
                    onClick={this.handleOpenModal}>View Album Details</button>

                  <ReactModal className="Modal blue-dropshadow"
                    isOpen={this.state.showModal && this.props.selectedAlbum.tracks_cache}>
                    <div className="columns">
                      <div className="column is-4">
                        <img src={this.props.images[0].url} className="gold-border"
                          alt={"Album artwork for " + this.props.name + " by " + this.props.artists[0].name} />
                          <br />
                        <div className="modal-buttons">
                          <button
                            className="button add-to-modal is-primary is-rounded"
                            onClick={() => this.handleSaveAlbum()}>ADD TO COLLECTION</button>
                            <br />
                          <button
                            className="button close-modal is-primary is-rounded"
                            onClick={this.handleCloseModal}>CLOSE</button>
                        </div>
                      </div>

                      <div className="column">
                        <h1 className="title is-2 white-text">{this.props.name}</h1>
                        <p className="subtitle is-3 white-text">{this.props.artists[0].name}</p>
                        <p className="subtitle is-5 white-text">Release Date: {this.props.release_date}</p>
                        <ul>
                          <p>Track Listing:</p>

                          {this.props.selectedAlbum.tracks_cache && this.props.selectedAlbum.tracks_cache.map(track =>
                            <li key={track.track_number} className="white-text">{track.track_number}. {track.name}</li>)
                          }
                        </ul>
                      </div>
                    </div>
                  </ReactModal>
                </div>

                <div className="column">
                  <button
                    className="button is-primary is-rounded is-small"
                    onClick={() => this.handleSaveAlbum()}>Add To Collection</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedAlbum: state.album.selectedAlbum,
  user: state.user.userData
})

export default connect(mapStateToProps)(Album);
