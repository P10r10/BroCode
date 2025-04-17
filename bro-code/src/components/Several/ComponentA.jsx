import "./styles.css";
import ComponentB from "./ComponentB.jsx";
import {createContext, useState} from "react";

export const UserContext = createContext();

// USECONTEXT()
function ComponentA() {

    const [user, setUser] = useState("Alex");

    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello, ${user}!`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA;
