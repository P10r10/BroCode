function List() {
    const fruits = [
        {id: 1, name: "banana", calories: 37},
        {id: 2, name: "apple", calories: 45},
        {id: 3, name: "strawberry", calories: 159},
        {id: 4, name: "kiwi", calories: 105},
        {id: 5, name: "grapes", calories: 95},
        {id: 6, name: "mango", calories: 77},
    ];
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // sort alpha
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // reverse alpha
    // fruits.sort((a,b) => a.calories - b.calories); // ascending order
    fruits.sort((a,b) => b.calories - a.calories); // descending order

    const fruitItems = fruits.map(fruit =>
        <li>
            {fruit.name}: &nbsp;
            <b>{fruit.calories}</b>
        </li>);
    return (
        <ol>{fruitItems}</ol>
    )
}

export default List