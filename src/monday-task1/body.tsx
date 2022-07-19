type BodyType = {
    titleBody: string
}

export const Body = (props: BodyType) => {
    return (
        <div>
            {props.titleBody}
        </div>
    )
}