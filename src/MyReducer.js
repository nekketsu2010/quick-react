import { useReducer } from "react";

export default function MyReducer() {
    // a. StateとReducerを準備
    const [state, dispatch] = useReducer(
        // Stateを更新するための関数（Reducer）
        (state, action) => {
            switch (action.type) {
                // b. PLUS操作ではカウンター値をインクリメント
                case 'PLUS':
                    return { count: state.count + 1 };
                // c. それ以外の操作では現在のState値をそのまま返す
                default:
                    return state;
            }
        },
        // Stateの初期値
        {
            count: 0
        }
    );
    // d. Reducer経由でStateを更新
    function increment() {
        dispatch({ type: 'PLUS' });
    }
    // コンポーネントによる描画内容
    return (
        <>
            <input type="button" value=" カウント " onClick={increment} />
            <p>{state.count}回、クリックされました。</p>
        </>
    )
}
