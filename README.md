#Exchange Rate

This is a simple SPA application displaying exchange rates served by Česká Národní Banka (ČNB). You can find more info about the API [here](https://www.cnb.cz/en/faq/format_of_the_foreign_exchange_market.html).

# Build
* Clone the repository
* Cd project _root_ directory and perform `yarn`
* Cd _proxyServer_ directory and perform `yarn`
* Return to project _root_ directory
* Perform 'yarn run dev' (this will concurrently run both - client and server)

# Techstack
* React
* Sementic UI component library
* Axios for sending HTTP requests
* NodeJS/Express used for proxy server

# Proxy server
ČNB API does not support CORS. Therefore it was necessary to create proxy server to intercept request/response from/to client and in this way bypass browser CORS restriction. 



