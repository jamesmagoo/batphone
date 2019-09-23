import React, { Component, useState } from 'react';
import axios from 'axios';

const Context = React.createContext({
    apparitions:[],
    track: 'Star Treatment',
    artist:'Arctic Monkeys',
    songID:'dddd'
});

export class ApparitionProvider extends Component {
    
    // Assign state itself, and a default value for items
    state = {
        apparitions : [],
        track : ['aaa'],
        artist : ['aa'],
        songID : ['4444'],
    }

    // componentDidMount(){
    //     axios.get(`http://127.0.0.1:8000/api/apparitions/${this.props.match.params.songID}`)
    //     .then(res => {
    //     console.log(res.data);
    //     this.setState({apparitions: res.data});
    //     this.setState({songID: this.props.match.params.songID })
    //  })
    // .catch(err => console.log(err)) ;
    //}

    render() {
        return (
           <ApparitionContext.Provider value={this.state}>
               {this.props.children}
           </ApparitionContext.Provider>
        )
    }
}

export const ApparitionContext = Context.Consumer;