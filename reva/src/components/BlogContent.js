import React from 'react'
import './BlogContent.css'
import Blog1 from './Images/blog1.jpg'

function BlogContent() {
    return (
        <div className="blog-content">
            <div className="blog-posts">
                
                <div className="blog-item">
                    <div className="img-wrapper">
                        <img src={Blog1} alt=""/>
                        <h1 className="blog-title">Web devlopment masterclass</h1>
                    </div>
                    <div className="blog-info">
                        <h2>Welcome to this masterclass</h2>
                        <div className="blog-timestamp">
                            <i class="fas fa-clock"></i><span>Posted 2 minutes ago</span>
                        </div>
                        <p>lorem this is the adroid masterckass hainasgas dssdjksdj seiieieiei eieieiei eieieie  asadahauhda dadoaaojaojaoijdjadhthis is t the manin cause f ee
                        this asiasasjjjjjsjsj lorem1 hthhhasas hhhhththis is my firts ecer google inteasas
                        </p>
                    </div>
                </div>       


                <div className="blog-item">
                    <div className="img-wrapper">
                        <img src={Blog1} alt=""/>
                        <h1 className="blog-title">Android devlopment masterclass</h1>
                    </div>
                    <div className="blog-info">
                        <h2>How to get started with android?</h2>
                        <div className="blog-timestamp">
                            <i class="fas fa-clock"></i><span>Posted 5 minutes ago</span>
                        </div>
                        <p>lorem this is the adroid masterckass hainasgas dssdjksdj seiieieiei eieieiei eieieie  asadahauhda dadoaaojaojaoijdjadhthis is t the manin cause f ee
                        this asiasasjjjjjsjsj lorem1 hthhhasas hhhhththis is my firts ecer google inteasas
                        </p>
                    </div>
                </div>   

             </div>    
             <div className="blog-sidebar">
                <h3>Categories</h3>
                <span>Android Development</span>
                <span>Web Development</span>
                <span>Data Annotation</span>
                <span>Machine Learning</span>
                <span>Artificial Intelligence</span>
                
             </div>
            
                
            
        </div>
    )
}

export default BlogContent
