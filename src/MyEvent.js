export default function MyEvent(props) {
    // b. データ属性経由で追加データを取得
    function show(e) {
        console.log(`${props.greet}, ${e.target.value} ${e.target.dataset.suffix}!!`);
    }

    return (
        <form>
            <label htmlFor="txtName">名前：</label>
            {/* a. 入力変更時に show メソッドを呼び出し */}
            <input id="txtName" type="text" data-suffix="さん" onChange={show} />
        </form>
    )
}