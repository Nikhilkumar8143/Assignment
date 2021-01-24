import axios from 'axios';
import config from './../configs/config';

export const FETCH_JOBS = 'FETCH_JOBS';

export const fetchJobs = (cb) => async dispatch => {
    // console.log("workings3")
    // let url = `${config.apibaseurl}v1/feed`;
    let url = "https://api.npoint.io/85e5fb96d37cb40e297f"
    await axios.get(url).then(res => {
            dispatch({
                type: FETCH_JOBS,
                payload: res.data,
            });
            if (cb) cb(null, res.data);
            // console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
}


