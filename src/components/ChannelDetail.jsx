import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { getVideoApi } from "../services/getVideo";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [video, setVideos] = useState([]);
  const { id } = useParams();

  const fecthResult = async () => {
    const data = await getVideoApi(`channels?part=snippet&id=${id}`);

    setChannelDetail(data?.items[0]);

    const videosData = await getVideoApi(
      `search?channelId=${id}&part=snippet&order=date`
    );

    setVideos(videosData?.items);
  };

  useEffect(() => {
    fecthResult();
  }, [id]);

  console.log(video);
  return (
    <section className="min-h-[95vh] ">
      {/*Gradient bg and channel */}
      <div>
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[300px]" />
        <ChannelCard channelDetail={channelDetail} />
      </div>

      {/*Videos Channel */}
      <div className="flex p-2 justify-center items-center sm:mx-[10px]">
        <Videos videos={video} />
      </div>
    </section>
  );
};
export default ChannelDetail;
