import React from "react";
import Pagination from "./components/Pagination/Pagination";

function Testing() {
  return <Pagination showFirstAndLast defaultCurrent={2} total={50} pageSize={9}/>;
}

export default Testing;
