import { useRouteError } from 'react-router-dom';

export default function MyError() {
    // a. ルートで発生した例外を取得
    const error = useRouteError();
    return <>
        <div>{error.message}</div>
    </>;
}
