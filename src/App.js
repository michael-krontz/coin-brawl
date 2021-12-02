import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faSearch, faRetweet, faUserCircle } from '@fortawesome/free-solid-svg-icons'
const headlineIcon = <FontAwesomeIcon icon={faNewspaper} />
const searchIcon = <FontAwesomeIcon icon={faSearch} />
const tweetIcon = <FontAwesomeIcon icon={faRetweet} />
const accountIcon = <FontAwesomeIcon icon={faUserCircle} />
var _ = require('lodash')

let masterFeedRaw = []

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
  var coinTickerCount1 = [...masterFeed].filter(x => x === coinTicker1).length;

  let coinTicker2 = 'shib';
  var coinTickerCount2 = [...masterFeed].filter(x => x === coinTicker2).length;

  let coinTicker3 = 'eth';
  var coinTickerCount3 = [...masterFeed].filter(x => x === coinTicker3).length;

  console.log(masterFeed)
  console.log("doge count: " + coinTickerCount1)
  console.log("shib count: " + coinTickerCount2)
  console.log("eth count: " + coinTickerCount3)

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
      <JoinCard></JoinCard>
      <JoinButton></JoinButton>
    </div>
  );
}

export default App;
