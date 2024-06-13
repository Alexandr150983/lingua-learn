import { createSelector } from "@reduxjs/toolkit";

const selectAuthState = (state) => state.auth;

const selectEmail = createSelector(selectAuthState, (auth) => auth.email);

const selectToken = createSelector(selectAuthState, (auth) => auth.token);

const selectId = createSelector(selectAuthState, (auth) => auth.id);

const selectIsAuth = createSelector(selectAuthState, (auth) => !!auth.email);

export { selectEmail, selectToken, selectId, selectIsAuth };
