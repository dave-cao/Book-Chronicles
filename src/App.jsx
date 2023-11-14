import { useState } from 'react'
import './App.css'

// router components
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Create from './pages/Create'
import GetBookInfo from './pages/GetBookInfo'
import Post from './pages/Post'
import Edit from './pages/Edit'


// components
import Navbar from './components/Navbar'

// supabase
import { createClient } from "@supabase/supabase-js"
const supabaseURL = "https://wfmzmjdkdoryaeunljkv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmbXptamRrZG9yeWFldW5samt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0MDc2NTcsImV4cCI6MjAxNDk4MzY1N30.zRjzq2AcsGmIx0GBvfPoDyj5BBWlAwHsjc3yEV8vXcQ"
const supabase = createClient(supabaseURL, supabaseKey)

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home supabase={supabase} />} />
        <Route path="/create" element={<Create supabase={supabase} />} />
        <Route path="/post/:id" element={<Post supabase={supabase} />} />
        <Route path="/post/:id/edit" element={<Edit supabase={supabase} />} />
        <Route path="/getBookInfo" element={<GetBookInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
