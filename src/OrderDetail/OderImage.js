import React from 'react';

const OrderImage = props => {
    const asset = props.order.asset;
    return (
        <div className="col-md-6">
            <div className="img-container">
                <img src={asset.imageUrl} alt={asset.name} className="asset-img"/>
            </div>
        </div>
    );
}

export default OrderImage;
