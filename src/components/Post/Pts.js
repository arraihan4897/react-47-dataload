import React from 'react';
import {addToDB} from '../Utilities/Fakedb'

const Pts = (props) => {
    const {name,id,email,gender} =props.pt;
    const AddToCart=(id)=>{
        addToDB(id)
        // console.log('add to cart',id,name,gender,email);

    }
    // const addToCartWithParameter=()=>AddToCart(id)
    return (
        <div>
                         <h1> TITLE: {name}</h1>
          <h3>ID: {id}</h3>

            <p>{email}</p>
            <p>{gender}</p>
            <button onClick={()=>AddToCart(id)}>Add to cart</button>
            {/* <button onClick={addToCartWithParameter}>Add to cart with param</button> */}
            
        </div>
    );
};

export default Pts;