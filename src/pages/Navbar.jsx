// Navbar.js
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
          <ul>
              <li><Link to="/spa-react/">Home</Link></li>
              <li><Link to="/spa-react/products">Products</Link></li>
              <li><Link to="/spa-react/contact">Contact</Link></li>
          </ul>
  </nav>
  );
}

export default Navbar;