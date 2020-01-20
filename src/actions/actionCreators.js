import { ADD_MOVIE, REMOVE_MOVIE, SET_VISIBILITY_FILTER,SHOW_TITLE,EDIT_MOVIE } from './actionTypes'

let MovieId = 4

export const addMovie = (title, description, image, rating)  => ({
    type: ADD_MOVIE,
    id: MovieId++,
   //id: movies[movies.length - 1] + 1,
    title,
    description,
    image,
    rating
})

export const deleteMovie = (id) => ({
    type: REMOVE_MOVIE,
    id: id
})

export const editMovie = (id,title, description, image, rating) => ({
    type: EDIT_MOVIE,
  id,
    title,
    description,
    image,
    rating
})

// export const openForm = showForm => ({
//     type: OPEN_FORM,
//     payload: showForm
//   });
export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter: filter
  })