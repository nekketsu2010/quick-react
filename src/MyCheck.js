import { useState } from "react";

export default function MyCheck() {
    // b. Stateを初期化
    const [form, setForm] = useState({
        send: true
    });
    // c. チェックボックス変更時にチェック状態をStateに反映
    function handleChangeCheck(e) {
        setForm({
            ...form, 
            [e.target.name]: e.target.checked
        });
    }
    // [送信]ボタンをクリック時にチェック状態をログ出力
    function show() {
        console.log(`メール送付：${form.send ? '有効':'無効'}`);
    }
    // a. 単一のチェックボックスを生成
    return (
        <form>
            <label htmlFor="send"> メール送付？： </label>
            <input id="send" name="send" type="checkbox" checked={form.send} onChange={handleChangeCheck} /><br />
            <button type="button" onClick={show}> 送信 </button>
        </form>
    );
}
