import List from "./components/List/List.jsx";

function App2() {
    const fruits = [
        {id: 1, name: "banana", calories: 37},
        {id: 2, name: "apple", calories: 45},
        {id: 3, name: "strawberry", calories: 159},
        {id: 4, name: "kiwi", calories: 105},
        {id: 5, name: "grapes", calories: 95},
        {id: 6, name: "mango", calories: 77},
    ];
    const vegetables = [
        {id: 1, name: "broccoli", calories: 110},
        {id: 2, name: "celery", calories: 15},
        {id: 3, name: "carrots", calories: 25},
        {id: 4, name: "corn", calories: 63},
        {id: 5, name: "potatoes", calories: 50},
        {id: 6, name: "lettuce", calories: 99},
    ];

    return (
        <>
            {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
            {vegetables.length >0 && <List items={vegetables} category="Vegetables"/>}
        </>
    );
}

export default App

// import Card from "./components/Card/Card.jsx";
// import christina from "./assets/christina.jpg"
// import bruno from "./assets/bruno.jpg"
// import miley from "./assets/miley.jpg"
// import weeknd from "./assets/weeknd.jpg"
// import lady from "./assets/lady.jpg"
// <Card foto={christina} name="Cristina Aguilera" bio="Eu gosto de aprender!"/>
// <Card foto={bruno} name="Bruno Mars" bio="Eu gosto de aprender!"/>
// <Card foto={miley} name="Miley Cirus" bio="Eu gosto de aprender!"/>
// <Card foto={weeknd} name="The Weeknd" bio="Eu gosto de aprender!"/>
// <Card foto={lady} name="Lady Gaga" bio="Eu gosto de aprender!"/>