import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import sidebarSlice from './reducers/changeState';
import homeSlice from './reducers/homeSlice';
import { productReducer } from './reducers/productReducer';

const reducer = combineReducers({
  user: userReducer,
  products: productReducer,
  home: homeSlice,
  sidebar:sidebarSlice,
})

const middleware = [thunk]

const store = configureStore({
  reducer,
},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store







// import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { userReducer } from "./reducers/userReducer";
// import homeSlice from "./reducers/homeSlice";
// import { composeWithDevTools } from "redux-devtools-extension";

// const initialState = {
//   sidebarShow: true,
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }

// const middleware = [thunk];

// const reducer = combineReducers({
//   changeState,
//   home: homeSlice,
//   user: userReducer,
// })

// const store = configureStore({
//   reducer,
//   initialState},
//   composeWithDevTools(applyMiddleware( ...middleware))
// );

// export default store;

