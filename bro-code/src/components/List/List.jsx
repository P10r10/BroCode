import styles from "./List.module.css";
import PropTypes from 'prop-types';

function List(props) {

    const listItems = props.items.map(item =>
        <li>
            {item.name}: &nbsp;
            <b>{item.calories}</b>
        </li>);
    return (
        <>
            <h3 className={styles.listCategory}>{props.category}</h3>
            <ol className={styles.listItems}>{listItems}</ol>
        </>
    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number})
    ),
}


export default List

// fruits.sort((a,b) => a.name.localeCompare(b.name)); // sort alpha
// fruits.sort((a,b) => b.name.localeCompare(a.name)); // reverse alpha
// fruits.sort((a,b) => a.calories - b.calories); // ascending order
// fruits.sort((a,b) => b.calories - a.calories); // descending order
// const lowCalFruit = fruits.filter(fruit => fruit.calories < 94);