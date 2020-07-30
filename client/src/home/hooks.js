import React, { useState, useRef, useEffect } from 'react';

function maps() {
    const map = new Map()
    map.set('firstName', 'Luke')
    map.set('lastName', 'Skywalker')
    map.set('occupation', 'Jedi Knight')
    const luke = {
        firstName: 'Luke',
        lastName: 'Skywalker',
        occupation: 'Jedi Knight',
    }
    map.set(luke)
    return Object.fromEntries(map)
}

function sets() {
    const set = new Set([1, 2, 3, 4, 7, 6, 5, 4, 3, 2, 1]);
    set.add('Mozart')
    set.add('Chopin')
    return [...set]
}

export default function (props) {
    const [count, setCount] = useState(0)
    const countRef = useRef()
    const onAlertClick = () => {
        setTimeout(() => {
            console.log('Value: ' + countRef.current)
        }, 3000)
    }
    useEffect(() => {
        countRef.current = count;
        document.title = 'Using the Effect Hook'
    })
    return (
        <div>
            <pre>{JSON.stringify(maps(), null, 2)}</pre>
            <pre>{JSON.stringify(sets(), null, 2)}</pre>
            <p>You picked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me.</button>
            <button onClick={onAlertClick}>
                Show me the value in 3 seconds
            </button>
        </div>
    )
}
