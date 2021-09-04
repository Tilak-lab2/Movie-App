import React from 'react'
import { render } from 'react-dom'
import "../index"

export default class Navbar extends React.Component {
   render(){
    return (
        <div className="App">
            <div className='search-container'>
                <input/>
                <button id="search-button">Search</button>

            </div>
        </div>
    )
   }
}
