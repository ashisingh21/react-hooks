import React, { useRef } from 'react'

const UseRef = () => {

    const button = useRef();
    const box = useRef();

    const toggleColor = () => {
        if (box.current.style.backgroundColor === "red") {
            box.current.style.backgroundColor = "blue"
        } else {
            box.current.style.backgroundColor = "red"
        }



    }
    return (
        <div style={{ margin: "40px" }}>
            <h2>Use Ref Hook</h2>

            <div ref={box} style={{ border: "1px solid black", width: "300px", height: "300px" }} className='changeMyColor'></div>

            <button style={{ cursor: "pointer", marginTop: "20px", color: "white", backgroundColor: "black", padding: "10px", borderRadius: "5px" }} onClick={toggleColor} ref={button}>Toggle Box Color</button>

        </div>
    )
}

export default UseRef