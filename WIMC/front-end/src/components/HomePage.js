import React from 'react';
import Header from './Header';
import CoinContainer from './CoinContainer';
export default function HomePage(props) {
    return (
        <React.Fragment>
            <Header/>
            <CoinContainer isLoggedIn={props.isLoggedIn} coinsInfo={props.coinsInfo}/>
        </React.Fragment>
    )
}
