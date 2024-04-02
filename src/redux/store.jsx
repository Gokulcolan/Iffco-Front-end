import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slice/userSlice";
import authReducer from "./slice/authSlice";
import adminReducer from "./slice/adminSlice";
// import { adminReducer } from "./slice/adminSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  // user: userReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
