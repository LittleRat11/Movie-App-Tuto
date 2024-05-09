import { actionTypes } from "../../actions/action-types"

const initialState = {
    movies: [{
        name: 'Hello World',
        desc: 'lorem ipsum'
    }],
    movie: {}
}

export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_MOVIES:
            return {
                ...state,
                movies: payload
            }
        case actionTypes.SELECTED_MOVIE:
            return {
                ...state,
                movie: payload
            }
        case actionTypes.REMOVE_SELECTED_MOVIE:
            return {
                ...state,
                movie: {}
            }
        default:
            return state
    }
}