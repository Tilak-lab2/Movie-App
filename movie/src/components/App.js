import  {data} from "../data"
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import React from "react";
import { addMovies } from "../actions";


class App extends React.Component {
  componentDidMount(){
    const{store}=this.props
    store.subscribe(()=>{
      console.log("UPDATED")
      this.forceUpdate()
    })
    store.dispatch(addMovies(data))
    console.log('STATE',this.props.store.getState())
  }
  render(){

  
  const movies=this.props.store.getState()
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='main'>
        <div className='tabs'>
          <div className='tab'>
            Movies
            </div>
            <div className='tab'>
              Favourites

            </div>
           <div className='list'>
             {movies.map((movie,index)=>{
             return  <Moviecard movie={movie} key={index}/>
             })}

           </div>
          </div>
        </div>
      </div>
    
  );
}
}
export default App;
