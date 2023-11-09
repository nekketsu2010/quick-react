import { useState } from "react";

export default function MyTextarea() {
    // Stateを初期化
    const [form, setForm] = useState({
        memo: `Reactは人気のフレームワーク…`
    });
    // テキストエリアの反映時に入力値をStateに反映
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    // [送信]ボタンクリック時に入力値をログ出力
    function show() {
        console.log(`メモ：${form.memo}`);
    }
    // テキストエリアを生成
    return (
        <form>
            <label htmlFor="memo">メモ：</label><br />
            <textarea id="memo" name="memo" cols="30" rows="7" value={form.memo} onChange={handleChange}></textarea><br />
            <button type="button" onClick={show}> 送信 </button>
        </form>
    )
}
