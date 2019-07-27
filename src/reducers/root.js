import albumReducer from "./album";
import userReducer from "./user";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["album", "form"]
}

const formPersistConfig = {
  key: "form",
  storage: storage,
  blacklist: ["albumSearch"]
}

const rootReducer = combineReducers({
  form: persistReducer(formPersistConfig, formReducer),
  user: userReducer,
  album: albumReducer
})

export default persistReducer(rootPersistConfig, rootReducer)

// const albumSearchConfig = {
//   key: "form",
//   storage,
//   blacklist: ["albumSearch"]
// }

// export default combineReducers({
//   albumReducer,
//   userReducer,
//   form: formReducer
// });
