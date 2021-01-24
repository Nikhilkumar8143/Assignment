import React from 'react';
import searchicon from '../assets/img/search-icon.png';

const SearchBlock = (props) => {

    const buttonClicked = (e) => {
        props.subcriberData(e.currentTarget.value)
    }


    return (
        <div className="search-block flex-style">
            <div className="s-section1 flex-style">
                <p className="s-section1-desp">
                    Find Great Deals Customized For Your Need
                </p>
                <div className="global-search-box">
                    <input type="text" name="" className="form-control" placeholder="Search service or product" />
                    <img className="search-img" src={searchicon} alt="Bolkar Search,बोलकर सवाल खोजें" />
                </div>
                <div className="search-options flex-style">
                    <ul className="options-radio flex-style">
                        <li className="radio-item">
                        <input type="radio" id="product" name="ritem" value="products" onChange={(e) => buttonClicked(e)} defaultChecked/>
                        <label htmlFor="product">Product</label></li>
                        <li className="radio-item"><input type="radio" name="ritem" id="service" value="services" onChange={(e) => buttonClicked(e)}/>
                        <label htmlFor="service">Service</label></li>
                        <li className="radio-item"><input type="radio" name="ritem" id="jobs" value="jobs" onChange={(e) => buttonClicked(e)}/>
                        <label htmlFor="jobs">Jobs</label></li>
                    </ul>
                    <a className="adv-search">
                        Advanced Search
                    </a>
                </div>
            </div>
            <div className="div-al"><i className="arrow left"></i></div>
            <div className="div-ar"><i className="arrow right"></i></div>
        </div>
    );
};

export default SearchBlock;
