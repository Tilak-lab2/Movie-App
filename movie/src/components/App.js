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
    // currently movies coming from the data file, but ahead you will fetch from firebase then pass it here in dispatch function, got it ? yees
    store.dispatch(addMovies(data)) // here we are dispatching a object
    console.log('STATE',this.props.store.getState())
  }
  render(){

  
  const {list}=this.props.store.getState()
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
             {list.map((movie,index)=>{
             return  <Moviecard movie={movie} key={index} dispatch={this.props.store.dispatch}/>
             })}

           </div>
          </div>
        </div>
      </div>
    
  );
}
}
export default App;
