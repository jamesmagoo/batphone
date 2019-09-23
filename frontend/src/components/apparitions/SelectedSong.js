import React, { Component, useContext } from 'react';
import { ApparitionContext} from '../../ApparitionContext';



const SelectedSong = () => {

    const value = useContext(ApparitionContext);

    return (
        <div>
            <React.Fragment>
               <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h3>...seeing now</h3>
                    <h1>{value.songID}</h1>
                    <br></br>
                    <h6>{value.track} by {value.artist}</h6>
                </div>
            </div>               
            </React.Fragment>
        </div>
    )
}

export default SelectedSong;