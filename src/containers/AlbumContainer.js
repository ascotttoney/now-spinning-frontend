import React, { Fragment } from "react";
import Album from "../components/Album";
import AlbumSearchForm from "../components/AlbumSearchForm";
import { connect } from "react-redux";

class AlbumContainer extends React.Component {
  render() {
    const { error, loading, albums } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return (
        <Fragment>
          <div>
            <h2 className="title is-2">Search for an album</h2>

            <h4 className="title is-4">
              Pick from the list <br />
              View details and add to your collection
            </h4>

            <AlbumSearchForm handleSubmit={this.submit} />

            <div className="search-results">Patience is a virtue...</div>
          </div>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <div>
          <h2 className="title is-2">Search for an album</h2>

          <h4 className="title is-4">
            Pick from the list <br />
            View details and add to your collection
          </h4>

          <AlbumSearchForm handleSubmit={this.submit} />

          <br />

          <div className="search-results">
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
  albums: state.album.data,
  loading: state.album.loading,
  error: state.album.error
});

export default connect(mapStateToProps)(AlbumContainer);
