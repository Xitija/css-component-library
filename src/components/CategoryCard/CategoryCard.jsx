import { NavLink } from "react-router-dom";
import "./CategoryCard.css";

export const CategoryCard = ({ category }) => {
  return (
    <NavLink className="category-card" to={`/category/${category?.category}`}>
      <div>
        <img src={category?.thumbnail} alt={category?.category} />
      </div>
      <p>{category?.category}</p>
    </NavLink>
  );
};
