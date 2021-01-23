import React from 'react';
import ShoppingImg from '../assets/img/shopping.jpg';

const SellerDetails = (props) => {
    return (
        <div className="seller-block">
            <img className="shopping-img" src={ShoppingImg}/>
            <div className="item-seller-details">
                <span className="item-title">Title</span>
                <p className="item-desp">No matter how far along you are in your sophistication as an amateur</p>
                <button className="discover-button">
                    Discover
                </button>
            </div>
            <div className="seller-details">
                <p className="seller-name">Seller name</p>
                <p className="seller-location">Westbangal,Kolkata</p>
            </div>
        </div>
    );
};

export default SellerDetails;
