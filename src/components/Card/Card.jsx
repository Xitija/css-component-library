import { useState } from "react";
import { Badge } from "../Badge/Badge";
import "./Card.css";

export const CardBadge = ({ title, description, badgeColor, badgeText }) => {
  return (
    <div className="card card-badge">
      <div className="corner">
        <Badge text={badgeText} size="md" color={badgeColor} />
      </div>
      <h3>{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export const CardImage = ({ title, description, imageSrc, imageInfo }) => {
  const [image, setImage] = useState("image");
  const handleBrokenImages = () => {
    setImage("placeholder");
  };
  return (
    <>
      {image === "image" && (
        <div className="card-image">
          <div>
            <img onError={handleBrokenImages} src={imageSrc} alt={imageInfo} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
      {image === "placeholder" && (
        <div className="card-image">
          <div className="placeholder">
            <img src="https://via.placeholder.com/200" alt="Placeholder" />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </>
  );
};

// https://via.placeholder.com/150
