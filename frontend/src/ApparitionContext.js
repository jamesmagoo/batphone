import React, { Component, useState } from 'react';
import axios from 'axios';

const Context = React.createContext({
    apparitions:[],
    track: 'aasdf',
    artist:'asfas',
    songID:'sadfas'
});

export class ApparitionProvider extends Component {

     componentDidMount(){
         axios.get(`http://127.0.0.1:8000/api/apparitions/${this.props.match.params.songID}`)
         .then(res => {
         console.log(res.data);
         this.setState({apparitions: res.data});
         this.setState({songID: this.props.match.params.songID })
      })
     .catch(err => console.log(err)) ;
    }
    
    componentDidUpdate = (prevProps) => {
        if(this.props.match.params.songID !== prevProps.match.params.songID ) {
          // fetch the new product based and set it to the state of the component
          axios.get(`http://127.0.0.1:8000/api/apparitions/${this.props.match.params.songID}`)
            .then(res => {
            console.log(res.data);
            this.setState({apparitions: res.data});
            this.setState({songID: this.props.match.params.songID })
            })
            .catch(err => console.log(err)) ;
            };
        };

    render() {
        return (
           <ApparitionContext.Provider value={this.state}>
               {this.props.children}
           </ApparitionContext.Provider>
        )
    }
}

export const ApparitionContext = Context.Consumer;