import { useLoaderData } from 'react-router-dom';

export default function MyBook() {
    const book = useLoaderData();
    return(
        <ul>
            <li>{book.title}</li>
            <li>{book.price}円</li>
            <li>{book.publisher}</li>
        </ul>
    );
}