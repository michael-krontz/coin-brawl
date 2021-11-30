import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'


const headlineIcon = <FontAwesomeIcon icon={faNewspaper} />
const searchIcon = <FontAwesomeIcon icon={faSearch} />
const tweetIcon = <FontAwesomeIcon icon={faRetweet} />

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
        Coin Brawl
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
