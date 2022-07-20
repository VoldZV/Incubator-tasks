import React from "react";

type ButtonType = {
    name: string
}

export const Button = (props: ButtonType) => {
    const clickKolya = () => console.dir(MouseEvent);
    const clickVasya = () => console.log('Нажал на меня Вася');

    const foo1 = () => {console.log(100200)};
    const foo2 = (num:number) => {console.log(`${num} с переданным аргументом`)}

    return (
        <div>
            <button key={11} onClick={clickKolya}>BUTTON Nikolay</button>
            <button key={12} onClick={clickVasya}>BUTTON Vasiliy</button>
            <div>
                <button onClick={foo1}>1</button>
                <button onClick={() => foo2(100200)}>2</button>
            </div>
        </div>
    )
}