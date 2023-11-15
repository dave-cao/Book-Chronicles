import { useEffect, useState } from "react"

function UserPosts({ supabase }) {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const { data, error } = await supabase.from("users").select().order("name")
    setUsers(data)
  }

  useEffect(() => {
    getUsers();
  }, [])

  const displayUsers = () => {
    return users.map((user) => {
      return <li key={user.id}>{user.name}</li>
    })
  }
  console.log(users)


  return (
    <div>{displayUsers()}</div>
  )
}

export default UserPosts
