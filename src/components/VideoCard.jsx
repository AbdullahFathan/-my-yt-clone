import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="w-full sm:w-[358px] md:w-[320px]  border-none rounded-none ">
      <Link to={`/video/${videoId}`}>
        <img
          src={snippet?.thumbnails?.high?.url}
          alt="thumbnails"
          className="h-[180px] w-full sm:w-[358px] md:w-[320px]  object-cover"
        />
      </Link>
      <div className="bg-[#1e1e1e] h-[105px] ">
        <Link to={`/video/${videoId}`}>
          <h4 className="text-white font-bold text-sm">{snippet?.title}</h4>
        </Link>
        <Link to={`/video/${snippet?.channelId}`}>
          <h4 className="text-gray-400 font-bold text-sm">
            {snippet?.channelTitle}
          </h4>
        </Link>
      </div>
    </div>
  );
};
export default VideoCard;
