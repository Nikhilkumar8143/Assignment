import axios from 'axios';
import config from './../configs/config';

export const FETCH_JOBS = 'FETCH_JOBS';

export const fetchJobs = (cb) => async dispatch => {
    let url = `${config.apiBaseUrl}85e5fb96d37cb40e297f`;
    await axios.get(url).then(res => {
            dispatch({
                type: FETCH_JOBS,
                payload: res.data,
            });
            if (cb) cb(null, res.data);
    }).catch(err => {
        console.log(err)
    })
}


