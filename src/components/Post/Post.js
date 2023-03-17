import React, { useEffect, useState } from 'react';
import Pts from './Pts';

const Post = () => {
    const [pst,setPst]=useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setPst(data))
    },[])
    return (
        <div>
            {
                pst.map(pt=><Pts id={pt.id} name={pt.name} gender={pt.gender} email={pt.email} ></Pts>)
            }
        </div>
    );
};
// id={pt.id} title={pt.title} body={pt.body} 

// function FostFunction(props) {

//     return (
//         <div>
//             <h1> TITLE: {props.title}</h1>
//             <h3>ID: {props.id}</h3>

//             <p>{props.body}</p>
//         </div>
//     )
    
// }

export default Post;