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

    if (Object.keys(error).length){
        // console.log(error);
        return <p> We got an error: {JSON.stringify(error)}</p>
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

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getToken(token.name.toLowerCase()));
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
            <div className="formWrapper">
                <form onSubmit={handleSubmit}>
                    
                    <div className="formField">
                        <input onChange={handleChange} placeholder="Token Name" type="text" name="name" value={token.name} />
                        <button type="submit">Find Token</button>
                    </div>
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