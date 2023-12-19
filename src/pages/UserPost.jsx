import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostPreview from '../components/PostPreview';

function UserPost({ supabase, session }) {
  const [posts, setPosts] = useState([]);

  const user = session ? session.user : { user_metadata: {} }
  const user_id = user.id

  // get url param
  const { id } = useParams();

  const getPosts = async () => {
    const { data, error } = await supabase.from("posts").select().order("created_at", { ascending: false }).eq('user_id', id)
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  // display post previews
  const displayPostPreviews = () => {
    if (posts.length === 0) {
      return <h2>This user has not posted anything yet!</h2>
    } else {
      return posts.map((post) => {
        // check if user liked post
        const currentUserLiked = post.user_likes[user_id]
        return <PostPreview key={post.id} id={post.id} title={post.title} created_at={post.created_at} vote={post.vote} category={post.category} username={post.username} img_url={post.img} content={post.content} currentUserLiked={currentUserLiked} />
      })
    }
  }


  return (
    <div>{displayPostPreviews()}</div>
  )
}

export default UserPost
