const API = require('kucoin-node-sdk');

API.init(require('./config'));

const main = async () => {
  const getTimestampRl = await API.rest.Others.getTimestamp();
  console.log(getTimestampRl.data);

  // const res = await API.rest.Trade.Orders.postOrder({ clientOid: 'qwerty07070707', side: 'buy', symbol: 'DOGE-USDT', type: 'market', size: 18.75 });
  const res = await API.rest.Market.Currencies.getFiatPrice();
  console.log(res);
};

// run rest main
main();