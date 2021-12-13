 module.exports = {
    /** set API baseUrl, */
    /**   if not set this key, or empty, or false, or undefined, */
    /**   default baseUrl will be set by `process.env.PRODUCTION` */
    /**   if process.env.PRODUCTION === 'prod', the default value will be https://api.kucoin.io */
    /**   else use sandbox as https://openapi-sandbox.kucoin.io */
    baseUrl: 'https://api.kucoin.com',
    /** Auth infos */
    /**   key is API key */
    /**   secret is API secret */
    /**   passphrase as API passphrase */
    apiAuth: {
      key: '61b49686fde16200018ffa50',
      secret: '1ccd9e72-c1fd-4582-b2aa-f46022c7454e',
      passphrase: 'LDnFTpfuKeG9ze3'
    },
    authVersion: 2
  }