import RankItem from "./RankItem";
import Error from './Error';

const RankList = (props)=>{
    return (
        <ul>
            {
                props.snapshot === "https://web.archive.org/web/20210324133309/http://placeholder/"
                ?
                <Error />
                :
                <RankItem 
                snapshot={ props.snapshot }
                title={ props.title }
                />
            }
        </ul>
    );
}

export default RankList;