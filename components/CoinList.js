import Coins from "./Coins";

export default function CoinList({filteredCoins}) {
    return (
        <>
        {filteredCoins.map(coin => {
            return <Coins
                    key={coin.id}
                    id={coin.id}
                    rank={coin.market_cap_rank}
                    image={coin.image}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    change_percentage_24h={coin.market_cap_change_percentage_24h}
                    volume_24h={coin.total_volume}
                    market_cap={coin.market_cap}
                    />;
        })}
        </>
    );
}