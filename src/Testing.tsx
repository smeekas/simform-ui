import React from "react";
import Pagination from "./components/Pagination/Pagination";

function Testing() {
  const changeHandler = (page: number, pageSize: number) => {
    console.log(page + " " + pageSize);
  };
  return (
    <Pagination
      onChange={changeHandler}
      showFirstAndLast
      defaultCurrent={2}
      total={50}
      pageSize={9}
    />
  );
}

export default Testing;
