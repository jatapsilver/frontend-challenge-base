import styles from "../styles/navbar.module.css";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function Navbar(): JSX.Element {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          QUICKBET<span>MOVIES</span>
        </li>
        <li>Popular</li>
        <li>Favorites</li>
      </ul>
    </div>
  );
}
