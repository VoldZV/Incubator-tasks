import React, {ChangeEvent} from 'react';

type InputMyselfType = {
    callback: (title:string) => void
    value: string
}

export const InputMyself = (props: InputMyselfType) => {

    const onChangeInpHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callback(event.currentTarget.value)
    }

    return (
        <input onChange={onChangeInpHandler} value={props.value}/>
    );
};
