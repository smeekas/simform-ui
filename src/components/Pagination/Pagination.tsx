import React, { useState, CSSProperties, MouseEventHandler } from "react";
import "./Pagination.scss";
type PaginationPropTypes = {
  total?: number;
  onChange?: (page?: number, pageSize?: number) => void;
  //   onPageSizeChange?: (page?: number, pageSize?: number) => void;
  current?: number;
  defaultCurrent?: number;
  pageSize?: number;
  defaultPageSize?: number;
};
function Pagination(props: PaginationPropTypes) {
  const {
    current: currentProp,
    defaultCurrent,
    defaultPageSize,
    pageSize: pageSizeProp,
    total = 1,
  } = props;
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
  const pageChangeHandler = (pageNumber: number) => {
    setCurrent(pageNumber);
  };
//   const totalPageNumber=total/pageSize
  const prevExits = current !== 1;
  const nextExists = current * pageSize < total;
  const FirstExists = current > 2;
//   const lastExists=d
  const prevDots = current > 2;
  console.log(current);
  return (
    <>
      <ul className="zen-pagination-list">
        {prevExits && (
          <li
            className="zen-pagination-list-item"
            onClick={pageChangeHandler.bind(null, current - 1)}
          >
            {"<"}
          </li>
        )}

        {FirstExists && (
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
        {prevExits && (
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
        {nextExists && (
          <li
            className="zen-pagination-list-item"
            onClick={pageChangeHandler.bind(null, current + 1)}
          >
            {">"}
          </li>
        )}
      </ul>
    </>
  );
}

export default Pagination;
