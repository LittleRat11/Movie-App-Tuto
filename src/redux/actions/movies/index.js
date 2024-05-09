import { actionTypes } from "../action-types"


export const fetchMovies = (movies) => {
    console.log(movies);
    return {
        type: actionTypes.FETCH_MOVIES,
        payload: movies
    }
}


export const selectedMovie = (movie) => {
    return {
        type: actionTypes.SELECTED_MOVIE,
        payload: movie
    }
}
export const removeSelectedMovie = (movie) => {
    return {
        type: actionTypes.REMOVE_SELECTED_MOVIE,
        payload: null
    }
}