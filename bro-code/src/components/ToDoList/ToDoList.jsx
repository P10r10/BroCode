import {useState} from "react";
import "./style.css";

function ToDoList() {

    const [list, setList] = useState([]);
    const [itemToAdd, setItemToAdd] = useState("");
    const handleAddItem = () => {
        if (itemToAdd.trim() !== "") {
            setList(l => [...l, itemToAdd]);
            setItemToAdd("");
        }
    }
    const handleDeleteItem = (index) => setList(l => l.filter((_, i) => i !== index));
    const handleMoveDown = (index) => {
        if (index < list.length - 1) {
            const updated = [...list];
            [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
            setList(updated);
        }
    }
    const handleMoveUp = (index) => {
        if (index > 0) {
            const updated = [...list];
            [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
            setList(updated);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <input type="text"
                   value={itemToAdd}
                   onChange={(e) => setItemToAdd(e.target.value)}
                   placeholder="Insert task to add"
            />
            <button className="add-button" onClick={handleAddItem}>Add</button>
            <ol>
                {list.map((item, index) =>
                    <li key={index}>
                        <span className="text">{item}</span>
                        <button className="delete-button"
                                onClick={() => handleDeleteItem(index)}>Delete
                        </button>
                        <button className="move-button"
                                onClick={() => handleMoveUp(index)}>⬆️
                        </button>
                        <button className="move-button"
                                onClick={() => handleMoveDown(index)}>⬇️
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;