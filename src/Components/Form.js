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
            let urlUnsecured = res.data.archived_snapshots.closest.url;
            let urlSecured = urlUnsecured.replace(/http:/, "https:");
            props.setSnapshot(urlSecured);
            props.setTitle(res.data.timestamp)
        })
    } 

    return (
        <div className="columns">
            <div className="column"></div>
            <form className='block mx-6 my-4 column'>
                <div className="field">
                    <label htmlFor="urlChoice" className='label is-size-4 is-size-6-mobile'>
                        <span className="icon has-text-primary mr-2">
                            <i className="fas fa-window-maximize is-size-5 is-size-7-mobile"></i>
                        </span>
                        Website
                    </label>
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
                    <label htmlFor="dateValue" className='label is-size-5 is-size-6-mobile'>
                        <span className="icon has-text-primary mr-2">
                            <i className="fas fa-calendar-days is-size-5 is-size-7-mobile"></i>
                        </span>
                        Desired date
                    </label>
                    <div className="control">
                        <input 
                        onChange={inputDateHandler} 
                        type="text" 
                        className="input has-text-centered"
                        id="dateValue"
                        placeholder="YYYYMMDD"
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button onClick={submitHandler} className="button is-link is-size-5 is-size-6-mobile" type="submit">
                            <span className="icon has-text-primary mr-2">
                                <i className="fas fa-clock-rotate-left is-size-5 is-size-7-mobile"></i>
                            </span>
                            Take me back!
                        </button>
                    </div>
                </div>
            </form>
            <div className="column"></div>
        </div>
    );
}

export default Form;