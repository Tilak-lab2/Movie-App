import React from 'react'

export default class Moviecard extends React.Component {
   render(){
       const {movie}=this.props
    return (
        <div className='movie-card'>
            <div className='left'>
               <img className='left' src={movie.Poster}></img>
            </div>
            <div className='right'>
               <div className='title'>{movie.Title}</div>
               <div className='plot'>{movie.Plot}</div>
               <div className='footer'>
                   <div className='rating'>
                       {movie.imdbRating}
                   </div>
                   <button className='favourit-btn'>
                    Favourite   
                   </button>
                   
                   </div> 
            
            </div>
            
        </div>
    )
   }
}
