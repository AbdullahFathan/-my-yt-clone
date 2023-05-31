import { Link } from "react-router-dom";
import { Logo } from "../assets";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center sticky p-2  bg-black top-0 justify-between">
      {/*Logo */}
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="logo" className="h-[45px]" />
      </Link>

      <SearchBar />
    </div>
  );
};
export default Navbar;
