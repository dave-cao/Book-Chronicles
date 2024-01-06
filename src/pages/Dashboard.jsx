import React, { useEffect, useState } from 'react'
import BookPostScatterChart from '../components/BookPostScatterChart'
import { Link } from 'react-router-dom'
import "../styles/dashboard.css"


function Dashboard({ supabase, session }) {
  const [posts, setPosts] = useState([])
  const user = session.user

  const displayChart = () => {

    const currentPosts = posts.map((post) => {
      return {
        ...post,
        date: new Date(post.created_at),
        hour: new Date(post.created_at).getHours(),
        content_length: post.content.length,
        word_count: post.content ? post.content.split(" ").length : 0,
        formatted_date: new Date(post.created_at).toLocaleString('en-US', {
          month: 'long', // 'short' or 'long' for abbreviated or full month name
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          hour12: true, // Set to false for 24-hour format
        }),
        formatted_date_day_only: new Date(post.created_at).toLocaleString('en-US', {
          month: 'long', // 'short' or 'long' for abbreviated or full month name
          day: 'numeric',
        }),

      }
    }).sort((a, b) => {
      if (a.date < b.date) {
        return -1
      } else if (a.date > b.date) {
        return 1
      }
      return 0
    })

    return (
      <BookPostScatterChart bookPosts={currentPosts} />
    );


  }
  /*
   * Gets the posts of a user 
   * */
  const getPosts = async (user) => {
    const { data, error } = await supabase.from("posts").select().eq("user_id", user.id)
    setPosts(data)
  }

  // on enter of page, get posts of logged in user
  useEffect(() => {
    getPosts(user)
  }, [])

  return (
    <div>
      {displayChart()}
      <Link className='all-posts-button' to={`/Book-Chronicles/users/${user.user_metadata.name}`}><button className='btn orange-button'>See all your posts. </button></Link>
    </div>
  )
}

export default Dashboard
