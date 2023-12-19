import { useEffect, useState } from 'react'
import './App.css'

// router components
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Create from './pages/Create'
import GetBookInfo from './pages/GetBookInfo'
import Post from './pages/Post'
import Edit from './pages/Edit'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import UserPosts from './pages/UserPosts'
import UserPost from './pages/UserPost'



// components
import Navbar from './components/Navbar'
import Protected from './components/Protected'

// supabase
import { createClient } from "@supabase/supabase-js"
const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseURL, supabaseKey)

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])


  return (
    <>
      <Navbar supabase={supabase} session={session} />

      <Routes>
        <Route path="/Book-Chronicles/" element={<Home supabase={supabase} session={session} />} />

        {/* The create route is protected to only users! */}
        <Route path="/Book-Chronicles/create" element={
          <Protected session={session}>
            <Create supabase={supabase} session={session} />
          </Protected>
        } />

        {/* The edit of a post is protected */}
        <Route path="/Book-Chronicles/post/:id" element={<Post supabase={supabase} session={session} />} />
        <Route path="/Book-Chronicles/post/:id/edit" element={
          <Protected session={session}>
            <Edit supabase={supabase} session={session} />
          </Protected>} />

        {/* User posts path */}
        <Route path="/Book-Chronicles/users/:id" element={<UserPost supabase={supabase} session={session} />} />

        <Route path="/Book-Chronicles/getBookInfo" element={<GetBookInfo />} />
        <Route path="Book-Chronicles/userposts" element={<UserPosts supabase={supabase} />} />
        <Route path="Book-Chronicles/signup" element={<Signup supabase={supabase} />} />
        <Route path="Book-Chronicles/signin" element={<Signin supabase={supabase} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
