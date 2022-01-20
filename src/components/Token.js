import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getBitcoin, getEth, getToken } from "../actions";
import TokenInfo from "./TokenInfo";

const Token = (props) => {
    const { error, isFetching, dispatch } = props;
    const [token, setToken] = useState({name: ""})
    
    // useEffect(() => {
    //     dispatch(getToken());
    // }, []);

    if (error){
        return <h2> We got an error: {error}</h2>
    }

    if (isFetching){
        return <h2> Fetching token...</h2>
    }

    const handleBitcoinClick = () => {
        dispatch(getBitcoin());
    }

    const handleEthClick = () => {
        dispatch(getEth());
    }

    const handleChange = (e) => {
        setToken({
            ...token,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        dispatch(getToken(token.name));
    }

    return(
        <div className="container">
            <h3>Up Only</h3>
            <div className="tokenWrapper">
                <TokenInfo />
            </div>
            <div className="majorButtons">
                <button onClick={handleBitcoinClick}>Bitcoin Info</button>
                <button onClick={handleEthClick}>Ethereum Info</button>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    
                    <div>
                        <label>Token Name</label>
                        <input onChange={handleChange} type="text" name="name" value={token.name} />
                    </div>
                    <button type="submit">Find Token</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(Token);