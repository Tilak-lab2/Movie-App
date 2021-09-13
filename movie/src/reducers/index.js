import { ADD_MOVIES,ADD_FAVOURITE } from "../actions"
const initialMovieState={
  list:{},
  favourites:{}
}
export default function movies(state=initialMovieState,action){
//   

//this part...ok what is you are not able to understand in this? why action.movies? see internally this resucer 
// will be called with two arguments state and action
// action will be nothing but a simple javascript object that we will be dispatching, let me show you
switch (action.type){
  case ADD_MOVIES:
    return{
      ...state,
      list:action.movies
    }
    case ADD_FAVOURITE:
      console.log(state.favourites)
      console.log(action.movie)
      const favourites=[]
      favourites.push(action.movie)
      favourites.push(state.favourites)
      return{
        ...state,
        favourites
      
      }
  default:
    return state
}
}