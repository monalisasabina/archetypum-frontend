import { Link, useNavigate } from "react-router-dom";
import blogList from "../Components/blogList"
import { useState } from "react";
import "./Blog.css"

console.log(blogList)

const Blog = () =>{

    // // State to manage blogs
    // const [blogs, setBlogs] = useState([]);

    // // __________________________________________________________
    // // Function to add a new blog
    // const addBlog = (newBlog) => {
    //     setBlogs([newBlog, ...blogs]);
    // };


    // __________________________________________________________
    // Calculating time to read
    const calculateReadTime = (blogTextArray) => {

        const fullText = blogTextArray.join("");

        // split by spaces
        const wordCount = fullText.split(/\s+/).length;

        // average reading time
        const wordsPerMinute = 200;

        // round up
        const time = Math.ceil(wordCount / wordsPerMinute);

        return `${time} min read`
    };

    // Navigate to BlogForm
    // const navigate = useNavigate()

    // __________________________________________

    return(
        <div className="blog-cont">

            {/* Blog header */}
            <div className="blog-header">
                <h1>Blog</h1>
            </div>

           

            {/* Blog Content */}
            <div className="blog-grid">

                {blogList.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <img src={blog.image} alt={blog.title} />

                        <div className="blog-content">

                            {/* Blog Titles */}
                            <h2>{blog.title}</h2>
                            <p className="blog-subtitle">{blog.subtitle}</p>

                            {/* Author Details */}
                            <div className="blog-info">
                                <img
                                    src={blog.author.profilePicture}
                                    alt={blog.author.name}
                                    className="author-pic"
                                />
                                <span>{blog.author.name}</span>
                            </div>

                            {/* Other Blog Content */}
                            <p className="blog-date">{blog.date}</p>
                            <p className="read-time">{calculateReadTime(blog.blogText)}</p>

                            {/* Read More */}
                            <Link to={blog.link} className="read-more"> Read More</Link>

                        </div>
                        
                    </div>
                ))}

            </div>

            {/* Blog Form
            <button onClick={() => navigate('/blog-form')}>Blog Form</button> */}

        </div>
    )



}
export default Blog