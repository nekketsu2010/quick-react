import { useRef } from "react";

export default function MyFormUn() {
    // a. React要素に紐つける参照を準備
    const name = useRef(null);
    const email = useRef(null);   
    const checkbox = useRef(null);
    // c. 参照経由で入力値を取得
    function show() {
        console.log(`name: ${name.current.value}`);
        console.log(`email: ${email.current.value}`);
        console.log(`checkbox: ${checkbox.current.checked}`);
    }
    // フォームを描画
    return (
        <form>
            {/* b. 準備した参照を個々の要素と紐づけ */}
            <div>
                <label htmlFor="name">名前：</label>
                <input id="name" name="name" type="text" ref={name} defaultValue="山田太郎" />
            </div>
            <div>
            <label htmlFor="email">メールアドレス：</label>
            <input id="email" name="email" type="mail" ref={email} defaultValue="tyamada@example.com" />
            </div>
            <div>
                <input id="checkbox" type="checkbox" name="checkbox" ref={checkbox} defaultChecked />
                <label htmlFor="checkbox">チェックボックス</label>
            </div>
            <div>
                <button type="button" onClick={show}> 送信 </button>
            </div>
        </form>
    )
}
