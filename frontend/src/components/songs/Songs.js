import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Track from '../songs/Track';
import SearchSongs from './SearchSongs';

class Songs extends Component {
    render() {
        return (
            <div>
            <React.Fragment >
            <SearchSongs/>
            <Consumer> 
                { value => {
                    const { track_list, heading} = value;

                    if(track_list === undefined || track_list.length === 0 ){
                        return <Spinner/>;
                    }else{
                        return(
                            <React.Fragment>
                                <div className="col-sm">
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
            </React.Fragment>
            </div>
        )
    }
}

export default Songs ;