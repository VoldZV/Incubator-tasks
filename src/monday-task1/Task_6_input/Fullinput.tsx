import React, {ChangeEvent, useState} from 'react';

type Fullinput = {
    addMessage: (message: string) => void
}

export const Fullinput = (props: Fullinput) => {
    let [title, setTitle] = useState<string>('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title);
        setTitle('')
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    );
};

