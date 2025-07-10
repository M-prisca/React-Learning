import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="My List"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
// This is the main entry point of the React application.
// It imports the ListGroup component and renders it within a div.
// The ListGroup component is expected to handle the display of a list, likely with some interactive
// functionality such as adding or removing items, or displaying a message when the list is empty.
// The App component serves as the root component of the application, which can be expanded with more
// components and features as needed.
// The application is structured to allow for easy expansion and modification, with the ListGroup
