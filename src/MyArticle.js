import { useParams } from 'react-router-dom';

export default function MyArticle() {
    const params = useParams();
    // id値が範囲外であれば例外をスロー
    if (params.id <= 0 || params.id >= 1000) {
        throw new Error('idの値が不正です。');
    }

    return (
        /*b. dt, dd要素をくくるダミーの要素*/
        <>
            <div>No.{params.id}の記事情報です！</div>
        </>
    );
}