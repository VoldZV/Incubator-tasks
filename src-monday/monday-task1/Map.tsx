import React from "react";

type NewComponentType = {
    // students: Array<StudentType>
    students: StudentType[] //можно прописать типизацию и так
}

type StudentType = {
    id: number,
    name: string,
    age: number
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((el, i) => {
                return (
                    <li key={i + 1}>{`id ${el.id} name: ${el.name} age ${el.age}`}</li>
                )
            })}
        </ul>
    )
}

type TopCarsType = {
    topCars: Array<CarType>
    // topCars: CarType[]
}

type CarType = {
    manufacturer: string,
    model: string
}

export const CarsTable = (props: TopCarsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>MANUFACTURER</th>
                <th>MODEL</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((car, i) => {
                return (
                    <tr key={i+1}>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export const students = [
    {id: 1, name: 'Robert', age: 23},
    {id: 2, name: 'Ivan', age: 34},
    {id: 3, name: 'Fedor', age: 21},
    {id: 4, name: 'John', age: 19},
    {id: 5, name: 'Kim', age: 18},
];

export const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

