import React from 'react';

type ButtonInputType = {
    name: string
    callback: () => void
}

export const ButtonInput = (props: ButtonInputType) => {

    const onClickButtonHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};
