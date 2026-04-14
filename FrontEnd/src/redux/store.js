import {combineReducers, configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import messageReducer from "./messageSlice.js"
import socketReducer from "./socketSlice"

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storageModule from 'redux-persist/lib/storage'

const storage = storageModule.default ?? storageModule

const persistConfig = {
  key: 'root',
  version: 1,
  storage, // ✅ use same variable
  whitelist: ['user'],
}


const rootReducer = combineReducers({
    user: userReducer,
    message: messageReducer,
    socket: socketReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
console.log("storage object:", storage);
console.log("storage.getItem:", storage?.getItem);
export const persistor = persistStore(store); 

export default store