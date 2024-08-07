# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# ROUTES

### The new login Routes

### 
##### Every chat ha a an Unique ID

## The react Documentations

## We will have the following Sequence

<p4>
||Main 
<br>|
 <br>||
App
 <br>||
Home  Chat PageNotFound login(main)

Tree Renderer
</p4>

### The rendering of the APP

### THE ROUTE SPECIFICATION
####  / (Home) 
####  /login (Login)
####  /UniqirID (Chat)
####  Page Not Found (U.R.L Error)


###### The UI Changes according to the route
### To load components , on the basis of Routes

<p1>React Router DOM will do thaht thang</p1>




React Router 6 is a powerful routing library for React applications, providing a way to manage navigation between different views or components. Below is a tutorial to get you started with React Router 6.

1. Setting Up Your Project
First, ensure you have a React project set up. If not, create one using Create React App:

bash
Copy code
npx create-react-app my-app
cd my-app
2. Installing React Router
Install React Router by running the following command:

bash
Copy code
npm install react-router-dom@6
3. Basic Setup
Import the necessary components and set up the basic routing structure in your App.js file.


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






######New Application

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <Routes>
        <Route path=":id" element={<User />} />
      </Routes>
    </div>
  );
}

function User() {
  let { id } = useParams();
  return <h3>User ID: {id}</h3>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


### The main renders the main component
#### It wraps the APP Component
#### And app contains the Login


## The login methods
#   C h a t t i n g - A p p l i c a t i o n  
 