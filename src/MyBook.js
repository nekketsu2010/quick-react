import MyCover from './MyCover';

export default function MyBook(props) {
    return(
        <div>
            <MyCover isbn={props.info.isbn} />
            <ul>
            <li>{props.info.title}</li>
            <li>{props.info.price}円</li>
            <li>{props.info.publisher}</li>
        </ul>
        </div>
    );
}