import { render, screen } from '@testing-library/react'
import MyBook from './MyBook'

// a. MyCoverコンポーネントのモックを定義
jest.mock('./MyCover', () => {
    return function MyCoverMock(props) {
        return (
            <div>https://wings.msn.to/books/{props.isbn}/{props.isbn}.jpg</div>
        );
    };
});

// b. テストコードを定義
test('MyBook Nest', () => {
    const book = {
        isbn: 'WGS-JST-002',
        title: '速習 webpack 第２版',
        price: 500,
        publisher: 'WINGS プロジェクト'
    };
    const { debug, baseElement } = render(<MyBook info={book} />);
    const li = screen.getAllByRole('listitem');
    //c. MyBookコンポーネントの出力を確認
    debug(baseElement);
    // <li>要素が3個あること、最初の<li>要素が「速習 webpack」を含むことを確認
    expect(li).toHaveLength(3);
    expect(li[0]).toHaveTextContent('速習 webpack');
})
