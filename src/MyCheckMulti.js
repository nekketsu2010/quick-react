import { useState } from "react";

export default function MyCheckMulti() {
    const [form, setForm] = useState({
        fruit: ['apple', 'melon']
    });
    function handleChangeMulti(e) {
        const fs = form.fruit;
        if (e.target.checked) {
            fs.push(e.target.value);
        } else {
            fs.splice(fs.indexOf(e.target.value), 1);
        }
        setForm({
            ...form, 
            [e.target.name]: fs
        });
    }
    function show() {
        console.log(`好きな果物：${form.fruit}`);
    }
    return (
        <form>
            <fieldset>
                <legend>好きな果物：</legend>
                <label htmlFor="fruit_apple"> リンゴ </label>
                <input id="fruit_apple" name="fruit" type="checkbox" value='apple' checked={form.fruit.includes('apple')} onChange={handleChangeMulti} /><br />
                <label htmlFor="fruit_orange"> オレンジ </label>
                <input id="fruit_orange" name="fruit" type="checkbox" value='orange' checked={form.fruit.includes('orange')} onChange={handleChangeMulti} /><br />
                <label htmlFor="fruit_melon"> メロン </label>
                <input id="fruit_melon" name="fruit" type="checkbox" value='melon' checked={form.fruit.includes('melon')} onChange={handleChangeMulti} /><br />
                <label htmlFor="fruit_grape"> 葡萄 </label>
                <input id="fruit_grape" name="fruit" type="checkbox" value='grape' checked={form.fruit.includes('grape')} onChange={handleChangeMulti} /><br />
                <label htmlFor="fruit_strawberry"> 苺 </label>
                <input id="fruit_strawberry" name="fruit" type="checkbox" value='strawberry' checked={form.fruit.includes('strawberry')} onChange={handleChangeMulti} /><br />                
            </fieldset>
            <button type="button" onClick={show}> 送信 </button>
        </form>
    )
}
