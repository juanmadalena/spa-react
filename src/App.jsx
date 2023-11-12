import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import './App.css'

function App() {

  const ROUTES = [
    { name:"Home", path: "/spa-react/", element: <Home /> },
    { name:"Products", path: "/spa-react/products", element: <Products /> },
    { name:"Contact", path: "/spa-react/contact", element: <Contact /> },
    { name:null, path: "/spa-react/*", element: <PageNotFound /> },
  ]

  return (
    <Router>
      <Navbar/>
      <Routes>
        {
          ROUTES.map( ({name, path, element}) => (
            <Route path={path} element={element} key={name}/>
          ))
        }
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
