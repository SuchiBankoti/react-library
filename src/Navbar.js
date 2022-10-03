import { Link } from "react-router-dom";
import sign from "./sign.png";
import { FaHome } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import SignUpForm from "./SignUpForm";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/Library" className="link">
          <h1>OPEN BOOKS</h1>
        </Link>
        <AiFillBook />
      </div>
      <div className="nav-right">
        <div>
          <SignUpForm />
        </div>
        <Link to="/">
          <FaHome className="homeicon" />
        </Link>
        <img alt="" src={sign} />
      </div>
    </nav>
  );
}
