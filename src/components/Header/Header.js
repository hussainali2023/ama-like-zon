import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="header">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/orders"}>Orders</Link>
        <Link to={"/inventory"}>Inventory</Link>
        <Link to={"/about"}>About</Link>
        {user?.uid ? (
          <Link to={"/login"}>LogOut</Link>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
