import React from 'react';
import SalePrice from "../components/common/SalePrice";
import Account from "../components/Account";
import moment from "moment";

const OrderInfor = props => {
    const asset = props.order.asset;
    const ts = props.order.listingTime.toNumber() * 1000;
    const timeLabel = moment(ts).local().fromNow();
    return (
        <div className="col-md-6">

            <h1>{asset.name}</h1>
            <p>Offer by <Account account={props.order.makerAccount}/></p>
            <p>Collection: {asset.collection.name}</p>
            <p>Posted {timeLabel} </p>
            <div className="price"><SalePrice order={props.order}/></div>

            <button className="btn btn-primary btn-block buy-btn">Buy Now</button>

            <div className="description">
                <h3>Description</h3>
                <p>{asset.description}</p>
            </div>
        </div>
    )
}
export default OrderInfor;