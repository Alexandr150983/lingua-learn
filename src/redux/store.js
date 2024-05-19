import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import favoritesReducer from "./Favorites/favoritesSlice";
import authReducer from "./Auth/authSlice";
import { teachersReducer } from "./Teachers/teachersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const teachersPersistConfig = {
  key: "teachers",
  storage,
  whitelist: ["teachersData"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

export const rootReducer = combineReducers({
  teachers: persistReducer(teachersPersistConfig, teachersReducer),
  auth: persistReducer(authPersistConfig, authReducer),
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
