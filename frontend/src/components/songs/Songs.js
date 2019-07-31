import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from '../songs/Track';

class Songs extends Component {
    render() {
        return (
            <Consumer> 
                { value => {
                    const { track_list, heading} = value;

                    if(track_list === undefined || track_list.length === 0 ){
                        return <Spinner/>;
                    }else{
                        return(
                            <React.Fragment>
                                <div className="col-sm border border-dark">
                                    <h6 className="text-center mb-4">{heading}</h6>
                                    {track_list.map(item =>(
                                        <Track key = {item.track.track_id} track = {item.track}/>
                                    )
                                        )}
                                </div>
                            </React.Fragment>
                        );
                    }
                }}
            </Consumer>
        )
    }
}

export default Songs ;