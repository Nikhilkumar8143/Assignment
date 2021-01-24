/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SearchBlock from '../components/SearchBlock';
import SellerDetails from '../elements/SellerDetails';
import Services from '../elements/Services';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/products.action';
import { fetchServices } from '../actions/services.action';
import { fetchJobs } from '../actions/jobs.action';

const defaultProps = {}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData:[],
            activeListName:"products"
        }
        this.getSelectedData = this.getSelectedData.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this._loadData();
    }

    componentWillUnmount() {
    }

    _loadData() {
        window.scrollTo(0, 0);
        this.props.fetchProducts((err, data) => {
            if (!err) {
                this.setState({
                    listData: data
                })
            }
        })
    }

    getSelectedData(selected) {
        let props = this.props;
        this.setState({activeListName:selected})
        if(selected === "products"){
            props.fetchProducts((err, data) => {
                if (!err) {
                    this.setState({
                        listData: data
                    })
                }
            })
        } else if(selected === "services"){
            props.fetchServices((err, data) => {
                if (!err) {
                    this.setState({
                        listData: data
                    })
                }
            })
        } else {
            props.fetchJobs((err, data) => {
                if (!err) {
                    this.setState({
                        listData: data
                    })
                }
            })
        } 
    }

    render() {
        let props = this.props;
        let { listData,activeListName } = this.state;
        return (
            <>
                <div className="top-block">
                    <SearchBlock subcriberData={(selected) => this.getSelectedData(selected)}/>
                    <div className="middle-block">
                        {activeListName === "products" && <SellerDetails listData={listData} activeListName={activeListName}/>}
                        {activeListName === "services" && <Services listData={listData} activeListName={activeListName}/>}
                        {activeListName === "jobs" && <SellerDetails listData={listData} activeListName={activeListName}/>}
                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        products: state.products,
        services: state.services,
        jobs: state.jobs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (cb) => dispatch(fetchProducts(cb)),
        fetchServices: (cb) => dispatch(fetchServices(cb)),
        fetchJobs: (cb) => dispatch(fetchJobs(cb))
    }
}

HomePage.defaultProps = defaultProps;
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

