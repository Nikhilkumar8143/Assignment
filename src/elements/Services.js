import React from 'react';

const Items = (props) => {
    return (
        <ul>
            {props.listData && props.listData.map((data,i) => {
                return <li key={i}>
                    <div className="seller-block item-c">
                        <img className="item-img" src={data.img}/>
                        <div className="item-details flex-style">
                            <span className="item-title mr-10">{data.title}</span>
                            <p className="item-desp mr-10">{data.desp}</p>
                            <button className="discover-button">
                                Discover
                            </button>
                        </div>
                    </div>
                </li>
            })}
        </ul>
    )
};

export default Items;
