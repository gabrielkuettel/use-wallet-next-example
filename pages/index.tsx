import styles from "../styles/Home.module.css";
import Account from "../components/Account";
import Connect from "../components/Connect";
import Transact from "../components/Transact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Account />
      <hr />
      <Connect />
      <hr />
      <Transact />
      <hr />
    </div>
  );
}
