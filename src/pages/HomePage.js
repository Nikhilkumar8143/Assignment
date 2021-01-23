import React from 'react';
import SearchBlock from '../components/SearchBlock';
import SellerDetails from '../components/SellerDetails';
import Items from '../components/Items';

const defaultProps = {}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
    }


    render() {
        let props = this.props;
        return (
            <>
                <div className="top-block">
                    <SearchBlock/>
                    <div className="middle-block">
                        <SellerDetails/>
                        <Items/>
                    </div>
                </div>
            </>
        )
    }

}

HomePage.defaultProps = defaultProps;
export default HomePage;
