import {useState} from "react";

function MyComponent4() {

    const [foods, setFoods] = useState(["Banana", "Orange", "Strawberry"]);
    const [food, setFood] = useState();

    const handleSubmitFood = () => {
        setFoods(f => [...f, food]);
        setFood("");
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h4>List of Food</h4>
            <ul>
                {foods.map((food, index) =>
                    <li key={index}
                        onClick={() => handleRemoveFood(index)}
                    >{food}</li>)}
            </ul>
            <input type="text"
                   value={food}
                   placeholder="Enter food"
                   onChange={(e) => setFood(e.target.value)}
            />
            <button onClick={handleSubmitFood}>Submit</button>
        </div>
    )

}

export default MyComponent4;