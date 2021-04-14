import React from 'react';

const OrderDetail = (props) => {

    return(
        <div>
            <p>Detail Page</p>
            <p>for asset: {props.order.asset.name}</p>
            <button onClick={props.toggleDetail} className="test">Go Back</button>
        </div>
    )
}

export default OrderDetail;