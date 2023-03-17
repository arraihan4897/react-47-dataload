import React from 'react';

const Pts = (props) => {
    return (
        <div>
                         <h1> TITLE: {props.name}</h1>
          <h3>ID: {props.id}</h3>

            <p>{props.email}</p>
            <p>{props.gender}</p>
            
        </div>
    );
};

export default Pts;