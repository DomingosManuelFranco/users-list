import Navbar from "./Navbar";
import Search from "./Search";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Search />
    </div>
  );
};

export default Layout;
