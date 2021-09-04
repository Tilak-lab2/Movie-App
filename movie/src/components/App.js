import  {data} from "../data"
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='main'>
        <div className='tabs'>
          <div className='tab'>
            <div className='favourites'>

            </div>
           <div className='list'>
             {data.map(movie=>{
               <Moviecard movie={movie}/>
             })}

           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
