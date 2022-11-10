import { useCallback } from "react";
function useMemoizeFunction(func: Function) {
  return useCallback(func, [func]);
}
export default useMemoizeFunction;
