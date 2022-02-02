import { ADD_MOVIE, GET_MOVIE, SEARCH_MOVIE_NAME, SEARCH_MOVIE_RATE } from "./actionType"




export const getMovie = (id) => {
    return{
        type: GET_MOVIE,
        payload: id
    }
    }

    export const addMovie = (newMovie) => {
        return{
            type: ADD_MOVIE,
            payload: newMovie
        }
        }

        export const searchByName = (id) => {
            return{
                type: SEARCH_MOVIE_NAME,
                payload: id
            }
            }

            export const searchByRate = (id) => {
                return{
                    type: SEARCH_MOVIE_RATE,
                    payload: id
                }
                }

