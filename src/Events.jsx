import React from 'react'

const Events = () => {

    const BtnClick = () => {
        alert("login btn");
    }

    const TestBtn = (a, b) => {
        alert(a + b);
    }
    return (
        <>
            <button onClick={BtnClick}>Login</button>
            <button onClick={() => TestBtn(10, 20)}>Test</button>

            <button onClick={() => alert("test2")}>Test2</button>
        </>
    )
}

export default Events
