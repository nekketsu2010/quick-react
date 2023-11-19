import { useContext, useMemo } from "react";
import { MyAppContext } from "./MyAppContext";

export default function MyCount3() {
    // a. コンテキスト値を取得
    const { count, setCount } = useContext(MyAppContext);
    return useMemo(() => {
        // ログを出力
        console.log('MyCount3 is updated.');
        return (
            <div className="border">
                MyCount3
                <div>
                    {/* b. コンテキスト値を更新＆参照 */}
                    <input type="button" value=" カウント " onClick={ () => setCount(count + 1) } />
                    <p>{count}回、クリックされました。</p>
                </div>
            </div>
        );
    }, [count, setCount])
}
