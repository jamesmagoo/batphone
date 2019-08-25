import React, { Component } from 'react';
import Apparition from './Apparition';
import ApparitionInput from './ApparitionInput';
import SelectedSong from './SelectedSong';
import axios from 'axios' ; 

class Apparitions extends Component {

    state={
        apparitions : []
    };

    componentDidMount(){
         axios.get(`http://127.0.0.1:8000/api/`)
         .then(res => {
             console.log(res.data);
             this.setState({apparitions: res.data});
        })
         .catch(err => console.log(err)) ;
  
     };

    render() {
        return (
            <div className="col-sm">
                <React.Fragment>
                    <SelectedSong/>
                    <ApparitionInput/>
                    {this.state.apparitions.map(item =>(
                     <Apparition key = {item.id} apparitions = {item}/>
                                    ))}
                </React.Fragment>
            </div>
        )
    }
}
export default Apparitions;