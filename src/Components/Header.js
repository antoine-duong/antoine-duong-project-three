const Header = ()=>{
    return (
        <header className='hero has-background-primary'>
            <div className="hero-head has-text-left">
                <h1 className='title is-1 m-4'>MCTM</h1>
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <h2 className='subtitle is-3 ml-4 mb-4' aria-controls="dropdown-menu1">Market Cap Time Machine</h2>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu1" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <div className="icon-text">
                                    <span className="icon has-text-info">
                                        <i class="fas fa-info-circle"></i>
                                    </span>
                                    <span>What is it?</span>
                                </div>
                                <p className="block">
                                    MCTM allows anyone to have a look at the historical top ranking cryptocurrencies on <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer noopener">CoinMarketCap</a> or <a href="https://www.coingecko.com/" target="_blank" rel="noreferrer noopener">CoinGecko</a>.
                                </p>
                                <div className="icon-text">
                                    <span className="icon has-text-success">
                                        <i className="fas fa-arrow-trend-up"></i>
                                    </span>
                                    <span>Market Cap</span>
                                </div>
                                <p className="block">
                                    Market capitalization (or market cap) is the total dollar value of all the shares of a company’s stock — or, in the case of Bitcoin or another cryptocurrency, of all the coins that have been mined. In crypto, market cap is calculated by multiplying the total number of coins that have been mined by the price of a single coin at any given time.
                                </p>
                                <div className="icon-text">
                                    <span className="icon has-text-warning">
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </span>
                                    <span>Warning</span>
                                </div>
                                <p className="block">
                                    Some information is missing from your <a href="#">profile</a> details.
                                </p>
                                <div className="icon-text">
                                    <span className="icon has-text-danger">
                                        <i className="fas fa-ban"></i>
                                    </span>
                                    <span>Danger</span>
                                </div>
                                <p className="block">
                                    There was an error in your submission. <a href="#">Please try again</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;