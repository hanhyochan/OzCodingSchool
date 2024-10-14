import React, { useState } from 'react';

const Moodrendering = () => {
    const [mood, setMood] = useState('gkk')
    return (
        <div>
            <span>{mood}</span>
            <button>happy</button>
        </div>
    );
};

export default Moodrendering;