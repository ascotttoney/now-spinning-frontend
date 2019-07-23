const URL = `http://localhost:3000/`;

export function fetchAlbums(query) {
  return dispatch => {
    dispatch(fetchAlbumsBegin());

    return fetch(`${URL}album-search?title=${query}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchAlbumsSuccess(json.albums));
        return json.albums;
      })
      .catch(error => dispatch(fetchAlbumsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_ALBUMS_BEGIN = "FETCH_ALBUMS_BEGIN";
export const FETCH_ALBUMS_SUCCESS = "FETCH_ALBUMS_SUCCESS";
export const FETCH_ALBUMS_FAILURE = "FETCH_ALBUMS_FAILURE";

export const fetchAlbumsBegin = () => ({
  type: FETCH_ALBUMS_BEGIN
});

export const fetchAlbumsSuccess = albums => ({
  type: FETCH_ALBUMS_SUCCESS,
  payload: { albums }
});

export const fetchAlbumsFailure = error => ({
  type: FETCH_ALBUMS_FAILURE,
  payload: { error }
});
