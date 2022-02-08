import styles from './Main.moudule.css'

function Navbar() {
  return (
    <>
      <ul className={styles.item}>
        <li>Reputation</li>
        <li>New Users</li>
        <li>Voters</li>
        <li>Editors</li>
        <li>Moderators</li>
      </ul>
    </>
  );
}

export default Navbar;
