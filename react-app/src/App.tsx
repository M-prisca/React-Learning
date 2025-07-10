import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="info" onClick={() => console.log("Button clicked!")}>
        Click Me
      </Button>
    </div>
  );
}
export default App;
