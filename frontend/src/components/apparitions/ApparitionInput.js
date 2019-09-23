import React, { Component, useContext} from 'react';
//import { ApparitionContext } from '../../ApparitionContext';

class ApparitionInput extends Component {

    // submitApparition = (e) =>{

    // }

    //static context = ApparitionContext; 

    render() {
        //let value = this.context;
        return (
            <div className="card card-body mb-4 p-4 text-center">
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                name="apparitionInput"
                                //placeholder={value.songID}
                                //value={null}
                                //onChange={null}
                                />
                            </div>
                    <button className="btn btn-dark mb" type="submit" htmlType="submit" /**onClick={(event) => this.submitApparition(event)}*/>Plus EYE LOGO</button>
            </div> 
        )
    }
}

export default ApparitionInput ;