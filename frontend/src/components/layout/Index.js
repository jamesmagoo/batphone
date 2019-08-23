import React from 'react'
import Songs from '../songs/Songs';
import Apparitions from '../apparitions/Apparitions';

const Index = () => {
    return (
        <React.Fragment>
            <div container>
            <div className="row">
                <div className="col-8">
                    <Apparitions/>
                </div>
                <div className="col-4">
                    <Songs/>
                </div>
            </div>
            </div>
        </React.Fragment>
        
        
    )
}
export default Index;