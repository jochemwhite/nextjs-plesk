import Logo from "./Logo/logo";
import Navbar from "./Navbar/navbar";
import Topbar from "./Topbar/topbar";

const Header = () => {
  return (
    <>
      <Topbar />
      <Logo />
      <Navbar />
    </>
  );
};

export default Header;
