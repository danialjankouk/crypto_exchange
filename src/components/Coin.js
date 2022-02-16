import React from "react";
import styles from "./Coin.module.css"
const Coin = ({ coinData }) => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.rank}>{coinData.market_cap_rank}</span>
        <img src={coinData.image} alt="coinImage"className={styles.logo} />
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
