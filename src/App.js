import './App.css';
import React from 'react';
import useAxios, { configure } from 'axios-hooks'
import Axios from 'axios'
import LRU from 'lru-cache'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faSearch, faRetweet, faUserCircle } from '@fortawesome/free-solid-svg-icons'
const headlineIcon = <FontAwesomeIcon icon={faNewspaper} />
const searchIcon = <FontAwesomeIcon icon={faSearch} />
const tweetIcon = <FontAwesomeIcon icon={faRetweet} />
const accountIcon = <FontAwesomeIcon icon={faUserCircle} />
var _ = require('lodash')

const axios = Axios.create({
  baseURL: 'https://api.kucoin.com/',
})

const cache = new LRU({ max: 10 })
configure({ axios, cache })

function DataFetch() {
  const [{ data: getData, loading: getLoading, error: getError }] = useAxios('/api/v1/prices')

  if (getLoading) return <p>Loading...</p>
  if (getError) return <p>Error!</p>
  if (getData) {
    fetchData()
  }

  function fetchData() {
    var cardData = getData  
    console.log(cardData.data)
  }

  return null
}


  let masterFeedRaw = []
  let coinNameArray = []
  let coinTickerArray = []
  
  let Parser = require('rss-parser');
  let parser = new Parser();
  
  (async () => {
  
    let feed = await parser.parseURL('https://cointelegraph.com/rss/tag/altcoin');
    console.log(feed.title);
  
    feed.items.forEach(item => {
      masterFeedRaw.push(item.title)
    });
    
    let masterFeedLowercased = (_.lowerCase(masterFeedRaw))
    let masterFeed = (_.split(masterFeedLowercased, ` `))
    
    let coinTicker1 = 'doge';
    let coinName1 = 'dogecoin'
    let coinTickerCount1 = [...masterFeed].filter(x => x === coinTicker1).length;
    let coinNameCount1 = [...masterFeed].filter(x => x === coinName1).length;
    let coinCount1 = coinTickerCount1 + coinNameCount1
  
    let coinTicker2 = 'shib';
    let coinName2 = 'shiba'
    let coinTickerCount2 = [...masterFeed].filter(x => x === coinTicker2).length;
    let coinNameCount2 = [...masterFeed].filter(x => x === coinName2).length;
    let coinCount2 = coinTickerCount2 + coinNameCount2
  
    let coinTicker3 = 'eth';
    let coinName3 = 'ethereum'
    let coinTickerCount3 = [...masterFeed].filter(x => x === coinTicker3).length;
    let coinNameCount3 = [...masterFeed].filter(x => x === coinName3).length;
    let coinCount3 = coinTickerCount3 + coinNameCount3
  
    let coinTicker4 = 'btc';
    let coinName4 = 'bitcoin'
    let coinTickerCount4 = [...masterFeed].filter(x => x === coinTicker4).length;
    let coinNameCount4 = [...masterFeed].filter(x => x === coinName4).length;
    let coinCount4 = coinTickerCount4 + coinNameCount4

    let coin1 = { 
      coinTicker: coinTicker1, 
      coinName: coinName1, 
      coinCount: coinCount1,
    }

    let coin2 = { 
      coinTicker: coinTicker2, 
      coinName: coinName2, 
      coinCount: coinCount2,
    }

    let coin3= { 
      coinTicker: coinTicker3, 
      coinName: coinName3, 
      coinCount: coinCount3,
    }

    let coin4 = { 
      coinTicker: coinTicker4, 
      coinName: coinName4, 
      coinCount: coinCount4,
    }

    // console.log(Object.values(coin1));
    // console.log(Object.values(coin2));
    // console.log(Object.values(coin3));
    // console.log(Object.values(coin4));

    let coins = [coin1, coin2, coin3, coin4]

    coins.sort((a, b) => b.coinCount - a.coinCount);  
    // coins.forEach((e) => {
    coinTickerArray.push(Object.values(coins[0]))
    coinTickerArray.push(Object.values(coins[1]))
    coinTickerArray.push(Object.values(coins[2]))
    coinTickerArray.push(Object.values(coins[3]))

    let coinRank1 = coinTickerArray[0]
    let coinRank2 = coinTickerArray[1]
    let coinRank3 = coinTickerArray[2]
    let coinRank4 = coinTickerArray[3]


    // coinNameArray.push(e.coinName)
  // });
  
    console.log(masterFeed)
    console.log("doge count: " + coinCount1)
    console.log("shib count: " + coinCount2)
    console.log("eth count: " + coinCount3)
    console.log("btc count: " + coinCount4)
    console.log("coinTickerArray: " + coinTickerArray[0])
    console.log("coinRank1: " + coinRank1)
    console.log("coinRank2: " + coinRank2)
    console.log("coinRank3: " + coinRank3)
    console.log("coinRank4: " + coinRank4)


  })();

function CoinCard() {
  const coinTicker1 = useRecoilValue(ticker1);
  const coinName1 = useRecoilValue(name1);
  const coinTicker2 = useRecoilValue(ticker2);
  const coinName2 = useRecoilValue(name2);
  const coinTicker3 = useRecoilValue(ticker3);
  const coinName3 = useRecoilValue(name3);
  const coinTicker4 = useRecoilValue(ticker4);
  const coinName4 = useRecoilValue(name4);

  return (
    <>
      <div className="coin-card">
          <div className="coin-card-header">
          <div className="coin-rank"></div>
            <h2 className="coin-ticker">{coinTicker1}</h2>
            <button className="buy-button">Buy</button>
          </div>

          <div className="coin-card-content">
            <div className="coin-card-content-left">
              <div className="coin-name">{coinName1}</div>
              <div className="coin-price-usd">$0.22</div>
              <div className="coin-price-ticker">+$0.000521 (0.24%)</div>
            </div>
            
            <div className="coin-card-content-right">
              <div className="stat-wrapper">
                <div className="headline-stat">7</div>
                <div className="headline-icon">{headlineIcon}</div>
              </div>

              <div className="stat-wrapper">
                <div className="twitter-stat">9.24k</div>
                <div className="twitter-icon">{tweetIcon}</div>
              </div>

              <div className="stat-wrapper">
                <div className="google-trend-stat">29k</div>
                <div className="google-icon">{searchIcon}</div>
              </div>
            </div>
          </div>
      </div>

      <div className="coin-card">
          <div className="coin-card-header">
          <div className="coin-rank"></div>
            <h2 className="coin-ticker">{coinTicker2}</h2>
            <button className="buy-button">Buy</button>
          </div>

          <div className="coin-card-content">
            <div className="coin-card-content-left">
              <div className="coin-name">{coinName2}</div>
              <div className="coin-price-usd">$0.22</div>
              <div className="coin-price-ticker">+$0.000521 (0.24%)</div>
            </div>
            
            <div className="coin-card-content-right">
              <div className="stat-wrapper">
                <div className="headline-stat">7</div>
                <div className="headline-icon">{headlineIcon}</div>
              </div>

              <div className="stat-wrapper">
                <div className="twitter-stat">9.24k</div>
                <div className="twitter-icon">{tweetIcon}</div>
              </div>

              <div className="stat-wrapper">
                <div className="google-trend-stat">29k</div>
                <div className="google-icon">{searchIcon}</div>
              </div>
            </div>
          </div>
      </div>
      
      <div className="coin-card">
          <div className="coin-card-header">
          <div className="coin-rank"></div>
            <h2 className="coin-ticker">{coinTicker3}</h2>
            <button className="buy-button">Buy</button>
          </div>

          <div className="coin-card-content">
            <div className="coin-card-content-left">
              <div className="coin-name">{coinName3}</div>
              <div className="coin-price-usd">$0.22</div>
              <div className="coin-price-ticker">+$0.000521 (0.24%)</div>
            </div>
            
            <div className="coin-card-content-right">
              <div className="stat-wrapper">
                <div className="headline-stat">7</div>
                <div className="headline-icon">{headlineIcon}</div>
              </div>

              <div className="stat-wrapper">
                <div className="twitter-stat">9.24k</div>
                <div className="twitter-icon">{tweetIcon}</div>
              </div>

              <div className="stat-wrapper">
                <div className="google-trend-stat">29k</div>
                <div className="google-icon">{searchIcon}</div>
              </div>
            </div>
          </div>
      </div>

      <div className="coin-card">
          <div className="coin-card-header">
          <div className="coin-rank"></div>
            <h2 className="coin-ticker">{coinTicker4}</h2>
            <button className="buy-button">Buy</button>
          </div>

          <div className="coin-card-content">
            <div className="coin-card-content-left">
              <div className="coin-name">{coinName4}</div>
              <div className="coin-price-usd">$0.22</div>
              <div className="coin-price-ticker">+$0.000521 (0.24%)</div>
            </div>
            
            <div className="coin-card-content-right">
              <div className="stat-wrapper">
                <div className="headline-stat">7</div>
                <div className="headline-icon">{headlineIcon}</div>
              </div>

              <div className="stat-wrapper">
                <div className="twitter-stat">9.24k</div>
                <div className="twitter-icon">{tweetIcon}</div>
              </div>

              <div className="stat-wrapper">
                <div className="google-trend-stat">29k</div>
                <div className="google-icon">{searchIcon}</div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

function JoinCard() {
  return (
    <div className="join-card">
      Coin Brawl Intro &
      Member Benefits
    </div>
  )
}

function JoinButton() {
  return (
    <button className="join-button">Join</button>
  )
}

const ticker1 = atom({
  key: 'ticker1', // unique ID (with respect to other atoms/selectors)
  default: 'DOGE', // default value (aka initial value)
});

const name1 = atom({
  key: 'name1', // unique ID (with respect to other atoms/selectors)
  default: 'Dogecoin', // default value (aka initial value)
});

const ticker2 = atom({
  key: 'ticker2', // unique ID (with respect to other atoms/selectors)
  default: 'SHIB', // default value (aka initial value)
});

const name2 = atom({
  key: 'name2', // unique ID (with respect to other atoms/selectors)
  default: 'Shiba Inu', // default value (aka initial value)
});

const ticker3 = atom({
  key: 'ticker3', // unique ID (with respect to other atoms/selectors)
  default: 'ETH', // default value (aka initial value)
});

const name3 = atom({
  key: 'name3', // unique ID (with respect to other atoms/selectors)
  default: 'Ethereum', // default value (aka initial value)
});

const ticker4 = atom({
  key: 'ticker4', // unique ID (with respect to other atoms/selectors)
  default: 'BTC', // default value (aka initial value)
});

const name4 = atom({
  key: 'name4', // unique ID (with respect to other atoms/selectors)
  default: 'Bitcoin', // default value (aka initial value)
});

// const coinsArray = atom({
//   key: 'coinsArray', // unique ID (with respect to other atoms/selectors)
//   default: [], // default value (aka initial value)
// });



function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <div className="header-wrapper">
            <div>Coin Brawl</div>
            <div className="account-icon">{accountIcon}</div>
          </div>
        </header>
        <DataFetch />
        <CoinCard></CoinCard>
        <JoinCard></JoinCard>
        <JoinButton></JoinButton>
      </div>
    </RecoilRoot>
  );
}

export default App;
