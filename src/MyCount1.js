import { createContext, useState } from "react";
import './App.css';
import MyCount2 from './MyCount2';

// a. Contextオブジェクトを準備
export const MyAppContext = createContext();

export default function MyCount1() {
    // c. コンテキストとして渡すべき値を準備
    const [count, setCount] = useState(0);
    const c = { count, setCount };

    return (
        // b. コンテキストに値を引き渡す
        <MyAppContext.Provider value={c}>
            <div className="border">
                MyCount1
                <p>{count}回、クリックされました。</p>
                <MyCount2 />
            </div>
        </MyAppContext.Provider>
    )
}

