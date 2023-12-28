import "../styles/navbar.css"
import { Link } from "react-router-dom"
import BackToTopButton from "./BackToTopButton";
import Auth from "../functions/auth"
import toast, { Toaster } from "react-hot-toast";
import "../styles/profile.css"

function Navbar({ supabase, session }) {
  const auth = Auth(supabase)
  const handleLogout = () => {
    auth.logout()
    toast("Goodbye!", { icon: "👋" })
  }


  return (
    <nav className="navbar navbar-inverse navbar-expand-md navbar-light">
      <Link to="/Book-Chronicles">
        <img className="navbar-brand" width="64" height="64" src="https://img.icons8.com/cute-clipart/64/book.png" alt="book" />
      </Link>
      <div className="navbar-title-container d-flex align-items-center mx-auto">
        {session ? <h3>{session.user.user_metadata.name + "'s" + " Bookshelf"}</h3> :
          <h3>Bookshelf Chronicles</h3>
        }
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/Book-Chronicles" className="nav-item nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
          <Link to="/Book-Chronicles/create" className="nav-item nav-link" href="#">Create</Link>
          {session ? "" : <Link to="/Book-Chronicles/signin" className="nav-item nav-link" href="#">Signin</Link>}

          {/* For the profile pic drop down */}
          {session ?
            <div className="nav-item nav-link dropdown">
              <a className="dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle"></img>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to={`/Book-Chronicles/users/${session.user.user_metadata.name}`} className="dropdown-item">Dashboard</Link>
                <Link to="/Book-Chronicles/userposts" className="dropdown-item" href="#">Other Users</Link>
                <Link to={"/Book-Chronicles/profile"} className="dropdown-item">Edit Profile</Link>
                <Link onClick={handleLogout} to={"/Book-Chronicles"} className="dropdown-item">Log Out</Link>
              </div>

            </div>
            : ""
          }
        </div>
      </div>

      {/* IT WILL BE HERE FOR NOW */}
      <BackToTopButton />
    </nav >
  );
}

export default Navbar;
