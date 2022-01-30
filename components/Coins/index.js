import styles from './Coins.module.css';
import Link from 'next/link';
import React from 'react';

const Coins = ({ id, image, name, symbol, price, change_percentage_24h, volume_24h, market_cap}) => {
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div>
            <div className={styles.coin_container}>
              <div className={styles.coin_row}>

                <div className={styles.coin}>
                  <img src={image} alt={name} className={styles.coin_img}/>
                  <h1 className={styles.coin_h1}>{name}</h1>
                  <p className={styles.coin_symbol}>{symbol}</p>
                </div>

                <div className={styles.coin_data}>
                  <p className={styles.coin_price}> ${price.toFixed(2).toLocaleString()} </p>
                  <p className={styles.coin_volume}>${volume_24h.toLocaleString()} </p>
                  <p className={`styles.coin_percent ${change_percentage_24h < 0 ? styles.red : styles.green}`}>{change_percentage_24h.toFixed(2)}%</p>
                  <p className={styles.coin_market_cap}>${market_cap.toLocaleString()}</p>
                </div>
              </div>
            </div>
        </div>
      </a>
    </Link>
  );
  
};

export default Coins;
