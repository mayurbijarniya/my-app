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
// root.render(<Book />);
import React from "react";
import ReactDOM from "react-dom/client";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NavigationBar />);
