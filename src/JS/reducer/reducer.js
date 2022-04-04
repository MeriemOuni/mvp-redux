import { movieData } from "../../Components/MovieData"
import { ADD_MOVIE } from "../actionType"

const initialstate = {
    toggle : false,
    movieData 
}


const movieReducer = (state = initialstate, {type, payload}) => {
    switch (type) {
        case ADD_MOVIE: return {...state, movieData: [...state.movieData, payload]}

        default: return state;
    }
}


export default movieReducer