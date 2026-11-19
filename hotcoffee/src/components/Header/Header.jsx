import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">HotCoffee</Link>

      <div className="search">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <a href="#" aria-label="instagram"><AiFillInstagram /></a>
        <a href="#" aria-label="twitter"><FaTwitter /></a>
        <a href="#" aria-label="linkedin"><FaLinkedin /></a>
      </nav>
    </header>
  );
}