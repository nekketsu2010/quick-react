export default function MyAttrMulti(props) {
    return {
        <ul>
            <li>{props.name}</li>
            <li>{props.age}歳</li>
            <li>{props.sex}</li>
        </ul>
    };
}
