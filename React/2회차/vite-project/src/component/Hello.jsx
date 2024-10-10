import React, { useState } from 'react';

const Hello = () => {
    const [inputText, setInputText] = useState('');

    function hi(e) {
        e.preventDefault();

        setInputText(e.target.value);
    }

    function handleSubmit() {
        alert(`제출된 값: ${inputText}`);
    }

    return (
        <>
            <input
                type='text'
                value={inputText}
                onChange={hi}
            />
            <button type='submit' onClick={handleSubmit}>제출</button>
        </>
    );
};

export default Hello;
