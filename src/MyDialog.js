import { useState } from "react";
import { createPortal } from "react-dom";
import './App.css';

export default function MyDialog() {
    // ダイアログの開閉状態を表すState（既定はfalseで閉じた状態）
    const [show, setShow] = useState(false);
    return (
        <form>
            <input type="button" value=" ダイアログ開閉 "
                onClick={ () => setShow(!show) } />
            {/* a. show 値に応じてダイアログを生成 */}
            {show && createPortal(
                <div className="panel">
                    <p>Portalの例です。</p>
                </div>,
                document.getElementById('panel')
            )}
        </form>
    )
}
