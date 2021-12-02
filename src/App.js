import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faSearch, faRetweet, faUserCircle } from '@fortawesome/free-solid-svg-icons'
const headlineIcon = <FontAwesomeIcon icon={faNewspaper} />
const searchIcon = <FontAwesomeIcon icon={faSearch} />
const tweetIcon = <FontAwesomeIcon icon={faRetweet} />
const accountIcon = <FontAwesomeIcon icon={faUserCircle} />
var _ = require('lodash')

let masterFeedRaw = []
let coinArray = []

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

  let coins = [
    {
      coinTicker: coinTicker1, 
      coinName: coinName1, 
      coinCount: coinCount1,
    },

    {
      coinTicker: coinTicker2, 
      coinName: coinName2, 
      coinCount: coinCount2,
    },
  
    {
      coinTicker: coinTicker3, 
      coinName: coinName3, 
      coinCount: coinCount3,
    },
    
    {
      coinTicker: coinTicker4, 
      coinName: coinName4, 
      coinCount: coinCount4,
    }
  ]

coins.sort((a, b) => b.coinCount - a.coinCount);

coins.forEach((e) => {
  coinArray.push(e.coinTicker)
});

  console.log(masterFeed)
  console.log("doge count: " + coinCount1)
  console.log("shib count: " + coinCount2)
  console.log("eth count: " + coinCount3)
  console.log("btc count: " + coinCount4)
  console.log("coinArray: " + coinArray)

})();


function CoinCard() {
  return (
    <div className="coin-card">
        <div className="coin-card-header">
        <div className="coin-rank"></div>
          <h2 className="coin-ticker">DOGE</h2>
          <button className="buy-button">Buy</button>
        </div>

        <div className="coin-card-content">
          <div className="coin-card-content-left">
            <div className="coin-name">Dogecoin</div>
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-wrapper">
          <div>Coin Brawl</div>
          <div className="account-icon">{accountIcon}</div>
        </div>
      </header>
      <CoinCard></CoinCard>
      <CoinCard></CoinCard>
      <CoinCard></CoinCard>
      <CoinCard></CoinCard>
      <JoinCard></JoinCard>
      <JoinButton></JoinButton>
    </div>
  );
}

export default App;
