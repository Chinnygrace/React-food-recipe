import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <h1 className={styles.transition}>Hey Foodie!!</h1>
      <p className={styles.description}>Your Favorite Recipe Spot</p>
    </div>
  );
}

export default Home;
