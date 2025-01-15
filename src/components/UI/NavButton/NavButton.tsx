import styles from "./_NavButton.module.scss";
import { Link } from "react-router-dom";

interface INavButton {
  description: string;
  path: string;
}

const NavButton = ({ description, path }: INavButton) => {
  return (
    <Link to={path} className={styles.button}>
      <strong>{description}</strong>
    </Link>
  );
};

export default NavButton;
