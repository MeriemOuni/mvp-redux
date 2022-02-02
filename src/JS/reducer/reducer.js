import { movieData } from "../../Components/MovieData"
import { ADD_MOVIE, GET_MOVIE, SEARCH_MOVIE_NAME, SEARCH_MOVIE_RATE } from "../actionType"

const initialstate = {
    toggle : false,
    movieData 
}


const movieReducer = (state = initialstate, {type, payload}) => {
    switch (type) {
        case GET_MOVIE: return{...state, movieData: [...state.movieData, payload]}
        case ADD_MOVIE: return {...state, movieData: [...state.movieData, payload]}
        case SEARCH_MOVIE_NAME: return {...state, movieData: [...state.movieData, payload]}  
        //case SEARCH_MOVIE_RATE: return {}
        default: return state;
    }
}


export default movieReducer