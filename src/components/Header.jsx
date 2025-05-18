import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon library

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" text-white shadow-md" style={{ background: "#004733" }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">Better</Link>
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-green-500 font-semibold">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-500 font-semibold">
            About
          </Link>
          <Link to="/calculator" className="hover:text-green-500 font-semibold">
            Mortgage calculator
          </Link>
          <Link to="/start" className="hover:text-green-500 font-semibold">
            Start
          </Link>
        </nav>

        {/* Hamburger button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-yellow-300">
            Home
          </Link>
          <Link to="/about" className="block hover:text-yellow-300">
            About
          </Link>
          <Link to="/calculator" className="block hover:text-yellow-300">
            Calculator
          </Link>
          <Link to="/start" className="block hover:text-yellow-300">
            Start
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
