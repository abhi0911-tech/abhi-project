import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import BlogPostPage from './BlogPostPage'

const Homepage = () => {
  return (
    <div>
        <Header/>
        <Banner/>
         <div className="max-w-6xl mx-auto px-1 py-0 mt-2 mb-2">
        <BlogPostPage />
      </div>

        <Footer/>
      
    </div>
  )
}

export default Homepage
