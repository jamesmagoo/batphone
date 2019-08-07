import React, { Component } from 'react';

class ApparitionInput extends Component {
    render() {
        return (
            <div className="card card-body mb-4 p-4 text-center">
                        <form>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Share an Apparition..."
                                value={null}
                                onChange={null}
                                />
                            </div>
                        </form>
                    <button className="btn btn-dark mb" type="submit">Share</button>
            </div> 
        )
    }
}

export default ApparitionInput ;