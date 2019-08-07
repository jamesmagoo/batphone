import React from 'react'

const Track = (props) => {
    const { track } = props;
    return (
            <div className="card mb-4 shadow-sm">
               <div className="card-body">
                   <h6>{track.track_name}</h6>
                   <h6>{track.artist_name}</h6>
                </div> 
                <a href="#" class="btn btn-dark btm-sm stretched-link">Apparition Eye</a>
            </div>
    )
}

export default Track;
