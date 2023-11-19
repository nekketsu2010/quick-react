import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyState from './MyState';

test('MyState Test', async () => {
    // a. userEventオブジェクトを準備
    const ev = userEvent.setup();
    render(<MyState />);
    // 目的の要素を取得
    const btn = screen.getByRole('button');
    const cnt = screen.getByText(/クリック/);
    // b. ボタンをクリック＆その結果を確認
    await ev.click(btn);
    expect(cnt).toHaveTextContent('1 回');
})
