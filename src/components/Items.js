import React from 'react';
import ShoppingImg from '../assets/img/shopping.jpg';

const Items = (props) => {
    return (
        <div className="seller-block item-c">
            <img className="item-img" src={ShoppingImg}/>
            <div className="item-details flex-style">
                <span className="item-title mr-10">Title</span>
                <p className="item-desp mr-10">No matter how far along you are in your sophistication as an amateur</p>
                <button className="discover-button">
                    Discover
                </button>
            </div>
        </div>
    );
};

export default Items;
