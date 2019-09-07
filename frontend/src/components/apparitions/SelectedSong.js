import React, { Component } from 'react';


class SelectedSong extends Component {
        render() {
        return (
            <React.Fragment>
               <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h3>...seeing now</h3>
                    <h1>{this.props.songID}</h1>
                    <br></br>
                    <h6>{this.props.track} by {this.props.artist}</h6>
                </div>
            </div>               
            </React.Fragment>
        )
    }
}

export default SelectedSong ;