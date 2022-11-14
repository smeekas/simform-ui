import classNames from "classnames";
import React, {
  CSSProperties,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import useMemoizeFunction from "../../hook/useMemoizefunction";
import "./Rating.scss";
type RatingPropsType = {
  disabled?: boolean;
  className?: string;
  onChange?: (count: number) => void;
  allowClear?: boolean;
  onHoverChange?: (count: number) => void;
  value?: number;
  style?: CSSProperties;
  fillColor?: string;
  fontSize?: number;
  fillBackgroundColor?: string;
  count?: number;
  character?: React.ReactNode | string;
  // events
};
const Rating = React.forwardRef<HTMLElement, RatingPropsType>((props, ref) => {
  const {
    onChange: onChangeWithoutCallback = () => {},

    disabled,
    allowClear,
    value = 0,
    className,
    fillBackgroundColor,
    fillColor,
    count = 5,
    character,
    style,
    fontSize,
    onHoverChange: onHoverChangeWithoutCallback = () => {},
  } = props;
  // console.log(value);

  // console.log(onChange);
  // const onChange = useCallback(onChangeWithoutCallback, [
  //   onChangeWithoutCallback,
  // ]);
  const onChange = useMemoizeFunction(onChangeWithoutCallback);
  const onHoverChange = useMemoizeFunction(onHoverChangeWithoutCallback);

  const [fill, setFill] = useState<number | null>(null);
  useEffect(() => {
    if (value !== undefined) {
      setFill(value - 1);
    }
  }, [value]);
  const [hover, setHover] = useState<number | null>(null);
  const classnames = classNames({
    [`zen-rating-disabled`]: disabled,
  });
  const setFillHandler = (index: number) => {
    if (!disabled) {
      setFill(index);
    }
  };
  const setHoverHandler = (index: number) => {
    if (!disabled) {
      setHover(index);
    }
  };
  const setHoverInitial: MouseEventHandler = (e) => {
    if (!disabled) {
      setHover(null);
    }
  };
  const clearHandler = () => {
    if (allowClear && !disabled) {
      setFill(null);
      setHover(null);
    }
  };
  useEffect(() => {
    if (fill != null) {
      onChange(fill + 1);
    } else {
      onChange(0);
    }
  }, [fill, onChange]);

  useEffect(() => {
    if (hover != null) {
      onHoverChange(hover + 1);
    } else {
      onHoverChange(0);
    }
  }, [hover, onHoverChange]);
  useEffect(() => {
    if (onHoverChange) {
    }
  }, [hover, onHoverChange]);

  const emptyOrFillClass = (index: number) => {
    return hover != null
      ? index <= hover
        ? "zen-fill"
        : "zen-empty"
      : fill != null && index <= fill
      ? "zen-fill"
      : "zen-empty";
  };
  return (
    <span
      className={`zen-rating ${classnames} ${className}`}
      onMouseLeave={(e) => setHoverInitial(e)}
      ref={ref}
      style={style}
    >
      {value <= count &&
        Array(count)
          .fill(0)
          .map((star, index) => {
            return (
              <div
                key={index}
                onClick={() => setFillHandler(index)}
                onMouseEnter={() => setHoverHandler(index)}
                onDoubleClick={() => {
                  clearHandler();
                }}
                style={
                  emptyOrFillClass(index) === "zen-fill"
                    ? fillColor
                      ? {
                          color: fillColor,
                          stroke: fillColor,
                        }
                      : {}
                    : fillBackgroundColor
                    ? {
                        color: fillBackgroundColor,
                        stroke: fillBackgroundColor,
                      }
                    : {}
                }
                className={`zen-star ${emptyOrFillClass(index)}`}
              >
                {!character ? (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{ width: "25px" }}
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                ) : (
                  // STAR
                  // "A"
                  //TODO
                  <span
                    className="zen-character"
                    style={{ fontSize: fontSize }}
                  >
                    {character}
                  </span>
                )}
              </div>
              /*  <svg
                focusable="false"
                key={index}
                aria-hidden="true"
                onClick={() => setFillHandler(index)}
                onMouseEnter={() => setHoverHandler(index)}
                //   onMouseLeave={() => setHoverInitial()}
                onDoubleClick={() => {
                  clearHandler();
                }}
                viewBox="0 0 24 24"
                fill="currentColor"
                style={
                  emptyOrFillClass(index) === "zen-fill"
                    ? fillColor
                      ? {
                          color: fillColor,
                          stroke: fillColor,
                        }
                      : {}
                    : fillBackgroundColor
                    ? {
                        color: fillBackgroundColor,
                        stroke: fillBackgroundColor,
                      }
                    : {}
                }
                className={`zen-star ${emptyOrFillClass(index)}`}
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              */
            );
          })}
    </span>
  );
});

export default Rating;

/*

  const [fill, setFill] = useState([1, 1, 1, 0, 0]);
  const [hover, setHover] = useState([0, 0, 0, 0, 0]);
  const setFillHandler = (index: number) => {
    // console.log(index);
    setFill((prev) => {
      prev.fill(0);
      prev = prev.map((item, i) => {
        if (i <= index) {
          return 1;
        } else {
          return 0;
        }
      });

      return prev;
    });
  };
  const setHoverHandler = (index: number) => {
    console.log("entered"+index);
    setHover((prev) => {
      prev.fill(0);
      prev = prev.map((item, i) => {
        if (i <= index) {
          return 1;
        } else {
          return 0;
        }
      });

      return prev;
    });
  };
  const setHoverInitial = () => {
    console.log("leaved");
    setHover(fill);
  };

*/

// if (item === 0) {
//   return (
//     <svg
//       focusable="false"
//       key={index}
//       aria-hidden="true"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       onClick={() => setFillHandler(index)}
//       onMouseEnter={() => setHoverHandler(index)}
//       onMouseLeave={() => setHoverInitial()}
//       className="zen-star zen-empty"
//       data-testid="StarIcon"
//     >
//       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//     </svg>
//   );
// } else {
//   return (
//     <svg
//       focusable="false"
//       key={index}
//       aria-hidden="true"
//       onClick={() => setFillHandler(index)}
//       onMouseEnter={() => setHoverHandler(index)}
//       onMouseLeave={() => setHoverInitial()}
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="zen-star zen-fill"
//       data-testid="StarIcon"
//     >
//       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
//     </svg>
//   );
// }
