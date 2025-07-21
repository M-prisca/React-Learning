import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
//import { FaCalendarAlt } from "react-icons/fa";
//import ListGroup from "./components/ListGroup/ListGroup";
// import "./App.css";
// import Like from "./components/Like";
// import Message from "./Message";
// import { produce } from "immer";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug1", fixed: false },
//     { id: 2, title: "Bug2", fixed: false },
//   ]);

//   const handleClick = () => {
//     // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <div key={bug.id}>
//           {" "}
//           {bug.title} {bug.fixed ? "fixed" : "New"}
//         </div>
//       ))}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// function App() {
//   const [tags, setTags] = useState(["happy", "cheerful"]);

//   const handleClick = () => {
//     setTags([...tags, "exciting"]); //add

//     setTags(tags.filter((tag) => tag !== "happy")); // remove

//     setTags(tags.map((tag) => (tag === "happ" ? "happiness" : tag)));
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// function App() {
//   const [customer, setCustomer] = useState({
//     name: "prisca",
//     address: {
//       city: " kigali",
//       zipCode: 1123,
//     },
//   });
//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zipCode: 2345 },
//     });
//   };
// }

// function App() {
//   const [drink, setDrink] = useState({
//     title: "Coke",
//     price: 1.99,
//   });

//   const handleClick = () => {
//     setDrink({ ...drink, price: 3.99 });
//   };
//   return (
//     <div>
//       {drink.price}
//       <button onClick={handleClick}>Update drink</button>
//     </div>
//   );
// }

//       <Message />
//     </div>
//   );
// }

// const [person, setPerson] = useState({
//   firstName: "",
//   lastName: "",
//   contact: {
//     address: {
//       street: "",
//       city: "",
//     },
//   },
// });

// const [isLoading, setIsLoading] = useState(false);
// return (
//   <div></div>

// <div>
//   <Like onClick={() => console.log("Liked!")} />
// </div>
// <Button onClick={() => {}}>Click Me</Button>
// <div>
//   <FaCalendarAlt color="blue" size={40} />
// </div>
// <div>
//   {alertVisible && (
//     <Alert onClose={() => setAlertVisible(false)}> My Alert Message</Alert>
//   )}
// </div>

// <>
//   <ListGroup
//     items={["New York", "San Francisco", "Los Angeles"]}
//     heading="Cities"
//     onSelectItem={(item) => console.log(item)}
//   />
// </>
//   );
// }

//
export default App;
