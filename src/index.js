// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// const myElement = React.createElement(
//   "ul",
//   {},
//   React.createElement("li", { style: { color: "blue" } }, "1 lb Salmon"),
//   React.createElement("li", { style: { color: "blue" } }, "1 cup Pine Nuts"),
//   React.createElement(
//     "li",
//     { style: { color: "blue" } },
//     "2 cup Butter Lettuce"
//   ),
//   React.createElement("li", { style: { color: "blue" } }, "1/2 cup olive oil"),
//   React.createElement("li", { style: { color: "blue" } }, "3 cloves of Garlic")
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

// import React from "react";
// import ReactDOM from "react-dom/client";
// function Book() {
//   return <h2>Hello, I am a book</h2>;
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Book />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// function Profession() {
//   return <h2>Hello, I am a student</h2>;
// }
// function Intro() {
//   return (
//     <>
//       <h1>My name is Mayur</h1>
//       <Profession />
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Intro />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// function Book(props) {
//   return <h2>The book is {props.name}</h2>;
// }
// const myElement = <Book name="Fundamentals of React Js" />;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);

// import React from "react";
// import ReactDOM from "react-dom/client";
// function Book(props) {
//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: "blue",
//           width: "100px",
//           height: "100px",
//         }}
//       ></div>
//       <h2 style={{ color: "red" }}>The book is {props.name}</h2>;
//     </>
//   );
// }
// function Bag() {
//   return (
//     <>
//       <h1>Which book is there in the bag?</h1>
//       <Book name="Fundamentals of React Js" />
//     </>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Bag />);

// function Bags(props) {
//   return (
//     <div style={{ border: "solid red 1px", background: "yellow" }}>
//       <h2 style={{ color: "green" }}>The book is {props.name}</h2>
//     </div>
//   );
// }

// function Book(props) {
//   const author = " wriiten by niteesh";
//   return (
//     <>
//       <h1 style={{ color: "red" }}>which book is this </h1>
//       <Bags name={author} />
//     </>
//   );
// }

// // const myElement = <Book name = "fundamental of React js"/>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<Book />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./NavigationBar.css";

// function NavigationBar() {
//   return (
//     <nav className="navigation-bar">
//       <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/">About</a>
//         </li>
//         <li>
//           <a href="/">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<NavigationBar />);
// import React from "react";
// import ReactDOM from "react-dom/client";
// class ControlledComponent extends React.Component {
//   state = {
//     username: "",
//     password: "",
//   };
//   handleUsernameChange = (e) =>
//     this.setState({
//       username: e.target.value,
//     });
//   handlePasswordChange = (e) =>
//     this.setState({
//       password: e.target.value,
//     });
//   handleSubmit = (e) => {
//     alert(
//       "The details are: " + this.state.username + " and" + this.state.password
//     );
//     e.preventDefault();
//   };
//   render() {
//     return (
// <form onSubmit={this.handleSubmit}>
//   Username:
//   <input
//     type={"text"}
//     value={this.state.username}
//     onChange={this.handleUsernameChange}
//   />
//   Password:{" "}
//   <input
//     type={"text"}
//     value={this.state.password}
//     onChange={this.handlePasswordChange}
//   />
//   <input type="submit" />
// </form>
//     );
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ControlledComponent />);
// import React,{useState} from 'react';
// import ReactDOM from "react-dom/client";
// const ControlledComponentWithHooks = () => {
//   const [state, setState] = useState({username:'',password:''})
//   const handleInputChange = (e) => {
//     const{name,value} = e.target;
//     setState((prevProps) => ({
//       ...prevProps,
//       [name]:value
//     }));
//   };
//   const handleSubmit = (e) => {
//     alert('The details are: '+ state.username + " and " + state.password);
//     e.preventDEfault();
//   }
//   return {
//     <form  onsubmit = {handleSubmit}>
//         Username:<input type={"text"} name="username" value={state.username} onChange={handleInputChange}/>
//         Password:
//         <input
//           type={"text"}
//           name="password"
//           value={state.password}
//           onChange={handleInputChange}
//         />
//         <input type="submit" />
//       </form>
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ControlledComponentWithHooks />);
// import React, { useRef } from "react";
// import ReactDOM from "react-dom/client";
// const UncontrolledComponent = () => {
//   const inputRef1 = useRef(null);
//   const inputRef2 = useRef(null);
//   const handleSubmit = (e) => {
//     alert(
//       "the details are : " +
//         inputRef1.current.value +
//         "and " +
//         inputRef2.current.value
//     );
//     e.preventDefault();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       Username:
//       <input type="text" ref={inputRef1} />
//       Password:
//       <input type="text" ref={inputRef2} />
//       <input type="submit" />
//     </form>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<UncontrolledComponent />);
// import React, { useState } from "react";
// import axios from "axios";
// import ReactDOM from "react-dom/client";
// const App = () => {
//   const [users, setUsers] = useState([]);
//   axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => setUsers(response.data))
//     .catch((e) => console.log("something went wrong : (", e));
//   return (
//     <div>
//       <ul>
//         {users.map((user) => (
//           <li>
//             {" "}
//             key={user.id}>{user.id}-{user.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
import React, { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formData,
        config
      );
      console.log(res.data); // show response data in console
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);
