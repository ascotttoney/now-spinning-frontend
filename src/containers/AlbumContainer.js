import React, { Fragment } from "react";
import Album from "../components/Album";
import AlbumSearchForm from "../components/albumSearchForm";
import { connect } from "react-redux";

class AlbumContainer extends React.Component {
  render() {
    const { error, loading, albums } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <Fragment>
        <div className="container">
          <h1>
            Search for an album. Pick from the list. View details and add to
            your collection.
          </h1>

          <AlbumSearchForm handleSubmit={this.submit} />

          <br />

          <h2>Albums Matching Your Query:</h2>

          <div className="album-display">
            {albums.map(a => (
              <Album {...a} key={a.id} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albumReducer.data,
  loading: state.albumReducer.loading,
  error: state.albumReducer.error
});

export default connect(mapStateToProps)(AlbumContainer);
