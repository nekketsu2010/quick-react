import { useSearchParams } from 'react-router-dom';

export default function MyQueryArticle() {
    // a. クエリ情報を取得
    const [params, setParams] = useSearchParams();
    return <div>No.{params.get('id')}の記事情報です！</div>
}
