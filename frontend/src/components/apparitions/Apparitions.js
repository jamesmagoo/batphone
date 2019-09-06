import React, { Component } from 'react';
import Apparition from './Apparition';
import ApparitionInput from './ApparitionInput';
import SelectedSong from './SelectedSong';
import axios from 'axios' ; 

class Apparitions extends Component {

    state={
        apparitions : [],
        track : ['Venice Bitch'],
        artist : ['Lana Del Rey'],
        songID : ['123123'],
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
                    <SelectedSong 
                    track={this.state.track}
                    artist={this.state.artist}/>
                    <ApparitionInput placeholder={'Share your Apparition of ' + this.state.track + ' ...'} />
                    {this.state.apparitions.map(item =>(
                     <Apparition key = {item.id} apparitions = {item}/>
                                    ))}
                </React.Fragment>
            </div>
        )
    }
}
export default Apparitions;