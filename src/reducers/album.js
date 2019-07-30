const initialState = {
  data: [],
  loading: false,
  error: null,
  selectedAlbum: {}
};

export default function albumReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALBUMS_BEGIN":
      return { ...state, loading: true, error: null };
    case "FETCH_ALBUMS_SUCCESS":
      return { ...state, loading: false, data: action.payload.albums };
    case "FETCH_ALBUMS_FAILURE":
      return { ...state, loading: false, error: action.payload.error, data: [] };
    case "GET_ALBUM_DETAILS": {
      return { ...state, selectedAlbum: action.payload }
    }
    default: {
      return state;
    }
  }
}
