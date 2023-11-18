import { useState, useEffect } from "react";

export default function MyState(props) {
    // a. Stateの初期値を設定
    const [count, setCount] = useState(0);

    // コンポーネントの（再）描画時に実行
    useEffect(() => {
        const t = setInterval(() => {
            setCount(c => c + 1);
        }, 1000);

        return () => {
            clearInterval(t);
        };
    }, []);

    // c. count値をインクリメント（イベントハンドラー）
    function increment() {
        setCount(count + 1);
    }
    return (
        <>
        <input type="button" value=" カウント " onClick={increment} />
        {/* b. countの値をページに反映 */}
        <p>{count} 回、クリックされました。</p>
        </>
    )
}