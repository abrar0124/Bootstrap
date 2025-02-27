import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [data, setData] = useState([]);

  const Receivingprops = (props) => {
    setData((prevprops) => [...prevprops, props]);
  };
  return (
    <>
      <Child parentprops={Receivingprops} />
      {data.map((p) => (
        <h2>{p}</h2> // Correct JSX inside map
      ))}
    </>
  );
}

export default Parent;
