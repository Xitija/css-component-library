import { useData } from "../../contexts/DataContext";

import { CategoryCard } from "../../components/CategoryCard/CategoryCard";

import "./Home.css";

export const Home = () => {
  const { categoryList } = useData();

  return (
    <div>
      <h2>Categories</h2>
      <div className="category-list">
        {categoryList.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};
