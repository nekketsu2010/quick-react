import { useReducer } from "react";

export default function MyReducerEx() {
    const [state, dispatch] = useReducer((state, action) => {
        // a. アクションの種類に応じて処理を分岐
        switch (action.type) {
            case 'PLUS':
                return { count: state.count + action.step };
            case 'MINUS':
                return { count: state.count - action.step };
            case 'RESET':
                return { count: 0 };
            default:
                return state;
        }
    }, {
        count: 0
    });
    // ボタンクリック時に呼び出されるイベントハンドラー
    function increment() {
        dispatch({ type: 'PLUS', step: 5 });
    }
    function decrement() {
        dispatch({ type: 'MINUS', step: 5 });
    }
    function reset() {
        dispatch({ type: 'RESET' });
    }

    // コンポーネントによる描画内容
    return (
        <>
            <input type="button" value=" カウントアップ " onClick={increment} />
            <input type="button" value=" カウントダウン " onClick={decrement} />
            <input type="button" value=" リセット " onClick={reset} />
            <p>{state.count}回、クリックされました。</p>
        </>
    )
}
