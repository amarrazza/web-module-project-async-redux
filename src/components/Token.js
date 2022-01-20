import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getToken } from "../actions";

const Token = (props) => {
    const { error, isFetching, dispatch, token } = props;
    
    // useEffect(() => {
    //     dispatch(getToken());
    // }, []);

    if (error){
        return <h2> We got an error: {error}</h2>
    }

    if (isFetching){
        return <h2> Fetching token...</h2>
    }

    const handleClick = () => {
        dispatch(getToken())
    }

    return(
        <div>
            <h3>Token</h3>
            <p>{token.id.toUpperCase()}</p>
            {token.symbol && <img src={token.image.small} alt="token icon"/>}
            <p> </p>
            {token.symbol && <p>Ticker: {token.symbol}</p>}
            {token.symbol && <p>Current Price: {token.market_data.current_price.usd}</p>}
            {token.symbol && <p>Market Cap Rank: {token.coingecko_rank}</p>}
            <button onClick={handleClick}>Bitcoin Price</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        token: state.token,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(Token);