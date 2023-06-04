import { VideoCard } from "./";

const Videos = ({ videos }) => {
  return (
    <div className="flex flex-row flex-wrap h-fit justify-start gap-3  items-start">
      {videos.map((item, index) => (
        <div key={index}>{item.id.videoId && <VideoCard video={item} />}</div>
      ))}
    </div>
  );
};
export default Videos;
