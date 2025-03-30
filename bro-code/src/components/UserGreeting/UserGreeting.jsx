import styles from "./UserGreeting.module.css"

function UserGreeting(props) {
    const userGreeting = <p className={styles.userGreeting}>Welcome, {props.user}!</p>;
    const askToLog = <p className={styles.askToLog}>Please log in ...</p>;

    return (
        props.isLogged ? userGreeting : askToLog
    );
}

export default UserGreeting