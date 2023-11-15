import { useState } from "react"
import Auth from "../functions/auth"
import handleChange from "../functions/handleInputChange";
import { Link } from "react-router-dom";


function Signup({ supabase }) {
  const auth = Auth(supabase)
  const [userInput, setUserInput] = useState({});

  // signs up the user
  // try again later
  const handleSignup = async () => {
    auth.signupUser(userInput.email, userInput.password, userInput.name)
  }

  return (
    <>
      <h1>Sign Up</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email"></label>
        <input onChange={(e) => handleChange(e, setUserInput)} required placeholder="Email" id="email" name="email" type="email"></input>

        <div></div>

        <label htmlFor="password"></label>
        <input onChange={(e) => handleChange(e, setUserInput)} required placeholder="Password" id="password" name="password" type="text"></input>

        <div></div>

        <label htmlFor="name"></label>
        <input onChange={(e) => handleChange(e, setUserInput)} required placeholder="Display Name" id="name" name="name" type="text"></input>

        <div></div>

        <button onClick={handleSignup} type="submit" className="red-button">Signup</button>
        <Link to="/signin"><button type="button" className="orange-button">Sign in</button></Link>
      </form>


    </>

  )
}

export default Signup
