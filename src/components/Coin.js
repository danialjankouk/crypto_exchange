import React from 'react';

const Coin = ({coinData}) => {
    return (
        <>
        <div>
          <span>{coinData.market_cap_rank}</span>
          <img src={coinData.image} alt="coinImage" />
          <span>{coinData.name}</span>
          <span>{coinData.symbol.toUpperCase()}</span>
          <span>{coinData.current_price.toLocaleString()}</span>
          <span>{coinData.price_change_percentage_24h}</span>
          <span>{coinData.market_cap.toLocaleString()}</span>
        </div>
      </>
    );
};

export default Coin;