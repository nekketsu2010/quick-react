import { useRef } from "react";

export default function MyFile() {
    const file = useRef(null);
    function show() {
        const f = file.current.files[0];
        console.log(`ファイル名：${f.name}`);
        console.log(`種類：${f.type}`);
        console.log(`サイズ：${Math.trunc(f.size / 1024)}kB`);
    }
    return (
        <form>
            <input type="file" ref={file} />
            <button type="button" onClick={show}> 送信 </button>
        </form>
    );
}
