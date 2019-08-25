import React from 'react';
import Fade from 'react-reveal/Fade';

const Apparition = (props) =>{
   const { apparitions } = props;
    return (
        <Fade bottom>
               <div className="mb-4">
                   <h6>{apparitions.author}</h6>
                   <h6>{apparitions.content}</h6>
                   <h6>{apparitions.created_at}</h6>
                </div> 
        </Fade>
    );
};

export default Apparition;