import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-[999] flex items-center justify-center px-6 md:px-10 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
      {/* Nav links */}
      <div className="flex items-center gap-10">
        <Link 
          to="/" 
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: location.pathname === "/" ? "#e85d04" : "#d1d5db", letterSpacing: "0.01em" }}
          onMouseEnter={(e) => (e.target.style.color = "#e85d04")}
          onMouseLeave={(e) => (e.target.style.color = location.pathname === "/" ? "#e85d04" : "#d1d5db")}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: location.pathname === "/about" ? "#e85d04" : "#d1d5db", letterSpacing: "0.01em" }}
          onMouseEnter={(e) => (e.target.style.color = "#e85d04")}
          onMouseLeave={(e) => (e.target.style.color = location.pathname === "/about" ? "#e85d04" : "#d1d5db")}
        >
          About
        </Link>
        <Link 
          to="/blog" 
          className="text-sm font-medium transition-colors duration-200"
          style={{ color: location.pathname === "/blog" ? "#e85d04" : "#d1d5db", letterSpacing: "0.01em" }}
          onMouseEnter={(e) => (e.target.style.color = "#e85d04")}
          onMouseLeave={(e) => (e.target.style.color = location.pathname === "/blog" ? "#e85d04" : "#d1d5db")}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
