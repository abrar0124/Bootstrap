import { useState } from "react";
import Child from "./Child";
function Parent() {
  const [data, setdata] = useState("");
  const handle = (propsdata) => {
    setdata(propsdata);
    console.log(propsdata);
  };
  return (
    <>
      <Child parentprops={handle} />
      {data && <p>{data}</p>}
    </>
  );
}
export default Parent;
