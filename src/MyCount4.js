import { useContext } from "react";
import { MyAppContext } from "./MyAppContext";

export default function MyCount4() {
    const { count2, setCount2 } = useContext(MyAppContext);
    // ログを出力
    console.log('MyCount4 is updated.');
    // count2を更新
    return (
        <div className="border">
            MyCount4
            <div>
                <input type="button" value=" カウント2 " onClick={ () => setCount2(count2 + 1) } />
                <p>{count2}回、クリックされました。</p>
            </div>
        </div>
    )
}
