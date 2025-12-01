import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">MyWebsite</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col md:hidden">
            <a href="#" className="py-3 px-4 hover:bg-gray-100">Home</a>
            <a href="#" className="py-3 px-4 hover:bg-gray-100">About</a>
            <a href="#" className="py-3 px-4 hover:bg-gray-100">Services</a>
            <a href="#" className="py-3 px-4 hover:bg-gray-100">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
