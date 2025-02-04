import { useState } from "react";
import { Link } from "react-router-dom";
/*Using Lucide icons for the menu buttons */
import { Menu, X, Smile } from "lucide-react";

 function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-lg">
      <div className="container">
        
        <Link to="/" className="navbar-brand">
        <Smile size={30} /> Simpel
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navbar Links, collapse for mobile link menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/expenses" className="nav-link">Expenses</Link>
            </li>
            <li className="nav-item">
              <Link to="/Add" className="nav-link">Add</Link>
            </li>
            <li className="nav-item">
              <Link to="/Summary" className="nav-link">Summary</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;