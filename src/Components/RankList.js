const RankList = (props)=>{
    return (
        <div>
            <iframe 
            src = {props.snapshot}
            title={props.title} 
            sandbox=""
            >
                Your browser doesn't support iframe.
            </iframe>
        </div>
    );
}

export default RankList;