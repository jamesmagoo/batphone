import React, { Component } from 'react';
import Apparition from '../apparitions/Apparition';

class ApparitionFeed extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-sm border border-dark">
                    <h6 className="text-center mb-4">Apparitions</h6>
                    <div> 
                        <Apparition/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default ApparitionFeed ;