import MyNew from "./MyNew";
import { useParams } from 'react-router-dom';

export default function MyArticle() {
    const params = useParams();
    function renderIfNew(isNew) {
        if (isNew) {
            return <MyNew />
        }
    }

    return (
        /*b. dt, dd要素をくくるダミーの要素*/
        <>
            <div>No.{params.id}の記事情報です！</div>
        </>
    );
}