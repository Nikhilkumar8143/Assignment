import axios from 'axios';
import config from './../configs/config';

export const FETCH_SERVICES = 'FETCH_SERVICES';

export const fetchServices = (cb) => async dispatch => {
    let url = `${config.apiBaseUrl}45b9f84888084d5d7574`;
    await axios.get(url).then(res => {
            dispatch({
                type: FETCH_SERVICES,
                payload: res.data,
            });
            if (cb) cb(null, res.data);
    }).catch(err => {
        console.log(err)
    })
}




