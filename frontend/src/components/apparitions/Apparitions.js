import React, { Component } from 'react';
import ApparitionFeed from './ApparitionFeed';
import ApparitionInput from './ApparitionInput';
import SelectedSong from './SelectedSong';
import axios from 'axios' ; 

class Apparitions extends Component {

    state={
        song:{},
        artist:{}
    };

    // componentDidMount(){
    //     axios.get(`https://cors-anywhere.herokuapp.com/
    //     https://api.musixmatch.com/ws/1.1/
    //     track.get?commontrack_id=${this.props.match.params.id}
    //     &apikey=${process.env.REACT_APP_MM_KEY}`)
    //     .then(res => {
    //         console.log(res.data);
    //         this.setState({song : res.data.message.body.track});
    //     })
    //     .catch(err => console.log(err)) ;
  
    // };

    render() {
        return (
            <div className="col-sm border border-dark">
                <React.Fragment>
                    <SelectedSong/>
                    <ApparitionInput/>
                    <ApparitionFeed/>
                </React.Fragment>
            </div>
        )
    }
}
export default Apparitions;