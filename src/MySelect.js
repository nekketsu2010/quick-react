import { useState } from "react";

export default function MySelect() {
    // Stateを初期化
    const [form, setForm] = useState({
        fruit: 'apple'
    });
    // 選択ボックス変更時に選択値をStateに反映
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    // [送信]ボタンクリック時に選択値をログ出力
    function show() {
        console.log(`好きな果物：${form.fruit}`);
    }
    // 選択ボックスを生成
    return (
        <form>
            <label htmlFor="fruit">好きな果物：</label>
            <select id="fruit" name="fruit" value={form.fruit} onChange={handleChange}>
                <option value="apple">りんご</option>
                <option value="orange">オレンジ</option>
                <option value="melon">メロン</option>
                <option value="grape">葡萄</option>
                <option value="strawberry">苺</option>
            </select>
            <button type="button" onClick={show}> 送信 </button>
        </form>
    );
}
