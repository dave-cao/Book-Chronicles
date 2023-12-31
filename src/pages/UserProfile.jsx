import React, { useState } from 'react'
import ProfileTabs from '../components/EditProfileTabs'
import "../styles/profile.css"
import Auth from '../functions/auth'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


function UserProfile({ supabase, session }) {
  const [userInput, setUserInput] = useState({})
  const navigate = useNavigate()


  const email = session.user.email
  const id = session.user.id
  const name = session.user.user_metadata.name
  const auth = Auth(supabase)

  const handleNameUpdate = async () => {
    // if the username, has not been taken, then update
    if (!(await auth.usernameTaken(userInput.username))) {
      // update users, posts, and comments
      const { updateError } = await supabase.from("users").update({ name: userInput.username }).eq("user_id", id)
      const { updatePostsError } = await supabase.from("posts").update({ username: userInput.username }).eq("user_id", id)
      const { updateCommentsError } = await supabase.from("comments").update({ username: userInput.username }).eq("user_id", id)
      const [data, error] = await auth.changeName(userInput.username)
      toast.success(`${name} has been changed to ${userInput.username}`)
    } else {
      toast.error("Username already taken!")
    }
  }

  const handlePasswordUpdate = async () => {
    if (userInput.newPassword === userInput.confirmPassword) {
      const [data, error] = await auth.changePassword(userInput.newPassword)
      if (error) {
        toast.error(error.message)
      } else {
        toast.success("Password changed. Logged out.")
        navigate("/Book-Chronicles/signin")
        auth.logout()
      }
    } else {
      toast.error("Passwords do not match!")
    }

  }

  const handleUserInput = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value

    setUserInput((prev) => {
      return {
        ...prev,
        [inputName]: inputValue,
      }
    })
  }

  return (
    <>
      <div className='profile-tabs-container'>
        <ProfileTabs handleUserInput={handleUserInput} currentEmail={email} name={name} handleNameUpdate={handleNameUpdate} handlePasswordUpdate={handlePasswordUpdate} />
      </div>
    </>
  )
}

export default UserProfile
