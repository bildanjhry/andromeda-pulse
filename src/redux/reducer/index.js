import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import session from "./session.js"
import accounts from "./accounts.js"
import storage from "redux-persist/es/storage"

const persistReducerAccountsConfig = {
  key:"accounts",
  storage
}

const persistReducerSessionConfig = {
  key:"session",
  storage
}

const reducer = combineReducers({
  accounts:persistReducer(persistReducerAccountsConfig, accounts),
  session:persistReducer(persistReducerSessionConfig, session)
})

export default reducer