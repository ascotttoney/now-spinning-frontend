import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albumActions";

let AlbumSearchForm = props => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.dispatch(fetchAlbums(e.target.albumquery.value));
      }}
    >
      <div className="field">
        <label className="label" htmlFor="album-search">
          Find An Album
        </label>
        <div className="control">
          <Field
            className="input"
            name="albumquery"
            component="input"
            type="text"
            placeholder="Search via artist, album title, or a combination of the two..."
          />
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

AlbumSearchForm = reduxForm({ form: "albumSearch" })(AlbumSearchForm);

export default connect()(AlbumSearchForm);
