import styles from "./ColorPicker.module.css";
import {useState} from "react";


function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");
    const handleColorChange = (e) => setColor(e.target.value);

    return (
        <div className={styles.colorPickerContainer}>
            <h1>Color Picker</h1>
            <div className={styles.colorDisplay} style={{backgroundColor: color}}>
                <p>Selected Color: {color} </p>
            </div>
            <label>Select a color:</label>
            <input onChange={handleColorChange} value={color} type="color"/>
        </div>
    );
}

export default ColorPicker