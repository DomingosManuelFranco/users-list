import styles from "./Main.module.css";

import Navbar from "./Navbar";
import Search from "./Search";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.main}>
        <Search />
        <Navbar />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
