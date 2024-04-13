import { useState } from "react";
import "./Image.css";
export const Image = ({ src, alt, size, borderType }) => {
  const [fallback, setFallback] = useState(false);

  const fallbackUrl = "https://via.placeholder.com/150";
  const handleFallback = () => {
    setFallback(true);
  };

  return (
    <img
      onError={handleFallback}
      src={fallback ? fallbackUrl : src}
      alt={alt}
      className={`image ${size}-image ${borderType}-image`}
    />
  );
};

Image.defaultProps = {
    src: "https://i.pravatar.cc/150?img=45",
    alt: "Placeholder image",
    size: "md",
    borderType: "br3",
  };

