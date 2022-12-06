import React, { useEffect, useState } from "react";
import className from "classnames";
import "./Avatar.scss";
interface AvatarProps {
  shape?: "circle" | "square";
  size: "large" | "small" | "default" | number;
  alt?: string;
  source?: string;
  color?: string;
}

const useImageLoad = (src: string) => {
  const [imageloaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onerror = () => {
      setImageLoaded(false);
    };
    image.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return imageloaded;
};
const Avatar = (props: AvatarProps) => {
  const { source, shape = "circle", alt, color, size = "default" } = props;
  let isImage = false;
  if (source) {
    isImage = useImageLoad(source);
    console.log(isImage);
  }

  const classNames = className({
    [`zen-${shape}`]: shape,
    [`zen-avatar-${size}`]: size,
  });
  const hasAlt = alt && alt.trim().length > 0;
  let sizeNumber = 0;
  if (typeof size === "number") {
    sizeNumber = size;
  }
  const zenAvatarStyle = { backgroundColor: color };
  const zenAvatarSize =
    sizeNumber !== 0
      ? {
          width: sizeNumber,
          height: sizeNumber,
        }
      : {};
  return (
    <div
      style={{ ...zenAvatarSize, ...zenAvatarStyle }}
      className={`zen-avatar ${classNames}`}
    >
      {isImage && <img alt={alt} className="zen-img" src={source} />}
      {!isImage && hasAlt && alt[0].toUpperCase()}
      {!isImage && !hasAlt && (
        <svg
          className="zen-no-profile"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="PersonIcon"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
      )}
    </div>
  );
};

export default Avatar;
