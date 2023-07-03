import React, { useDeferredValue, useMemo } from "react";

function UseDeferredValue_FastList({ inputFast }) {
  const LIST_SIZE = 20000;

  const deferredInput = useDeferredValue(inputFast);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  return list;
}

export default UseDeferredValue_FastList;
