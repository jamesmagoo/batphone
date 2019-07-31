import React, { Component } from 'react'


class ApparitionButton extends Component {
    render() {
        return (
                <React.Fragment>
                <div className="input-group mb-4 border border-dark">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                    <input type="text" className="form-control" placeholder="Search Songs" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </React.Fragment>
        )
    }
}
export default ApparitionButton ;