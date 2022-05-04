const Header = ()=>{
    return (
        <header className='hero has-background-primary'>
            <div className="hero-head">
                <h1 className='is-family-code is-size-1 is-size-4-mobile has-text-weight-bold has-text-white m-4'>MCTM</h1>
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <h2 className='is-family-code is-size-3 is-size-6-mobile has-text-weight-semibold has-text-white ml-4 mb-4' aria-controls="dropdown-menu1">Market Cap Time Machine</h2>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu1" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">

                                <div className="icon-text is-justify-content-center">
                                    <span className="icon has-text-info">
                                        <i className="fas fa-info-circle is-size-5 is-size-7-mobile"></i>
                                    </span>
                                    <span className="is-size-5 is-size-6-mobile">What is it?</span>
                                </div>
                                <p className="block is-size-6 is-size-7-mobile">
                                    MCTM allows anyone to review the historical rankings of the largest cryptocurrencies by market cap on <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer noopener">CoinMarketCap</a> or <a href="https://www.coingecko.com/" target="_blank" rel="noreferrer noopener">CoinGecko</a>.
                                </p>

                                <div className="icon-text is-justify-content-center">
                                    <span className="icon has-text-warning">
                                        <i className="fas fa-gear is-size-5 is-size-7-mobile"></i>
                                    </span>
                                    <span className="is-size-5 is-size-6-mobile">How to use:</span>
                                </div>
                                <p className="block is-size-6 is-size-7-mobile">
                                    Simply choose a website from the dropdown menu and enter a date (<em>YYYYMMDD</em>).
                                </p>

                                <div className="icon-tex is-justify-content-center">
                                    <span className="icon has-text-success">
                                        <i className="fas fa-arrow-trend-up is-size-5 is-size-7-mobile"></i>
                                    </span>
                                    <span className="is-size-5 is-size-6-mobile">Market Cap</span>
                                </div>
                                <p className="block is-size-6 is-size-7-mobile">
                                    Market capitalization (or market cap) is the total dollar value of all the shares of a company’s stock — or, in the case of Bitcoin or another cryptocurrency, of all the coins that have been mined. In crypto, market cap is calculated by multiplying the total number of coins that have been mined by the price of a single coin at any given time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;