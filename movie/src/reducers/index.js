import { ADD_MOVIES } from "../actions"
const initialMovieState={
  list:{},
  favourites:{}
}
export default function movies(state=initialMovieState,action){
  if(action.type==ADD_MOVIES){
      return {
         ...state,
         list:action.movies
      }
  }
  return state
}
//this part...ok what is you are not able to understand in this? why action.movies? see internally this resucer 
// will be called with two arguments state and action
// action will be nothing but a simple javascript object that we will be dispatching, let me show you