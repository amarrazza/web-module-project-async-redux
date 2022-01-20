import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS } from "../actions";

const initialState = {
    token: {
        id: "",
        symbol: "",
        market_data: {
            current_price: {
                usd: null,
            },
            price_change_percentage_24h: null,
        },
        coingecko_rank: null,
        image: {
            small: "",
        },
        
    },
    isFetching: false,
    error: {}
};

export const tokenReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                token: {},
                isFetching: true,
                error: ''
            };
        case FETCH_FAIL:
            return {
                ...state,
                token: {},
                isFetching: false,
                error: action.payload
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isFetching: false,
                error: ''
            }
        default:
            return state;
    }
}