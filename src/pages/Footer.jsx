import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <footer className="w-full theme-dark footer-0 text-center-desktop text-center-mobile">
    
            <ul className="footer-links">
                <li><Link to="/spa-react/">Home</Link></li>
                <li><Link to="/spa-react/products">Products</Link></li>
                <li><Link to="/spa-react/contact">Contact</Link></li>
            </ul>
        
            <div className="copyright">
                <p>Copyright © 2023 ABC Limited. All rights reserved.</p>
            </div>
        </footer>
   
    )
}

export default Footer;