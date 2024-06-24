import { createSelector } from "@reduxjs/toolkit";

const selectAuthState = (state) => state.auth;

const selectEmail = createSelector(selectAuthState, (auth) => auth.email);

const selectToken = createSelector(selectAuthState, (auth) => auth.token);

const selectIsAuth = createSelector(selectAuthState, (auth) => !!auth.email);

export { selectEmail, selectToken, selectIsAuth };
