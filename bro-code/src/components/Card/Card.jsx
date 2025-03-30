import styles from "./Card.module.css"

function Card(props) {

    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={props.foto} alt="profile picture"/>
            <h2 className={styles.cardTitle}>{props.name}</h2>
            <p className={styles.cardText}>{props.bio}</p>
        </div>
    );
}

export default Card
