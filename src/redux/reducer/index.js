import { combineReducers } from "redux";
import { movieReducer } from "./movie";


const reducers = combineReducers({
    movieData: movieReducer
})

export default reducers