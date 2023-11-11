import { useState } from "react";

export default function MyList() {
    // b. Stateを初期化
    const [form, setForm] = useState({
        fruit: ['apple', 'melon']
    });
    // c. リストボックス変更時に選択値をStateに反映
    function handleChangeList(e) {
        // 選択値を格納するための配列
        const data = [];
        // <option>要素を順に走査し、選択されたものを取得
        const opts = e.target.options;
        for (const opt of opts) {
            if(opt.selected) {
                data.push(opt.value);
            }
        }
        setForm({
            ...form, 
            [e.target.name]: data
        });
    }
    // [送信]ボタンをクリック時に選択値をログ出力
    function show() {
        console.log(`好きな果物：${form.fruit}`);
    }
    // a. リストボックスを生成
    return (
        <form>
            <label htmlFor="fruit">好きな果物：</label><br />
            <select id="fruit" name="fruit" value={form.fruit} size="5" multiple={true} onChange={handleChangeList}>
                <option value="apple"> リンゴ </option>
                <option value="orange"> オレンジ </option>
                <option value="melon"> メロン </option>
                <option value="grape"> 葡萄 </option>
                <option value="strawberry"> 苺 </option>
            </select>
            <button type="button" onClick={show}> 送信 </button>
        </form>
    )
}
