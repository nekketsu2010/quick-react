import { useContext } from "react";
import { MyAppContext } from "./MyCount1";

export default function MyCount3() {
    // a. コンテキスト値を取得
    const { count, setCount } = useContext(MyAppContext);
    return (
        <div className="border">
            MyCount3
            <div>
                {/* b. コンテキスト値を更新＆参照 */}
                <input type="button" value=" カウント " onClick={ () => setCount(count + 1) } />
                <p>{count}回、クリックされました。</p>
            </div>
        </div>
    )
}
