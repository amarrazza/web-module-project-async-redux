import React from "react";
import { connect } from "react-redux";

const TokenInfo = (props) => {

    const { token } = props;

    return(
        <div className="tokeninfo">
            <p className="tokenName">{token.id.toUpperCase()}</p>
            {token.symbol && <img src={token.image.small} alt="token icon"/>}
            <p> </p>
            {token.symbol && <p>Ticker: {token.symbol}</p>}
            {token.symbol && <p>Current Price: ${token.market_data.current_price.usd} &nbsp; {token.market_data.price_change_percentage_24h}%</p>}
            {token.symbol && <p>Market Cap Rank: {token.coingecko_rank}</p>}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        token: state.token,
    };
};

export default connect(mapStateToProps)(TokenInfo);