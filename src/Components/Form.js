import { useState } from 'react';
import axios from 'axios';

const Form = (props)=>{
    // Write a function to accept the user's date input value
    const inputDateHandler = (e)=>{
        // console.log(e.target.value);
        props.setInputDate(e.target.value)
    }
    // Write another function to accept the user's choice of url
    const urlChoiceHandler = (e)=>{

    }

    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log("Hello");
        axios({
            baseURL: "http://archive.org/wayback/available",
            method: "GET",
            params: {
                url: "https://coinmarketcap.com/",
                timestamp: props.inputDate,
            }
        }).then((res)=>{
            props.setSnapshot(res.data.archived_snapshots.closest);
            // console.log(res.data.archived_snapshots.closest);
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
                            <select id="urlChoice" name="urlFilter">
                                <option value="placeholder" disabled>Pick one:</option>
                                <option value="coinMarketCap">Coin Market Cap</option>
                                <option value="coinGeck">Coin Gecko</option>
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