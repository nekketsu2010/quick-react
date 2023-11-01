export default function MyEvent(props) {
    // 入力ボックス変更時にメッセージを出力
    function show(e, suffix) {
        // b. greet属性、入力値に基づいて、メッセージを生成
        console.log(`${props.greet}, ${e.target.value} ${suffix}!!`);
    }

    return (
        <form>
            <label htmlFor="txtName">名前：</label>
            {/* a. 入力変更時に show メソッドを呼び出し */}
            <input id="txtName" type="text" onChange={e => show(e, 'さん')} />
        </form>
    )
}