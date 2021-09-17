import React from 'react'
import "../index"
import { addFavourite } from '../actions'
 class Moviecard extends React.Component {
   Favouriteclick=()=>{
       const {movie}=this.props
       this.props.dispatch(addFavourite(movie))
   }
    render(){
       const {movie,isFavourite}=this.props
    return (
        <div className='movie-card'>
            <div className='left'>
               <img alt="Movie Poster"  src={movie.Poster}></img>
            </div>
            <div className='right'>
               <div className='title'>{movie.Title}</div>
               <div className='plot'>{movie.Plot}</div>
               <div className='footer'>
                   <div className='rating'>
                       {movie.imdbRating}
                   </div>
                   {
                       isFavourite
                       ?<button className='favourite-btn' onClick={this.isMovie}></button>
                   }
                   <button className='favourit-btn' onClick={this.Favouriteclick}>
                    Favourite   
                   </button>
                   
                   </div> 
            
            </div>
            
        </div>
    )
   }
}
export default Moviecard
