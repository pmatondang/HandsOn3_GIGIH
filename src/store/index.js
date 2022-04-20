import { configureStore } from "@reduxjs/toolkit";

import queryReducer from "./query-reducer";

export default configureStore({
  reducer: {
    query: queryReducer
  }
});