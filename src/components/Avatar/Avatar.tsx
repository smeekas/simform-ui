import React, { CSSProperties, useEffect, useState } from "react";
import className from "classnames";
import "./Avatar.scss";
import useMemoizeFunction from "../../hook/useMemoizefunction";
interface AvatarProps {
  shape?: "circle" | "square";
  size: "large" | "small" | "default" | number;
  alt?: string;
  source?: string;
  color?: string;
  name?: string;
  style?: CSSProperties
  onClick?: (arg0: React.MouseEvent<HTMLDivElement>) => void
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
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { style, source, name, shape = "circle", alt, color, size = "default", onClick: onClickWithoutCallback = () => { } } = props;
  let isImage = false;
  if (source) {
    isImage = useImageLoad(source);
    console.log(isImage);
  }
  const onClick = useMemoizeFunction(onClickWithoutCallback);
  const classNames = className({
    [`zen-${shape}`]: shape,
    [`zen-avatar-${size}`]: size,
  });
  let fallback: string = ""
  if (name && name.trim().length > 0) {
    fallback = name.trim()[0]
  }
  console.log(name)
  if (fallback === "" && alt && alt.trim().length > 0) {
    console.log("HERE");
    fallback = alt.trim()[0]
  }
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
      ref={ref}
      onClick={(e) => onClick(e)}
      style={{ ...zenAvatarSize, ...zenAvatarStyle, ...style }}
      className={`zen-avatar ${classNames}`}
    >
      {isImage && <img alt={alt} className="zen-img" src={source} />}
      {!isImage && fallback && fallback}
      {!isImage && fallback.length == 0 && (
        <svg
          className="zen-no-profile"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          style={{ backgroundColor: color }}
          data-testid="PersonIcon"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
      )}
    </div>
  );


})
export default Avatar;
