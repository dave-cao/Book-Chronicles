/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import fuzzySearch from "../functions/fuzzySearch";
import PostPreview from "../components/PostPreview";
import "../styles/home.css"
import Gear from "../components/Gear";

import toast from "react-hot-toast";



function Home({ supabase, session }) {

  // get the books from the database
  const [posts, setPosts] = useState([])
  const [sorts, setSorts] = useState({ created_at: false, vote: true })
  const [search, setSearch] = useState("")
  const [totalPosts, setTotalPosts] = useState(0)
  const [page, setPage] = useState(1)
  const user = session ? session.user : { user_metadata: {} }
  const user_id = user.id
  const POST_OFFSET = 6

  const getPosts = async (pageNumber) => {
    const startRange = (pageNumber - 1) * POST_OFFSET
    const endRange = startRange + POST_OFFSET - 1
    const { data, error } = await supabase.from("posts").select().range(startRange, endRange).order("created_at", { ascending: false });
    setPosts(data);
  }

  const getTotalPosts = async () => {
    const { data, error } = await supabase.from("posts").select('*', { count: 'exact' })
    setTotalPosts(data.length)
  }


  // get books when user goes to home page
  useEffect(() => {
    const gettingPosts = getPosts(1);
    toast.promise(gettingPosts, {
      loading: 'Loading your posts...',
      success: 'Bookshelf Loaded',
      error: 'Error when fetching',
    })

    // get total count of posts
    getTotalPosts()
  }, [])

  // update the search bar state values
  const updateSearch = (event) => {
    setSearch(event.target.value)
  }

  // display post previews
  const displayPostPreviews = () => {

    const searchResults = fuzzySearch(search, posts, ["title", "tags", "username"])
    return searchResults.map((post) => {
      // check if user liked post
      const currentUserLiked = post.user_likes[user_id]

      return <PostPreview key={post.id} id={post.id} title={post.title} created_at={post.created_at} vote={post.vote} tags={post.tags} username={post.username} img_url={post.img} content={post.content} currentUserLiked={currentUserLiked} />
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

  // display pagination using bootstrap
  const pagination = () => {
    const paginationLength = Math.ceil(totalPosts / POST_OFFSET)
    const arr = Array.from({ length: paginationLength })
    return arr.map((_, index) => {
      const currentPage = index + 1
      const component = currentPage === page ? <li className="page-item active"><a className="page-link">{currentPage}</a></li> : <li onClick={() => { handlePaginationClick(currentPage) }} className="page-item"><a href="#" className="page-link">{currentPage}</a></li>
      return component
    })
  }

  // pagination functions
  const previousPage = () => {
    if (page > 1) {
      setPage((page) => page - 1)
      getPosts(page - 1)

    }
  }

  const nextPage = () => {
    if (page < Math.ceil(totalPosts / POST_OFFSET)) {
      setPage((page) => page + 1)
      getPosts(page + 1)
    }
  }

  const handlePaginationClick = (pageNumber) => {
    setPage(pageNumber)
    getPosts(pageNumber)
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

      {/* pagination */}
      <div>
        <nav aria-label="Page navigation" className="page-navigation">
          <ul className="pagination">
            <li onClick={previousPage} class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            {pagination()}
            <li onClick={nextPage} class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </>
  )
}

export default Home
