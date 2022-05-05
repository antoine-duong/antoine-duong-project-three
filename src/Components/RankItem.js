const RankItem = (props)=>{
    return (
        <li>
            <div className="section is-small">
            <h3 className="is-size-5 is-size-7-mobile has-text-weight-bold box">
                The date (or the closest date that has a snapshot of the ranking) is (
                    <span className="is-italic">
                        YYYYMMDD
                    </span>): 
                    <span className="is-size-3 is-size-5-mobile ml-2 has-text-primary">
                        {props.title}
                    </span>
            </h3>
            </div>
            <iframe 
            src = {props.snapshot}
            title={props.title} 
            sandbox=""
            >
                Your browser doesn't support iframe.
            </iframe>
        </li>
    );
}

export default RankItem;