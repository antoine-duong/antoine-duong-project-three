const Article = ()=>{
    return (
        <article className='mt-3 mx-3 columns is-family-code is-size-6 is-size-7-mobile'>
            <div className='column has-background-link-light has-text-left m-1'>
                <p className="mb-1">At the moment of this writing, this app is designed specifically as an educational tool for those who wish to learn about the cryptocurrency market (<em>hover your cursor over the site name above for more info</em>).</p>
                <p className=" mb-1">As much as most crypto enthusiasts hate to admit, this space is quite crowded with scammers, shillers and piles of dead projects. If you find yourself getting bitten by the <a href="https://www.investopedia.com/terms/p/panicbuying.asp" className="has-text-black">FOMO</a> bug, simply cast a glance into the past and experience the votality of the market for yourself.</p>
            </div>
            <div className='column has-background-primary-light m-1'>
                <p className="has-text-right is-italic">That fear of missing out on things makes you miss out on everything.</p>
                <p className='has-text-right'><a href="https://en.wikipedia.org/wiki/Etty_Hillesum">Etty Hillesum</a> </p>
                <p className="has-text-right is-italic">I rekt myself before I check myself.</p>
                <p className='has-text-right has-text-link'>Josh, 16, Crypto Investor</p>
                <p className="has-text-right is-italic">I think bitcoin is on the verge of getting broad acceptance by conventional finance people.</p>
                <p className='has-text-right'><a href="https://twitter.com/Reuters/status/1356206956910940160">Elon Musk, prior to the 2021 pump (and dump)</a> </p>
            </div>
        </article>
    );
}

export default Article;