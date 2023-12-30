import React from 'react'
import ProfileTabs from '../components/EditProfileTabs'
import "../styles/profile.css"
import Auth from '../functions/auth'


function UserProfile({ supabase, session }) {
  const email = session.user.email
  const name = session.user.user_metadata.name
  const auth = Auth(supabase)

  const handleUserUpdate = async () => {
    const [data, error] = await auth.changeEmail("")
    console.log("DATA", data)
    console.log("ERROR", error)
  }

  return (
    <>
      <div>WIP...</div>
      <div className='profile-tabs-container'>
        <ProfileTabs currentEmail={email} name={name} handleUserUpdate={handleUserUpdate} />
      </div>
    </>
  )
}

export default UserProfile
