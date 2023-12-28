import { useState } from "react"
import Auth from "../functions/auth"
import handleChange from "../functions/handleInputChange";
import { Link, useNavigate } from "react-router-dom";
import "../styles/sign.css"

// better alerts
import toast, { Toaster } from "react-hot-toast";


function Signup({ supabase }) {
  const auth = Auth(supabase)
  const [userInput, setUserInput] = useState({});
  const navigate = useNavigate();

  const usernameTaken = async (username) => {
    const { data, error } = await supabase.from("users").select().eq("name", username)
    return !(data.length === 0)
  }

  // signs up the user
  // try again later
  const handleSignup = async () => {
    // signs up user to supabase auth system
    if (userInput.name && userInput.password && userInput.email) {

      // check to see if the username is taken
      const checkUsername = await usernameTaken(userInput.name)
      if (checkUsername) {
        toast.error("Display name taken.")
      } else {
        const [data, error] = await auth.signupUser(userInput.email, userInput.password, userInput.name)
        const { user, session } = data;
        if (user) {
          const { data, error } = await supabase.from('users').insert({ user_id: user.id, name: user.user_metadata.name })
          toast.success("Signed up successfully!")

          // navigate back to home page
          navigate("/Book-Chronicles")

        } else {
          toast.error(error.message)
        }
      }
    } else {
      toast.error("You need to fill in all the fields!")
    }
  }


  return (
    <div className="outer-sign-container">
      <div className="sign-container">
        <h1 className="sign-title">Sign Up</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email"></label>
          <input className="search-input sign-input" onChange={(e) => handleChange(e, setUserInput)} placeholder="Email" id="email" name="email" type="email"></input>
          <div></div>

          <label htmlFor="password"></label>
          <input className="search-input sign-input" onChange={(e) => handleChange(e, setUserInput)} placeholder="Password" id="password" name="password" type="password"></input>

          <div></div>

          <label htmlFor="name"></label>
          <input className="search-input sign-input" onChange={(e) => handleChange(e, setUserInput)} placeholder="Display Name" id="name" name="name" type="text"></input>

          <div></div>

          <button onClick={handleSignup} type="submit" className="red-button sign-button">Signup</button>
          <div className="sign-link">
            <Link to="/Book-Chronicles/signin">Have an account? Sign in!</Link>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Signup
