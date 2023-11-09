import { useState } from "react";

export default function MyChild(props) {
    // 個々のカウント値を管理（初期値は0）
    const [count, setCount] = useState(0);
    // ボタンクリックでカウントアップ
    function increment() {
        setCount(count + 1);
        // c. 親コンポーネントのupdate関数を呼び出す
        props.onUpdate();
    }
    return (
        <input type="button" value={count} onClick={increment} />
    );
}