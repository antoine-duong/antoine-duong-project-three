const RankList = (props)=>{
    return (
        <div className="rankListContainer">
            <iframe src={props.snapshot.url} title={props.inputDate}>Your browser doesn't support iframe.</iframe>
        </div>
    );
}

export default RankList;