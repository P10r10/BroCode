import {useState} from "react";

//USESTATE
function MyComponent() {

    const [name, setName] = useState("No name...")
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = (name) => setName(name);
    const incrementAge = () => setAge(age + 1);
    const toggleIsEmployed = () => setIsEmployed(!isEmployed);

    return (
        <div>
            <p>Nome: {name}</p>
            <button onClick={() => updateName("Alex")}>Set name</button>
            <p>Idade: {age}</p>
            <button onClick={() => incrementAge()}>Increment age</button>
            <p>Empregado: {isEmployed ? "Sim" : "Não"}</p>
            <button onClick={() => toggleIsEmployed()}>Toggle state</button>
        </div>
    );
}

export default MyComponent