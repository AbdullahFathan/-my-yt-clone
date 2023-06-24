import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { Videos } from "./";
import { getVideoApi } from "../services/getVideo";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [recomendVideo, setRecomendVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchVideoDetail = async () => {
      try {
        const data = await getVideoApi(
          `videos?part=snippet,statistic&id=${id}`
        );
        const videoData = await getVideoApi(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setRecomendVideo(videoData);
        setVideoDetail(data.items[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoDetail();
  }, [id]);

  if (!videoDetail?.snippet === null || recomendVideo === null)
    return "Loading..";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <section className="min-h-[95vh]">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          {/* Video PLayer */}
          <div className="w-full sticky top-[86px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            {/* Video Title */}
            <h2 className="text-white font-bold p-2 text-2xl">{title}</h2>
            {/* Video Channel */}
            <div className="flex flex-row justify-between text-white px-1 py-2">
              <Link to={`/channel/${channelId}`}>
                <h4 className="text-xl text-white">{channelTitle}</h4>
              </Link>
              {/*Video Statisticc */}
              <div className="flex flex-row gap-5 items-center ">
                <h5 className="text-gray-600 text-sm">
                  {parseInt(viewCount).toLocaleString()} Views
                </h5>
                <h5 className="text-gray-600 text-sm">
                  {parseInt(likeCount).toLocaleString()} Likes
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/*Recomend Video */}
        <div className="px-2 py-5 md:py-1 justify-center items-center">
          <Videos videos={recomendVideo.items} />
        </div>
      </div>
    </section>
  );
};

export default VideoDetail;
