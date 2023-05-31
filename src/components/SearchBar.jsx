import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../assets";

const SearchBar = () => {
  return (
    <div className="bg-white rounded-[20px]  border-solid border-2 border-[#E3E3E3] pl-2 sm:mr-5 ">
      <form className="flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          onChange={() => {}}
        />
        <button type="submit" className="p-[10px]">
          <img src={SearchIcon} />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
