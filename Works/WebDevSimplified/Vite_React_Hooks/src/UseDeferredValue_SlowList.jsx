import React, { useMemo } from "react";

function UseDeferredValue_SlowList({ inputSlow }) {
  const LIST_SIZE = 20000;

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{inputSlow}</div>);
    }
    return l;
  }, [inputSlow]);

  return list;
}

export default UseDeferredValue_SlowList;
