import { useParams } from 'react-router-dom';

export default function MyArticle() {
    const params = useParams();

    return (
        /*b. dt, dd要素をくくるダミーの要素*/
        <>
            <div>No.{params.id}の記事情報です！</div>
        </>
    );
}