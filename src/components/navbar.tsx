import styles from "../styles/navbar.module.css";
// eslint-disable-next-line @typescript-eslint/naming-convention
import Image from "next/image";
import logo from "../utils/img/Logo.png";
import user from "../utils/img/user.png";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function Navbar(): JSX.Element {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.logo}>
          <Image src={logo} alt="logo" />
        </li>
        <li className={styles.list}>Popular</li>
        <li>Favorites</li>
        <li className={styles.user}>
          <Image src={user} alt="user" />
        </li>
      </ul>
    </div>
  );
}
