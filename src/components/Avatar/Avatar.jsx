import { useState } from "react";
import "./Avatar.css";

export const Avatar = ({ src, name, size, color }) => {
  const [image, setImage] = useState("image");
  const handleBrokenImages = () => {
    if (name === "") setImage("avatar");
  };

  return (
    <>
      {image === "image" && (
        <img
          className={`image-avatar ${size}-avatar`}
          onError={handleBrokenImages}
          src={src}
          alt={name}
        />
      )}
      {image === "avatar" && (
        <svg className={`${size}-avatar`}
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
          <circle cx="12" cy="10" r="3" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      )}
    </>
  );
};

Avatar.defaultProps = {
  src: "",
  name: "",
  size: "md",
  color: "#000",
};

// "https://i.pravatar.cc/150?img=1"
