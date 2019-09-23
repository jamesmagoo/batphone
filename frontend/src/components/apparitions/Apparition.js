import React from 'react';
import Fade from 'react-reveal/Fade';

const Apparition = (props) =>{

   const { apparition } = props;
   
    return (
        <Fade bottom>
               <div className="mb-4">
                   <h6>{apparition.author}</h6>
                   <h6>{apparition.content}</h6>
                   <h6>{apparition.created_at}</h6>
                </div> 
        </Fade>
    );
};

export default Apparition;