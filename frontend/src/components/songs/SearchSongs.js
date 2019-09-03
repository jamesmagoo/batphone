import React, { Component } from 'react' ;
import axios from 'axios';
import { Consumer } from '../../context';

 class SearchSongs extends Component {
    state = {
        songTitle: ''
    }

    findSong = (dispatch , e) =>{
        e.preventDefault();

        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?
        q.track=${this.state.songTitle}&page_size=20&page=1&s_track_rating=desc&s_artist_rating=desc
        &apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            //console.log(res.data);
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });

            this.setState({songTitle: ''});
        })
        .catch(err => console.log(err)) ;
  
    }

    onChange = e =>{
        this.setState({ songTitle: e.target.value});
    };

    render() {
        return (
            <Consumer>
                {value=>{
                    const { dispatch } = value;
                    return(
                       <div className="card card-body mb-4 p-4 text-center">
                        <form onSubmit={this.findSong.bind(this, dispatch)}>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Song title..."
                                name="songTitle"
                                value={this.state.songTitle}
                                onChange={this.onChange}
                                />
                            </div>
                        </form>
                        <button className="btn btn-dark mb" type="submit" onClick={this.findSong.bind(this, dispatch)}>Search</button>
                       </div> 
                    );
                }}
            </Consumer>
        )
    }
}

export default SearchSongs ;