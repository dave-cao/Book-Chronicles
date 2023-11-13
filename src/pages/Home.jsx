/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import fuzzySearch from "../functions/fuzzySearch";
import PostPreview from "../components/PostPreview";
import "../styles/home.css"



function Home({ supabase }) {

  // get the books from the database
  const [posts, setPosts] = useState([])
  const [sorts, setSorts] = useState({ created_at: false, vote: true })
  const [search, setSearch] = useState("")

  const getPosts = async () => {
    const { data, error } = await supabase.from("posts").select().order("created_at", { ascending: false });
    setPosts(data);
  }


  // get books when user goes to home page
  useEffect(() => {
    getPosts()
  }, [])

  // update the search bar state values
  const updateSearch = (event) => {
    setSearch(event.target.value)
  }

  // display post previews
  const displayPostPreviews = () => {
    const searchResults = fuzzySearch(search, posts, ["title", "category"])
    return searchResults.map((post) => {
      return <PostPreview key={post.id} id={post.id} title={post.title} created_at={post.created_at} vote={post.vote} category={post.category} />
    })
  }


  // logic to sort posts on button press
  const sortPosts = (sortKey) => {
    // deep copy of posts
    const postsCopy = JSON.parse(JSON.stringify(posts))

    if (sortKey === "vote") {
      // sort by vote
      if (sorts.vote) {
        postsCopy.sort((a, b) => b.vote - a.vote)
      } else {
        postsCopy.sort((a, b) => a.vote - b.vote)
      }

      // flip sorts bool for vote
      setSorts((prev) => {
        return {
          ...prev,
          vote: !sorts.vote,
        }
      })

    } else {
      // sort by created at date
      if (sorts.created_at) {
        postsCopy.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      } else {
        postsCopy.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      }

      setSorts((prev) => {
        return {
          ...prev,
          created_at: !sorts.created_at,
        }
      })
    }
    setPosts(postsCopy)
  }



  return (
    <>
      <div className="home-title-outside-container">
        <div className="home-title-container">
          <h1 className="home-title"><span className="pastel-black">Home</span> <span className="accent">Feed</span></h1>
          <h2 className="home-subtitle">Reviews and Recommendations</h2>
        </div>
      </div>

      <div className="input-outside-container">
        {/* container for buttons and input bar */}
        <div className="input-container">
          {/* search for posts based on text */}
          <input
            className="search-input" // Add a class for styling
            onChange={updateSearch}
            placeholder="Search"
            type="text"
          />
          {/* order the posts */}
          <div className="sort-posts-container">
            <span>Order by: </span>
            <button className="darkAccent btn sort-button" onClick={() => { sortPosts("created_at") }}>Newest</button>
            <button className="btn sort-button" onClick={() => { sortPosts("vote") }}>Most Popular</button>
          </div>

        </div>
      </div>

      {/* the post previews */}
      <div className="post-preview-container">

        {displayPostPreviews()}
      </div>
    </>
  )
}

export default Home
