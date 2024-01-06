import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../styles/userpost-page.css";

function UserPosts({ supabase }) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data, error } = await supabase.from("users").select().order("name");
    for (let i = 0; i < data.length; i++) {
      const user = data[i];
      const posts = await getPosts(user);
      data[i].posts = posts;
    }

    data.sort((userA, userB) => userB.posts.length - userA.posts.length);

    setUsers(data);
  };

  const getPosts = async (user) => {
    const { data, error } = await supabase.from("posts").select().eq("user_id", user.user_id);
    return data;
  };

  useEffect(() => {
    const gettingUsers = getUsers();
    toast.promise(gettingUsers, {
      loading: 'Grabbing all users...',
      success: "Click on a user to see their posts!",
      error: "Error while getting users..."
    });
  }, []);

  const displayUsers = () => {
    return users.filter((user) => user.posts.length).map((user) => (
      <div key={user.id} className="col-lg-4 col-md-6 mb-3">
        <div className="card user-card">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/Book-Chronicles/users/${user.name}`}>{user.name}</Link>
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">{user.posts.length} Posts</h6>
          </div>

        </div>
      </div >
    ));
  };

  return (
    <div className="outer-user-cards-container">
      <div className="row user-cards-container">
        {displayUsers()}
      </div>
    </div>
  );
}

export default UserPosts;
