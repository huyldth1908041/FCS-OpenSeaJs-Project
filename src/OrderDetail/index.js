import React from 'react';
import OrderImage from "./OderImage";
import OrderInfor from "./OrderInfor";

import {BiArrowBack} from "react-icons/all";

const OrderDetail = (props) => {
    const {order} = props;
    const clickHandler = e => {
        e.preventDefault();
        props.toggleDetail();
    }

    return (
        <section className="container asset-container">
            <a href="/" className="back-btn" onClick={clickHandler} title="Go back"><BiArrowBack size="3em"/></a>
            <div className="row">
                <OrderImage order = {order}/>
                <OrderInfor order = {order}/>
            </div>
        </section>
    )
}

export default OrderDetail;