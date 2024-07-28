import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState([]);


    const increment = () => setCount(count + 1);
    const addTodo = () => {
        setTodo([...todo, 'New Todo']);
    };

    const expensiveCalculation = (num) => {
        console.log("calculating")
        for (let index = 0; index < 1000; index++) {
            console.log(index)
            num += 1;
        }
        return num;
    };

    // new approach which only re-renders when count changes
    const expensiveNumber = useMemo(() => expensiveCalculation(count), [count])

    // old approach which makes the component re-render every time This happens because, in React, every time a component re-renders, all the code inside the component function is executed again. 
    // const expensiveNumber = expensiveCalculation(count)


    return (
        <div>
            <h1>UseMemo</h1>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <h2>Todo: {todo.length}</h2>
            <button onClick={addTodo}>Add Todo</button>
            <h1>Expensive Number : {expensiveNumber}</h1>
        </div>
    )
}

export default UseMemo