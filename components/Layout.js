import Navbar from "./Navbar";
import Search from "./Search";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Users</h1>
      <Search />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
