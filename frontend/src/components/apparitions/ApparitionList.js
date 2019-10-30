import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Apparition from './Apparition';



class ApparitionList extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Consumer>
                        { value => {
                            const{apparitions} = value;

                            if(apparitions === undefined || apparitions.length === 0){
                                return <h6 className="text-center">There are no Apparitions yet for this song :( Break the ice</h6>;
                            }else{
                                return(
                                    <React.Fragment>
                                        <div>
                                            <h1 className="text-center mb-4">Apparitions</h1>
                                            {apparitions.map(item =>(
                                            <Apparition apparition = {item.apparitions}/>
                                            )
                                            ) }
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        }}
                    </Consumer>
                </React.Fragment>
            
            </div>
        )
    }
}
export default ApparitionList ;