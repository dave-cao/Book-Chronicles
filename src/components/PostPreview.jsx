import { Link } from "react-router-dom"
import timeAgo from "../functions/timeAgo"
import like from "../assets/like.png"
import postHTMLContent from "./StringToJSX"
import TagsTooltip from "../components/ToolTip";
import getTagColor from "../functions/getTagColor";

function PostPreview({ id, title, created_at, vote, tags, username, img_url, content, currentUserLiked }) {

  const displayTags = () => {
    let newTags = tags.slice(0, 1)
    return newTags.map((tag) => {
      let tagColor = getTagColor(tag)
      return <p key={tag + id} className={`post-category ${tagColor}`}>#{tag}</p>
    })
  }

  // takes out excessive white space via regex
  const truncateContent = content.length >= 300 ? content.replace(/<p>&nbsp;<\/p>/g, '').substring(0, 300) + "..." : content.replace(/<p>&nbsp;<\/p>/g, '')
  const htmlcontent = postHTMLContent(truncateContent)

  return (
    <Link className="post-preview" to={`/Book-Chronicles/post/${id}`}>
      <div className="post-preview-top">
        <p className="time-ago">Posted {created_at ? timeAgo(created_at) : " "}</p>
        {tags.length > 1 ? <div className="preview-tags-container">{displayTags()}<small><TagsTooltip tags={tags} subtracted={1} /></small></div> : <div className="preview-tags-container">{displayTags()}</div>}
      </div>
      <div className="post-preview-middle">
        <h2 className="pastel-black">{title}</h2>
        <div className="post-preview-img-content">
          {img_url ?
            <img className="post-preview-image" src={img_url} /> : ""}
          <div className="post-preview-content">{htmlcontent} </div>
        </div>
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
