import "../styles/navbar.css"
import { Link } from "react-router-dom"
import BackToTopButton from "./BackToTopButton";
import Auth from "../functions/auth"
import { useEffect } from "react";

function Navbar({ supabase, session }) {
  const auth = Auth(supabase)

  const handleLogout = () => {
    auth.logout()
    alert("Logged out.")
  }



  return (
    <nav className="navbar navbar-inverse navbar-expand-md navbar-light">
      <Link to="/">
        <img className="navbar-brand" width="64" height="64" src="https://img.icons8.com/cute-clipart/64/book.png" alt="book" />
      </Link>
      <div className="navbar-title-container d-flex align-items-center mx-auto">
        <h3>Bookshelf Chronicles</h3>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
          <Link to="/create" className="nav-item nav-link" href="#">Create</Link>
          <Link to="/getBookInfo" className="nav-item nav-link" href="#">Get Book</Link>
          <Link to="/userposts" className="nav-item nav-link" href="#">User Posts</Link>
          {session ? "" : <Link to="/signin" className="nav-item nav-link" href="#">Signin</Link>}
          {session ? <a onClick={handleLogout} className="nav-item nav-link" href="#">Logout</a> : ""}
        </div>
      </div>

      {/* IT WILL BE HERE FOR NOW */}
      <BackToTopButton />
    </nav>
  );
}

export default Navbar;
