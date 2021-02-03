import React from "react";

const FunctionalComponent = (props) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("Hello");
    var scene = document.querySelector("a-scene").renderStarted;
    console.log(scene);
    document.querySelector('a-scene').addEventListener('loaded', ()=>console.log("loaded"));
  }, []);
  React.useEffect(() => {
    return () => {
      console.log("Bye");
    };
  }, []);
  return <div>
    <h1>Hello,  {props.name}</h1>
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  </div>;
};


export default FunctionalComponent;