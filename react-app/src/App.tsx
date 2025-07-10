import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}> My Alert Message</Alert>
      )}
      <Button color="info" onClick={() => setAlertVisible(true)}>
        Click Me
      </Button>
    </div>
  );
}
export default App;
