import { useState } from 'react';

const Form = ()=>{

    return (
        <form>
            <input type="text" className="dateInput"/>
            <div className="urlSelect">
                <select id="urlChoice" name="urlFilter">
                    <option value="placeholder" disabled>Pick one:</option>
                    <option value="coinMarketCap">Coin Market Cap</option>
                    <option value="coinGeck">Coin Gecko</option>
                </select>
            </div>
            <button type="submit">Bring me back!</button>
        </form>
    )
}

export default Form;