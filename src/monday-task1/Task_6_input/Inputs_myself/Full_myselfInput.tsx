import React, {ChangeEvent, useState} from 'react';

type FullMyselfInput = {
    addTextMess: (inpText: string) => void
}


export const FullMyselfInput = (props: FullMyselfInput) => {

    const [inpValue, setInpValue] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInpValue(event.currentTarget.value)
    }

    const onClickBtnHandler = () => {
        props.addTextMess(inpValue)
        setInpValue('')
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={inpValue}/>
            <button onClick={onClickBtnHandler}>+</button>
        </div>
    );
};
