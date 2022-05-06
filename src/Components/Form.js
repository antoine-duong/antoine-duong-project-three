import axios from 'axios';

const Form = (props)=>{
    // Write a function to accept the user's date input value
    const inputDateHandler = (e)=>{
        // Converting date input into the YYYYMMDD format accepted by the API - Note: apparently the default (return) value format of type="date" is not always YYYY-MM-DD - depending on the browser.
        let inputText = e.target.value;
        let inputTextFixed = inputText.replace(/-/g,"");
        props.setInputDate(inputTextFixed);
    }
    // Write another function to accept the user's choice of url
    const urlChoiceHandler = (e)=>{
        props.setUrlChoice(e.target.value);
    }
    // Write a function to fire the fetch call via Axios when all choices are selected
    const submitHandler = (e)=>{
        e.preventDefault();
        axios({
            baseURL: "https://archive.org/wayback/available",
            method: "GET",
            params: {
                url: props.urlChoice,
                timestamp: props.inputDate,
            }
        }).then((res)=>{
            // Converting the url into secured url to avoid blocked mixed active content
            let urlUnsecured = res.data.archived_snapshots.closest.url;
            let urlSecured = urlUnsecured.replace(/http:/, "https:");
            props.setSnapshot(urlSecured);
            props.setTitle(res.data.timestamp)
        })
    } 

    return (
        <div className="columns">
            <div className="column"></div>
            <form className='column'>
                <div className="field">
                    <label htmlFor="urlChoice" className='label is-size-4 is-size-6-mobile'>
                        <span className="icon has-text-primary mr-2">
                            <i className="fas fa-window-maximize is-size-5 is-size-7-mobile"></i>
                        </span>
                        Website
                    </label>
                    <div className="control">
                        <div className="urlSelect select is-link">
                            <select
                            value={props.urlChoice}
                            onChange={urlChoiceHandler}
                            id="urlChoice"
                            name="urlChoice"
                            >
                                <option value="placeholder" disabled>Pick one:</option>
                                <option value="https://coinmarketcap.com/">Coin Market Cap</option>
                                <option value="https://www.coingecko.com/en">Coin Gecko</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="dateValue" className='label is-size-4 is-size-6-mobile'>
                        <span className="icon has-text-primary mr-2">
                            <i className="fas fa-calendar-days is-size-5 is-size-7-mobile"></i>
                        </span>
                        Date
                    </label>
                    <div className='is-flex is-justify-content-center'>
                        <div className="control">
                            <input 
                            onChange={inputDateHandler} 
                            type="date"
                            min="2014-01-02"
                            className="input has-text-centered is-link"
                            id="dateValue"
                            // placeholder="YYYYMMDD"
                            />
                        </div>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button onClick={submitHandler} className="button is-link is-size-5 is-size-6-mobile" type="submit">
                            <span className="icon has-text-white mr-2">
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