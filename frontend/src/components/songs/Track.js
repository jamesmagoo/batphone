import React from 'react';
import { Link } from 'react-router-dom' ;


const Track = (props) => {
    const { track } = props;

    return (
            <div className="card mb-2 shadow-sm" >
               <div className="card-body" > 
                   <h6>{track.track_name} </h6>
                   <h6>{track.artist_name}</h6>
                </div>
                    <Link to={`/apparitions/song/${track.track_id}`} 
                    className="btn btn-dark btn-sm stretched-link"> 
                        >EYE LOGO>
                    </Link> 
                
            </div>
    )
};

export default Track;
