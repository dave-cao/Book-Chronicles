import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function UserPosts({ supabase }) {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const { data, error } = await supabase.from("users").select().order("name")
    for (let i = 0; i < data.length; i++) {
      const user = data[i]
      const posts = await getPosts(user)
      data[i].posts = posts
    }
    setUsers(data)
  }

  const getPosts = async (user) => {
    const { data, error } = await supabase.from("posts").select().eq("user_id", user.user_id)
    return data
  }

  useEffect(() => {
    getUsers();
  }, [])

  const displayUsers = () => {
    return users.map((user) => {
      return <li key={user.id}><Link to={`/Book-Chronicles/users/${user.user_id}`}>{user.name} ~ {user.posts.length}</Link></li>
    })
  }


  return (
    <div>{displayUsers()}</div>
  )
}

export default UserPosts
