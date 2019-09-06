import React, { Component } from 'react';

class ApparitionInput extends Component {

    state = {

        apparitionInput :''
    }

    submitApparition = (event) =>{
        event.preventDefault();
        const apparitionInput = event.target.elements.apparitionInput.value;

        console.log(apparitionInput);

    }
    render() {
        return (
            <div className="card card-body mb-4 p-4 text-center">
                        <form onSubmit={(event) => this.submitApparition(event)} label="apparitionInput">
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                name="apparitionInput"
                                placeholder={this.props.placeholder}
                                value={null}
                                onChange={null}
                                />
                            </div>
                        </form>
                    <button className="btn btn-dark mb" type="submit" htmlType="submit" onClick={(event) => this.submitApparition(event)}>Plus EYE LOGO</button>
            </div> 
        )
    }
}

export default ApparitionInput ;