import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import persistReducer from "./reducers/root";

// export default createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// const persistConfig = {
//   key: "root",
//   storage
// };
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
