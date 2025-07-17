import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
//import { FaCalendarAlt } from "react-icons/fa";
//import ListGroup from "./components/ListGroup/ListGroup";
// import "./App.css";
// import Like from "./components/Like";

// import Message from "./Message";

function App() {
  const [customer, setCustomer] = useState({
    name: "prisca",
    address: {
      city: " kigali",
      zipCode: 1123,
    },
  });
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 2345 },
    });
  };
}

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
