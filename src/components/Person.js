import React from 'react';

import './person.css';

const person = (params) => {
    const curAge = params.age || Math.floor(Math.random()*50);

    console.log(params);
    if (params.children) {
        return (
            <div className="person">
                <p onClick={params.click}>I'm {params.name} and I'm {curAge} old.</p>
                <input type="text" onChange={params.change} value={params.name}/>
                <p>{params.children}</p>
            </div>
        )
    } else {
        return (
            <div className="person">
                <p onClick={params.click}>I'm {params.name} and I'm {curAge} old.</p>
                <input type="text" onChange={params.change} value={params.name}/>
            </div>
        )
    }

};

export default person;