import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchAlbums } from "../actions/albumActions";

let AlbumSearchForm = (props) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.dispatch(fetchAlbums(e.target.albumquery.value));
    }} >
      <div className="columns">
        <div className="column is-half">

          <div className="control">
            <Field className="input is-rounded a" name="albumquery" component="input"
              type="text" placeholder="SEARCH via artist and/or album title..."
            />
          </div>

        </div>

        <div className="column is-one-quarter">
          <button className="button is-primary is-rounded" type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

AlbumSearchForm = reduxForm({ form: "albumSearch" })(AlbumSearchForm);

export default connect()(AlbumSearchForm);
