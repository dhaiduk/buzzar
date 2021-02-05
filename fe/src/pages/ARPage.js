import React from "react";
import CustomizedMenus  from "../components/arMenu"


const ARPage = (props) => {
  //const [count, setCount] = React.useState(0);
    React.useEffect(() => {
    console.log("Hello");
  }, []);
  React.useEffect(() => {
    return () => {
      console.log("Bye");
    };
  }, []);
  return <React.Fragment>
    <CustomizedMenus/>
    </React.Fragment>;
};


export default ARPage;