import React from 'react';

const SellerDetails = (props) => {
    
    return (
        <ul>
            {
                props.listData && props.listData.map((data,i) => {
                    return <li key={i}>
                                <div className="seller-block">
                                <img className="shopping-img" src={data.img}/>
                                <div className="item-seller-details">
                                    <span className="item-title">{data.title}</span>
                                    <p className="item-desp">{data.desp}</p>
                                    <button className="discover-button">
                                        Discover
                                    </button>
                                </div>
                                <div className="seller-details">
                                    <p className="seller-name">{data.sellerName}</p>
                                    <p className="seller-location">{data.location}</p>
                                </div>
                            </div>
                    </li>
                })
            }
        </ul>
    )
};

export default SellerDetails;
