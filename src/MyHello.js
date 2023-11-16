import { useNavigate } from 'react-router-dom';

export default function MyHello(props) {
    // b. navigate関数を取得
    const navigate = useNavigate();
    function onClick() {
        // a. トップページに移動
        navigate('/');
    }

    return <div>
        <div>こんにちは、{props.name}さん！</div>
        <input type='button' value=" トップへ移動 " onClick={onClick} />
        </div>;
}
