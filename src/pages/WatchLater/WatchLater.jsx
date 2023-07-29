import { useWatchList } from "../../contexts/WatchListContext";
import { VideoCard } from "../../components/VideoCard/VideoCard";

export const WatchLater = () => {
  const { watchList } = useWatchList();

  return (
    <div>
      <h2>Watch Later</h2>
      <div className="category-list">
        {watchList.map((video) => (
          <VideoCard key={video._id} video={video}></VideoCard>
        ))}
      </div>
    </div>
  );
};
