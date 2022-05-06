import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='blog-title text-center mt-5'>Blogs</h1>
            <div className='blog-container'>
                
                <div className='blog-card'>
                    <h4>Difference between javascript and nodejs</h4>
                    <p>Ans:
                    </p>
                </div>
                <div className='blog-card'>
                    <h4>When should you use nodejs and when should you use mongodb?</h4>
                    <p>Ans: </p>
                </div>
                <div className='blog-card'>
                    <h4> Differences between sql and nosql databases.</h4>
                    <p>Ans: </p>
                </div>
                <div className='blog-card'>
                    <h4> What is the purpose of jwt and how does it work?</h4>
                    <p>Ans: </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;