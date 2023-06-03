import { useState, useEffect } from "react";
import { Sidebar, Videos } from "./";
import { getVideoApi } from "../services/getVideo";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideoApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <section className="flex md:flex-row flex-col ">
      {/* //* SideBar */}
      <div className="h-auto md:h-92vh border-r-2 border-[#3d3d3d] px-0 md:px-2">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <p className="text-sm font-light text-white copyright mt-[1.5px]">
          Copyright 2023 Fathan
        </p>
      </div>

      {/* //* Yt Video  */}
      <div className="flex-[2] h-[90vh] overflow-y-auto">
        <h4 className="text-white font-bold mb-2 ml-2 text-4xl">
          {selectedCategory} <span className="text-[#FC1503]">videos</span>
        </h4>
        <Videos videos={videos} />
      </div>
    </section>
  );
};
export default Feed;
