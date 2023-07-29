import { useParams } from "react-router-dom";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { usePlaylists } from "../../contexts/PlayListContext";

export const PlayListVideos = () => {
  const { playlistId } = useParams();

  const { getPlaylist } = usePlaylists();

  const playList = getPlaylist(playlistId);

  return (
    <div>
      <h2>{playList?.title}</h2>
      <div className="category-list">
        {playList?.videos?.map((video) => (
          <VideoCard key={video._id} video={video}></VideoCard>
        ))}
      </div>
    </div>
  );
};
