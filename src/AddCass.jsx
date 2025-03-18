import React from 'react'
import "./navbar.css";

const AddCass = () => {
    let h1_style = { color: "red", backgroundColor: "yellow", border: "1px solid black" };
    return (
        <>
            {/* Inline css */}
            {/* <h1 style={{color:"red",backgroundColor:"yellow"}}>Apply Inline css</h1> */}
            <h1 style={h1_style}>Apply Inline css</h1>


            <div className="a">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe aliquid laboriosam at reiciendis vel quisquam incidunt tenetur quos tempore!
            </div>
        </>
    )
}

export default AddCass
