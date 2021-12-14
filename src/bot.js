const API = require('kucoin-node-sdk');

API.init(require('./config'));

const Main = async () => {
//   const getTimestampRl = await API.rest.Others.getTimestamp();
//   console.log(getTimestampRl.data);

// Buy
//   const res = await API.rest.Trade.Orders.postOrder({ clientOid: 'qwerty07070707', side: 'buy', symbol: 'UNB-USDT', type: 'market', funds: 20 });

// Sell
//   const res = await API.rest.Trade.Orders.postOrder({ clientOid: 'qwerty07070707', side: 'sell', symbol: 'DOGE-USDT', type: 'market', funds: 24 });

// Get Fiat Price List
  const res = await API.rest.Market.Currencies.getFiatPrice();
  console.log(res);
};

// run rest main
Main();
