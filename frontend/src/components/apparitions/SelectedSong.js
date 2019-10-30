import React, { Component, useContext } from 'react';
import { Consumer } from '../../context';

 
const SelectedSong = (props) => {
    return (
        <Consumer>
            {value=>{
                return(
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h3>...seeing now</h3>
                            <h8>{value.songID}</h8>
                            <br></br>
                            <h1>{value.track} by {value.artist}</h1>
                        </div>
                    </div>   
                    )
            }}           
        </Consumer>
    )
    
}


export default SelectedSong;