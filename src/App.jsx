import { useState } from 'react'
import Detailpage from './Detailpage'
import BlogPost from './BlogPost'
import Hotellist from './Hotellist'
import Homepage from './Homepage'
import About from './About'
import { Routes,Route } from 'react-router-dom'

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
        <Route path="/blog" element={<BlogPost />}/>
        <Route path="/detail" element={< Detailpage/>}/>
         <Route path="/about" element={< About/>}/>
      </Routes>
    
    
    
  )
}

export default App
