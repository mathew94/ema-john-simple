import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div style={{borderBottom:"1px solid lightgray", padding:"5px", marginLeft:"150px", marginBottom:"5px"}} className = "review-item">
            <h4 className = "product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
                className = "main-button"
                onClick = {() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;