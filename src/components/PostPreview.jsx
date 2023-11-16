import { Link } from "react-router-dom"
import timeAgo from "../functions/timeAgo"
import like from "../assets/like.png"
import postHTMLContent from "./StringToJSX"

function PostPreview({ id, title, created_at, vote, category, username, img_url, content, currentUserLiked }) {
  let tagColor = "back-pastel-green pastel-green"
  if (category == "review") {
    tagColor = "back-pastel-purple pastel-purple";
  } else if (category == "recommend") {
    tagColor = "back-pastel-red pastel-red"
  }

  const truncateContent = content.length >= 300 ? content.substring(0, 300) + "..." : content
  const htmlcontent = postHTMLContent(truncateContent)

  return (
    <Link className="post-preview" to={`/Book-Chronicles/post/${id}`}>
      <div className="post-preview-top">
        <p className="time-ago">Posted {created_at ? timeAgo(created_at) : " "}</p>
        <p className={`post-category ${tagColor}`}>#{category}</p>
      </div>
      <div className="post-preview-middle">
        <h2 className="pastel-black">{title}</h2>
        {img_url ? <img className="post-preview-image" src={img_url} /> : ""}
        <div className="post-preview-content">{htmlcontent} </div>
      </div>
      <div className="post-preview-bot">
        <div className="vote-image">
          <img src={like} className="upvotes pastel-red" /><span className=""><b className={currentUserLiked ? "pastel-orange" : ""}>{vote} </b></span>
        </div>
        <p>{username ? "~ " + username : ""}</p>
      </div>
    </Link >

  )
}

export default PostPreview
