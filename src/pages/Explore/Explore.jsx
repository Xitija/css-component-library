import { useData } from "../../contexts/DataContext";
import { VideoCard } from "../../components/VideoCard/VideoCard";

export const Explore = () => {
  const { videoList } = useData();

  return (
    <div>
      <h2>Explore</h2>
      <div className="category-list">
        {videoList.map((video) => (
          <VideoCard key={video._id} video={video}></VideoCard>
        ))}
      </div>
    </div>
  );
};
