import React, { Component } from 'react';
import ApparitionList from './ApparitionList';
//import ApparitionInput from './ApparitionInput';
import SelectedSong from './SelectedSong';
import { ApparitionContext } from '../../ApparitionContext' ;


class Apparitions extends Component {

    render() {
        return (
                <div className="col-8">
                    <React.Fragment>
                        <SelectedSong/>
                        {/* <ApparitionInput/> */}
                        <ApparitionList/>
                    </React.Fragment>
                </div>
        )
    }
}

export default Apparitions;