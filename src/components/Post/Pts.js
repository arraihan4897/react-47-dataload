import React from 'react';

const Pts = (props ) => {
    return (
        <div>
                         <h1> TITLE: {props.title}</h1>
          <h3>ID: {props.id}</h3>

            <p>{props.body}</p>
        </div>
    );
};

export default Pts;