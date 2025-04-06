import {useState} from "react";

function MyComponent3() {

    const [car, setCar] = useState({
        year: 2018,
        make: "BMW",
        model: "M5"
    });

    function handleYearChange(e) {
        setCar(c => ({...c, year: e.target.value}));
    }

    function handleMakeChange(e) {
        setCar(c => ({...c, make: e.target.value}));
    }

    function handleModelChange(e) {
        setCar(c => ({...c, model: e.target.value}));
    }

    return (
        <div>
            <p>O meu carro favorito é: {car.make} {car.model} de {car.year}</p>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        </div>
    );
}

export default MyComponent3