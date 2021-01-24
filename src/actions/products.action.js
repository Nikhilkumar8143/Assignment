import axios from 'axios';
import config from './../configs/config';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = (cb) => async dispatch => {
    // let url = `${config.apibaseurl}v1/feed`;
    let url = `${config.apiBaseUrl}580e9d5afe646582b562`
    // let url = "https://api.npoint.io/580e9d5afe646582b562"
    console.log(url)
    await axios.get(url).then(res => {
            dispatch({
                type: FETCH_PRODUCTS,
                payload: res.data,
            });
            if (cb) cb(null, res.data);
    }).catch(err => {
        console.log(err)
    })
}
