import { Link } from "react-router-dom"
import timeAgo from "../functions/timeAgo"
import like from "../assets/like.png"

function PostPreview({ id, title, created_at, vote, category, username }) {
  let tagColor = "back-pastel-green pastel-green"
  if (category == "review") {
    tagColor = "back-pastel-purple pastel-purple";
  } else if (category == "recommend") {
    tagColor = "back-pastel-red pastel-red"
  }

  return (
    <Link className="post-preview" to={`/post/${id}`}>
      <div className="post-preview-top">
        <p className="time-ago">Posted {created_at ? timeAgo(created_at) : " "}</p>
        <p className={`post-category ${tagColor}`}>#{category}</p>
      </div>
      <h2 className="pastel-black">{title}</h2>
      <div className="post-preview-bot">
        <div className="vote-image">
          <img src={like} className="upvotes, pastel-red" /><span className=""><b className="pastel-orange">{vote} </b></span>
        </div>
        <p>{username ? "~ " + username : ""}</p>
      </div>
    </Link >

  )
}

export default PostPreview
