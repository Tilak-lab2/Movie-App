export const ADD_MOVIES='ADD_MOVIES'
export const ADD_FAVOURITE="ADD_FAVOURITE"
export  function addMovies(movies){
  // this is the action object which will be recived by the reducer, 
  // therefore action.movies will give us all movies that we want to add, hope its clear now movies is coming from?
    return{
      type:ADD_MOVIES,
      movies
    }
  }
  
  export  function addFavourite(movie){
    // this is the action object which will be recived by the reducer, 
    // therefore action.movies will give us all movies that we want to add, hope its clear now movies is coming from?
      return{
        type:ADD_FAVOURITE,
        movie
      }
    }
    