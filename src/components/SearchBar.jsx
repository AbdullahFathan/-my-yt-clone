import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../assets";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm(" ");
    }
  };

  return (
    <form
      className="bg-white rounded-[20px]  border-solid border-2 border-[#E3E3E3] pl-2 sm:mr-5 flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button type="submit" className="p-[10px]">
        <img src={SearchIcon} />
      </button>
    </form>
  );
};
export default SearchBar;
