import styles from "./Button.module.css"

function Button() {

    const clickHandler = (e) => {
        e.target.textContent = "UAU!!!!"
    }

    return (
        <button className={styles.button} onClick={(e) => clickHandler(e)}>Click me</button>
    );
}

export default Button
