import { useState, useEffect } from "react";
import { Videos } from "./";
import { getVideoApi } from "../services/getVideo";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    getVideoApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div className="flex-[2]  overflow-y-auto m-5 ">
      <h4 className="text-white font-bold mb-4  text-4xl">
        Search For: <span className="text-[#FC1503]">{searchTerm}</span> Videos
      </h4>
      <Videos videos={videos} />
    </div>
  );
};
export default SearchFeed;
