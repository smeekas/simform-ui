import React, {
  useState,
  CSSProperties,
  MouseEventHandler,
  useEffect,
} from "react";
import "./Pagination.scss";
import classNames from "classnames";
import useMemoizeFunction from "../../hook/useMemoizefunction";
type PaginationPropTypes = {
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
  //   onPageSizeChange?: (page?: number, pageSize?: number) => void;
  current?: number;
  defaultCurrent?: number;
  pageSize?: number;
  defaultPageSize?: number;
  disabled?: boolean;
  //  showSizeChanger?: boolean; //TODO after dropdown
  // pageSizeOptions?: number[]; //TODO
  showQuickJumper?: boolean;
  showFirstAndLast?: boolean;
};
//TODO if click on three dot then jump by 5
function Pagination(props: PaginationPropTypes) {
  const {
    current: currentProp,
    defaultCurrent,
    defaultPageSize,
    pageSize: pageSizeProp,
    total = 1,
    disabled,
    showQuickJumper,
    showFirstAndLast,
    onChange: onChangeWithoutCallback = () => {},
    // pageSizeOptions = [],
  } = props;
  const onChange = useMemoizeFunction(onChangeWithoutCallback);
  const [pageSize, setPageSize] = useState(
    defaultPageSize !== undefined
      ? defaultPageSize
      : pageSizeProp !== undefined
      ? pageSizeProp
      : 10
  );
  const [current, setCurrent] = useState(
    defaultCurrent !== undefined
      ? defaultCurrent
      : currentProp !== undefined
      ? currentProp
      : 1
  );
  const totalPageNumber = Math.round(Math.ceil(total / pageSize));
  const prevExists = current !== 1;
  const nextExists = current * pageSize < total;
  const firstExists = current > 2;
  const lastExists = current <= totalPageNumber - 2;
  const prevDots = current > 3;
  const nextDots = current <= totalPageNumber - 3;
  const classnames = classNames({
    "zen-pagination-disabled": disabled,
  });
  useEffect(() => {
    onChange(current, pageSize);
  }, [current, onChange, pageSize]);
  const pageChangeHandler = (pageNumber: number) => {
    if (!disabled) {
      if (pageNumber < 1) {
        setCurrent(1);
      }
      if (pageNumber > totalPageNumber) {
        setCurrent(totalPageNumber);
      }
      setCurrent(pageNumber);
    }
  };

  return (
    <>
      <ul className={`zen-pagination-list ${classnames}`}>
        {showQuickJumper && prevExists && (
          <li
            className="zen-pagination-list-item"
            onClick={pageChangeHandler.bind(null, current - 5)}
          >
            {"<<"}
          </li>
        )}
        {prevExists && (
          <li
            className="zen-pagination-list-item"
            onClick={pageChangeHandler.bind(null, current - 1)}
          >
            {"<"}
          </li>
        )}

        {firstExists && showFirstAndLast && (
          <li
            className="zen-pagination-list-item"
            onClick={pageChangeHandler.bind(null, 1)}
          >
            1
          </li>
        )}
        {prevDots && (
          <li
            className="zen-pagination-list-item zen-pagination-list-dots"
            // onClick={pageChangeHandler.bind(null, current - 1)}
          >
            <div className="zen-pagination-dots"> • • •</div>
          </li>
        )}
        {prevExists && (
          <li
            className="zen-pagination-list-item"
            onClick={pageChangeHandler.bind(null, current - 1)}
          >
            {current - 1}
          </li>
        )}
        {
          <li className="zen-pagination-list-item zen-pagination-list-item-selected">
            {current}
          </li>
        }
        {nextExists && (
          <li
            className="zen-pagination-list-item"
            onClick={pageChangeHandler.bind(null, current + 1)}
          >
            {current + 1}
          </li>
        )}
        {nextDots && (
          <li
            className="zen-pagination-list-item zen-pagination-list-dots"
            // onClick={pageChangeHandler.bind(null, current - 1)}
          >
            <div className="zen-pagination-dots"> • • •</div>
          </li>
        )}
        {lastExists && showFirstAndLast && (
          <li
            className="zen-pagination-list-item"
            onClick={pageChangeHandler.bind(null, totalPageNumber)}
          >
            {totalPageNumber}
          </li>
        )}
        {nextExists && (
          <li
            className="zen-pagination-list-item"
            onClick={pageChangeHandler.bind(null, current + 1)}
          >
            {">"}
          </li>
        )}
        {showQuickJumper && nextExists && (
          <li
            className="zen-pagination-list-item"
            onClick={pageChangeHandler.bind(null, current + 5)}
          >
            {">>"}
          </li>
        )}
      </ul>
    </>
  );
}

export default Pagination;
