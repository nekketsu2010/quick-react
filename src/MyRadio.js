import { useState } from "react";

export default function MyRadio() {
    // Stateを初期化
    const [form, setForm] = useState({
        sex: 'female'
    });
    // ラジオボタン変更時に選択値をStateに反映
    function handleChange(e) {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        });
    }
    // [送信]ボタンクリック時に選択値をログ出力
    function show() {
        console.log(`メモ：${form.sex}`);
    }
    // ラジオボタンリストを生成
    return (
        <form>
            <fieldset>
                <legend> 性別： </legend>
                <label htmlFor="sex_male"> 男性 </label>
                <input id="sex_male" name="sex" type="radio" value='male' checked={form.sex === 'male'} onChange={handleChange} /><br />
                <label htmlFor="sex_female"> 女性 </label>
                <input id="sex_female" name="sex" type="radio" value='female' checked={form.sex === 'female'} onChange={handleChange} /><br />
                <label htmlFor="sex_other"> その他 </label>
                <input id="sex_other" name="sex" type="radio" value='other' checked={form.sex === 'other'} onChange={handleChange} /><br />
            </fieldset>
            <button type="button" onClick={show}> 送信 </button>
        </form>
    );
}
