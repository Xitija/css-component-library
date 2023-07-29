import { useParams } from "react-router-dom";

import { useData } from "../../contexts/DataContext";
import { VideoCard } from "../../components/VideoCard/VideoCard";

export const Category = () => {
  const { category } = useParams();

  const { videoList } = useData();

  const selectedCategoryList = videoList.filter(
    (item) => item?.category === category
  );

  return (
    <div>
      <h2>{category}</h2>
      <div className="category-list">
        {selectedCategoryList.map((video) => (
          <VideoCard key={video._id} video={video}></VideoCard>
        ))}
      </div>
    </div>
  );
};
