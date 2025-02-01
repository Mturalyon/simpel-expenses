import { useState } from "react";
import { Link } from "react-router-dom";
/*Using Lucide icons for the menu buttons */
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-lg">
      <div className="container">
        
        <Link to="/" className="navbar-brand">
        😀 Simpel
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navbar Links */}
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