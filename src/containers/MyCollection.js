import React from "react";
import { connect } from "react-redux";
import { getAlbumDetails } from "../actions/albumActions";
import CollectionGallery from "../components/CollectionGallery";
import ReactModal from "react-modal";

class MyCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { collections: "", showModal: false, opacity: 1, collection: {} }
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/collections-user?user_id=${this.props.user.id}`)
    .then(res => res.json())
    .then(data => this.setState({collections: data.collections}))
  }

  handleOpenModal = (album, collection) => {
    fetch(`http://localhost:3000/album-details?id=${album}`)
    .then(res => res.json())
    .then(data => this.props.dispatch(getAlbumDetails(data.details)))
    .then(this.setState({ showModal: true, opacity: 0, collection: collection }) )
  }

  handleCloseModal = () => { this.setState({ showModal: false, opacity: 1 }) }

  handleRemove = () => {
    fetch(`http://localhost:3000/collections/?id=${this.state.collection}`, { method: "DELETE" });
  }


  render() {
    if (this.state.collections) {
      return (
        <div>
          <div className="swiper-gallery" style={{opacity: this.state.opacity}}>
            <h1 className="title is-2">{this.props.user.first_name}'S COLLECTION</h1>
            <CollectionGallery collections={this.state.collections} handleOpenModal={this.handleOpenModal} />
          </div>

          {this.state.showModal && this.props.album.tracks_cache ?
            <ReactModal className="Modal blue-dropshadow"
              isOpen={this.state.showModal && this.props.album.tracks_cache}>
              <div className="columns">
                <div className="column is-4">
                  <img src={this.props.album.images[0].url} className="gold-border"
                    alt={"Album artwork for " + this.props.album.name + " by " + this.props.album.artists[0].name} />
                    <br />
                  <div className="modal-buttons">
                    <button
                      className="button add-to-modal is-primary is-rounded"
                      onClick={this.handleRemove}>REMOVE FROM COLLECTION</button>
                      <br />
                    <button
                      className="button close-modal is-primary is-rounded"
                      onClick={this.handleCloseModal}>CLOSE</button>
                  </div>
                </div>

                <div className="column">
                  <h1 className="title is-2 white-text">{this.props.album.name}</h1>
                  <p className="subtitle is-3 white-text">{this.props.album.artists[0].name}</p>
                  <p className="subtitle is-5 white-text">Release Date: {this.props.album.release_date}</p>
                  <ul>
                    <p>Track Listing:</p>

                    {this.props.album.tracks_cache && this.props.album.tracks_cache.map(track =>
                      <li key={track.track_number} className="white-text">{track.track_number}. {track.name}</li>)
                    }
                  </ul>
                </div>
              </div>
            </ReactModal>
            : null
          }

        </div>
      );
    }

    return (
      <div>
        <h1 className="subtitle is-3">Loading...</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.userData,
  album: state.album.selectedAlbum
})

export default connect(mapStateToProps)(MyCollection);
