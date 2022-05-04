import { useState } from 'react';
import axios from 'axios';

const Form = (props)=>{
    // Write a function to accept the user's date input value
    const inputDateHandler = (e)=>{
        props.setInputDate(e.target.value)
    }
    // Write another function to accept the user's choice of url
    const [urlChoice, setUrlChoice] = useState('placeholder');
    const urlChoiceHandler = (e)=>{
        setUrlChoice(e.target.value);
    }
    // Write a function to fire the fetch call via Axios when all choices are selected
    const submitHandler = (e)=>{
        e.preventDefault();
        axios({
            baseURL: "https://archive.org/wayback/available",
            method: "GET",
            params: {
                url: urlChoice,
                timestamp: props.inputDate,
            }
        }).then((res)=>{
            // props.setSnapshot(res.data.archived_snapshots.closest);
            // console.log(res.data.archived_snapshots.closest);
            let url = res.data.archived_snapshots.closest.url;
            let urlCorrect = url.replace(/http:/, "https:");
            props.setSnapshot(urlCorrect);
        })
    } 

    return (
        <div className="columns">
            <div className="column"></div>
            <form className='block mx-6 my-4 column'>
                <div className="field">
                    <label htmlFor="urlChoice" className='label is-size-5 is-size-6-mobile'>Website</label>
                    <div className="control">
                        <div className="urlSelect select">
                            <select
                            value={urlChoice}
                            onChange={urlChoiceHandler}
                            id="urlChoice" 
                            name="urlChoice"
                            >
                                <option value="placeholder" disabled>Pick one:</option>
                                <option value="https://coinmarketcap.com/">Coin Market Cap</option>
                                <option value="https://www.coingecko.com/">Coin Gecko</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="dateValue" className='label is-size-5 is-size-6-mobile'>Desired date</label>
                    <div className="control">
                        <input 
                        onChange={inputDateHandler} 
                        type="text" 
                        className="input"
                        id="dateValue"
                        placeholder="YYYYMMDD"
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button onClick={submitHandler} className="button is-link is-size-5 is-size-6-mobile" type="submit">Take me back!</button>
                    </div>
                </div>
            </form>
            <div className="column"></div>
        </div>
    );
}

export default Form;