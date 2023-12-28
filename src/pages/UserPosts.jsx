import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast";

function UserPosts({ supabase }) {
  const [users, setUsers] = useState([])

  /*
   * Gets each user in the database and their posts
   * */
  const getUsers = async () => {
    const { data, error } = await supabase.from("users").select().order("name")
    // for every user they you got, get their posts
    for (let i = 0; i < data.length; i++) {
      const user = data[i]
      const posts = await getPosts(user)

      // set the posts within the data object
      data[i].posts = posts
    }

    // sort the user posts that populate by most posts
    data.sort((userA, userB) => {
      if (userA.posts.length < userB.posts.length) {
        return 1
      }
      if (userA.posts.length > userB.posts.length) {
        return -1
      }
      return 0
    })

    setUsers(data)
  }

  /*
   * Gets the posts of a user 
   * */
  const getPosts = async (user) => {
    const { data, error } = await supabase.from("posts").select().eq("user_id", user.user_id)
    return data
  }

  /*
   * Get's user data when first load in page
  */
  useEffect(() => {
    const gettingUsers = getUsers();
    toast.promise(gettingUsers, {
      loading: 'Grabbing all users...',
      success: "Click on a user to see their posts!",
      error: "Error while getting users..."

    })
  }, [])

  const displayUsers = () => {
    return users.map((user) => {
      return <li key={user.id}><Link to={`/Book-Chronicles/users/${user.name}`}>{user.name} ~ {user.posts.length}</Link></li>
    })
  }

  return (
    <div>
      {displayUsers()}
    </div>
  )
}

export default UserPosts
