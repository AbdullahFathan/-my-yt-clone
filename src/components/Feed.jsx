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
    <section className="flex md:flex-row flex-col h-max">
      {/* //* SideBar */}
      <div className=" border-r-2 border-[#3d3d3d] px-0 md:px-2 ">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <p className="text-sm font-light text-white copyright mt-[1.5px]">
          Copyright 2023 Fathan
        </p>
      </div>

      {/* //* Yt Video  */}
      <div className="flex-[2]  overflow-y-auto m-5 ">
        <h4 className="text-white font-bold mb-4  text-4xl">
          {selectedCategory} <span className="text-[#FC1503]">videos</span>
        </h4>
        <Videos videos={videos} />
      </div>
    </section>
  );
};
export default Feed;
