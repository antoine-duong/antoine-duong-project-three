const RankList = (props)=>{
    // let url = props.snapshot.url.toString;
    // let urlCorrect = url.replace('http:', "https:")
    return (
        <div className="rankListContainer">
            <iframe 
            src = {props.snapshot} 
            title={props.inputDate} 
            sandbox=""
            >
                Your browser doesn't support iframe.
            </iframe>
        </div>
    );
}

export default RankList;