import React from 'react'

const Track = (props) => {
    const { track } = props;
    return (
            <div className="card mb-4 shadow-sm">
               <div className="card-body">
                   <h5>{track.track_name}</h5>
                   <h5>{track.artist_name}</h5>
                </div> 
            </div>
    )
}

export default Track;
