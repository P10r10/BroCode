import {useState} from "react";

//UPDATE THE STATE OF AN ARRAY OF OBJECTS
function MyComponent5() {

    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const handleAddCar = () => {
        setCars(c => [...c, {year: year, make: make, model: model}]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }
    const handleRemoveCar = (index) => setCars(cars.filter((_, i) => (i !== index)));
    const handleChangeYear = (e) => setYear(e.target.value);
    const handleChangeMake = (e) => setMake(e.target.value);
    const handleChangeModel = (e) => setModel(e.target.value);

    return (
        <div>
            <h1>List of car objects</h1>
            <ul>
                {cars.map(((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.make} {car.model} de {car.year}</li>))}
            </ul>
            <input type="number" value={year} placeholder="year" onChange={handleChangeYear}/><br/>
            <input type="text" value={make} placeholder="insert make" onChange={handleChangeMake}/><br/>
            <input type="text" value={model} placeholder="insert model" onChange={handleChangeModel}/><br/>
            <button onClick={handleAddCar}>Add Car</button>
            <button>Remove Car</button>
        </div>
    );
}

export default MyComponent5;