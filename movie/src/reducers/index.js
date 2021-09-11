export default function movies(state=[],aciotn){
  if(action.type=='ADD_MOVIES'){
      return action.movies
  }
  return state
}