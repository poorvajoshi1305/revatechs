import React from 'react'
import BlogBg from './Images/blogBg.jfif'
import './BlogHeader.css'
function BlogHeader() {
    return (
        <div className="blog-header">
                <h1>Welcome to Reva Tech</h1>
                <h2>Web Development | Data Annotation | AI and much more</h2>
                
           <img className="blog-bg-image" width="100%" height="300px" src={BlogBg} alt="blog"/> 
        </div>
    )
}

export default BlogHeader
