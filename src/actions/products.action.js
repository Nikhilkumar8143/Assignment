import axios from 'axios';
import config from './../configs/config';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = (cb) => async dispatch => {
    let url = `${config.apiBaseUrl}580e9d5afe646582b562`
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
