import MyNew from "./MyNew";

export default function MyArticle(props) {
    return (
        /*b. dt, dd要素をくくるダミーの要素*/
        <>
            <dt>
                <a href={props.url}>
                    {props.title}
                </a>
                { props.isNew ? <MyNew /> : null }
            </dt>
            <dd>
                {props.description}
            </dd>
        </>
    );
}