import React from "react";

type MoneyType = {
    money: Array<MoneyBank>
}

type MoneyBank = {
    banknots: string,
    value: number,
    number: string
}

export const Money = (props: MoneyType) => {

    return (
        <ul>
            {props.money.map((mon, i) => {
                return (
                    <li key={i+1}>ДЕНЬГА {mon.banknots} | в кол-ве {mon.value} банкнот | номер купюры {mon.number} </li>
                )
            })}
        </ul>
    )
}