import { useData } from "../../contexts/DataContext";
import { VideoCard } from "../../components/VideoCard/VideoCard";

export const MoreVideos = () => {
  const { videoList } = useData();

  return (
    <div>
      <h3>More Videos</h3>
      <div className="more-videos">
        {videoList.map((video) => (
          <VideoCard key={video._id} video={video}></VideoCard>
        ))}
      </div>
    </div>
  );
};
