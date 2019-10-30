import React, { Component} from 'react';

class ApparitionInput extends Component {
 constructor(props){
     super(props);
     this.state ={
         user:'',
         apparition:'',
         songID:''
     };
     this.onChange = this.onChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
 }
    onChange(e){
        this.setState({ apparition: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();

        const post ={
            apparition : this.state.apparition
        }

        fetch('apparition/api/post', {
            method : 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }


    render() {
        return (
            <div className="card card-body mb-4 p-4 text-center">
                <form onSubmit = {this.onSubmit}>
                       <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                name="apparitionInput"
                                onChange={this.onChange}
                                placeholder = 'Create an Apparition...'
                                value={this.state.apparition}
                                />
                        </div>     
                </form>
                    <button className="btn btn-dark mb" type="submit" htmlType="submit" /**onClick={(event) => this.submitApparition(event)}*/>Plus EYE LOGO</button>
            </div> 
        )
    }
}

export default ApparitionInput ;