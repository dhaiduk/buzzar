import React from "react";
import CustomizedMenus  from "../components/arMenu"
const ARPage = (props) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("Hello");
  }, []);
  React.useEffect(() => {
    return () => {
      console.log("Bye");
    };
  }, []);
  return <div>
    <CustomizedMenus/>
    {/*<h1>Hello,  {props.name}</h1>
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      Are you want to make a gift AR?
</div>*/}
  </div>;
};


export default ARPage;