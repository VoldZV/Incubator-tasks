import React from 'react';

type ButtonInputMyselfType = {
    name: string
    callback: () => void
}

export const ButtonInputMyself = (props: ButtonInputMyselfType) => {

    const onClickBtnHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickBtnHandler}>{props.name}</button>
    );
};
