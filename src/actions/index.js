import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";


export const getToken = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get("https://api.coingecko.com/api/v3/coins/bitcsdsoin")
        .then(resp => {
            console.log(resp.data);
            dispatch(fetchSuccess(resp.data));
        }).catch(err=> {
            dispatch(fetchFail(err));
        })
    
}

export const fetchStart = () => {
    return ({type: FETCH_START})
}

export const fetchFail = (error) => {
    return ({type:FETCH_FAIL, payload: error})
}

export const fetchSuccess = (token) => {
    return ({type:FETCH_SUCCESS, payload: token})
}