import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [data, setData] = useState(null);

  const handleData = (propsdata) => {
    setData(propsdata);
    console.log(propsdata);
  };

  return (
    <div>
      <Child Parentprops={handleData} />
      {data && <p>{data}</p>}
    </div>
  );
}

export default Parent;
