import {useEffect, useState} from "react";

//USEEFFECT
function MyComponent6() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    useEffect(() => {
        document.title = `Count: ${count} Color: ${color}`;
    }, [count, color]);

    const handleAdd = () => setCount(c => c + 1);
    const handleSub = () => setCount(c => c - 1);
    const handleChangeColor = () => {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Sub</button>
            <button onClick={handleChangeColor}>Change color</button>
        </div>
    );
}

export default MyComponent6;