import { categories } from "../constants/sidebar_tag";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="flex md:flex-col flex-row overflow-y-auto h-auto ">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`category-btn ${
            category.name === selectedCategory ? "bg-[#fc1503]" : "bg-white"
          }`}
          onClick={() => setSelectedCategory(category.name)}
        >
          <img src={category.icon} alt="icon-category" className={` mr-4`} />
          <span className=" pr-3 md:pr-0 mr-1 md:mr-0 ">{category.name}</span>
        </button>
      ))}
    </aside>
  );
};
export default Sidebar;
