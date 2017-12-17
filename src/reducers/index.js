import {combineReducers} from "redux";
import  getVideos from "./videos";
import {routerReducer} from 'react-router-redux';

let rootReducer = combineReducers({
  routing: routerReducer,
  getVideos
});

export default rootReducer;