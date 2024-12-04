import styles from "../styles/carrousel.module.css";
// eslint-disable-next-line @typescript-eslint/naming-convention
import Image from "next/image";
import banner from "../utils/img/banner.jpg";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function Carrousel(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (
    <div className={styles.carrousel}>
      <div className={styles.container}>
        <Image src={banner} alt="banner" />
        <h2>Kung Fu Panda 4</h2>
        <h3>
          Join Po and the Furious Five on a new epic adventure! Discover the
          power of friendship and the strength within! Get ready to unleash your
          inner warrior! 🥋✨
        </h3>
      </div>
    </div>
  );
}
