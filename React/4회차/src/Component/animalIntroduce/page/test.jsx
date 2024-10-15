import React from 'react';
import { useParams } from 'react-router-dom';

const Test = ({formList}) => {
    const { id } = useParams()
    const animal = formList.find((animal) => animal.id === Number(id))

    if (!animal) {
        return <>동물을 찾을 수 없습니다.</>
    }
    return (
        <>
            <h1>{animal.name}</h1>
            <p>특징: {animal.feature}</p>
        </>
    );
};

export default Test;
