// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  // const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <ListGroup
        items={["New York", "San Francisco", "Los Angeles"]}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      />
    </>
  );
}
<div>
  {/* {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}> My Alert Message</Alert>
      )}
      <Button color="info" onClick={() => setAlertVisible(true)}>
        Click Me
      </Button> */}
</div>;
//
export default App;
