import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";


export const getBitcoin = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get("https://api.coingecko.com/api/v3/coins/bitcoin")
        .then(resp => {
            console.log(resp.data);
            dispatch(fetchSuccess(resp.data));
        }).catch(err=> {
            dispatch(fetchFail(err));
        })
    
}

export const getEth = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get("https://api.coingecko.com/api/v3/coins/ethereum")
        .then(resp => {
            console.log(resp.data);
            dispatch(fetchSuccess(resp.data));
        }).catch(err=> {
            dispatch(fetchFail(err));
        })
    
}

export const getToken = (token) => (dispatch) => {
    dispatch(fetchStart());
    axios.get(`https://api.coingecko.com/api/v3/coins/${token}`)
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