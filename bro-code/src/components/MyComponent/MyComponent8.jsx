import {useRef} from "react";

function MyComponent8() {

    const myInput1 = useRef(null);
    const myInput2 = useRef(null);
    const myInput3 = useRef(null);

    const handleClick1 = () => {
        myInput1.current.focus();
        myInput1.current.style.backgroundColor = "orange";
        myInput2.current.style.backgroundColor = "";
        myInput3.current.style.backgroundColor = "";
    }
    const handleClick2 = () => {
        myInput2.current.focus();
        myInput2.current.style.backgroundColor = "orange";
        myInput1.current.style.backgroundColor = "";
        myInput3.current.style.backgroundColor = "";
    }
    const handleClick3 = () => {
        myInput3.current.focus();
        myInput3.current.style.backgroundColor = "orange";
        myInput2.current.style.backgroundColor = "";
        myInput1.current.style.backgroundColor = "";
    }

    return (
        <div>
            <input ref={myInput1} type="text"/>
            <button onClick={handleClick1}>Click me!</button>
            <br/>
            <input ref={myInput2} type="text"/>
            <button onClick={handleClick2}>Click me!</button>
            <br/>
            <input ref={myInput3} type="text"/>
            <button onClick={handleClick3}>Click me!</button>
            <br/>
        </div>
    )
}

export default MyComponent8;