import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => (
  <div
    className={`flex justify-center items-center w-[356px] md:w-[320px] h-[326px] mx-auto mt-[-115px] rounded-2xl`}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <div className="flex flex-col justify-center items-center text-center text-white">
        <img
          src={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
          className="rounded-full h-48 w-48 mb-2 border-2 border-[#e3e3e3]"
        />
        <h6>{channelDetail?.snippet?.title} </h6>
        {channelDetail?.statistics?.subscriberCount && (
          <p className="text-gray-400 font-semibold text-base">
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString("en-US")}{" "}
            Subscribers
          </p>
        )}
      </div>
    </Link>
  </div>
);

export default ChannelCard;
