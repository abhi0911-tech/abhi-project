import { useState } from 'react'
import Detailpage from './Detailpage'
import BlogPost from './BlogPost'
import Hotellist from './Hotellist'
import Homepage from './Homepage'
import About from './About'
import BlogPostPage from './BlogPostPage'
import { Routes,Route } from 'react-router-dom'
import Wishlist from './Wishlist'

import './App.css'


function App() {

  return (
        // <Header/> 
        // <Hotellist/>
    //<Detailpage/>
    //  <BlogPost/>
  //  <Homepage/>

    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hotel" element={< Hotellist/>} />
        <Route path="/blogpost" element={<BlogPost />}/>
        <Route path="/blog" element={<BlogPostPage />}/>
        <Route path="/detail" element={< Detailpage/>}/>
         <Route path="/about" element={< About/>}/>
         <Route path="/wishlist" element={< Wishlist/>}/>
      </Routes>
    
    
    
  )
}

export default App
