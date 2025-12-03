import { Bell, Menu, House, Box, Component, StickyNote, SquareCheckBig, Images, FileText, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <House size={20} /> },
    { name: "Interface", path: "/interface", icon: <Box size={20}/> },
    { name: "Components", path: "/components", icon:  <Component size={20}/> },
    { name: "Pages", path: "/pages", icon: <StickyNote size={20}/> },
    { name: "Forms", path: "/forms", icon: <SquareCheckBig size={20}/> },
    { name: "Gallery", path: "/gallery", icon: <Images size={20}/> },
    { name: "Documentation", path: "/documentation",  icon: <FileText size={20}/> },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      {/* main header */}
      <div className="flex items-center justify-between py-4 border-b border-gray-200 px-10">
        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="tabler logo" className="h-10" />
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/BenedictaUche/tabler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-blue-600 border-2 border-blue-600 px-3 py-1.5 rounded-md text-sm font-medium hidden md:block hover:bg-blue-50">
              Source code
            </button>
          </a>
          <Bell size={24} className="text-gray-600 hidden md:block" />
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img
                src="https://github.com/shadcn.png"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="text-sm text-gray-600 hidden md:block">
              <p className="text-base font-normal">Jane Pearson</p>
              <p className="text-xs font-normal text-gray-500">Administrator</p>
            </div>
          </div>

          {/* mobile menu */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* navigation tabs */}
      <div className="hidden md:flex border-b border-gray-200 px-16">
        <nav className="flex space-x-4 p-2 overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-gray-700 hover:text-blue-600 font-normal text-base flex gap-2 items-center ${
                location.pathname === link.path
                  ? "border-b-2 border-blue-600 font-medium text-blue-600"
                  : ""
              }`}
            >
              <span className="text-gray-400">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* mobile menu for smaller screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-all duration-500 ease-out z-50 ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100 scale-100"
            : "-translate-x-full opacity-0 scale-95"
        }`}
      >
        {/* close button */}
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        {/* mobile navigation links */}
        <nav className="flex flex-col p-4 space-y-10 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-gray-600 hover:text-blue-600 flex items-center gap-2 ${
                location.pathname === link.path
                  ? "border-b-2 w-28 border-blue-600 font-medium text-blue-600"
                  : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{link.icon}</span>
              {link.name}
            </Link>
          ))}

          <div className="flex justify-center gap-4 items-center">
          <Bell size={32} className="text-gray-600" />
          <a
            href="https://github.com/BenedictaUche/tabler"
            target="_blank"
            rel="noopener noreferrer"

          >
            <button className="text-blue-500 border-2 border-blue-500 p-2 rounded-md ">
              Source code
            </button>
          </a>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
