import { Link } from "react-router-dom";
import blogList from "../Components/blogList"
import "./Blog.css"
import { FcClock } from "react-icons/fc";

console.log(blogList)

const Blog = () =>{


    // __________________________________________________________
    // Calculating time to read
    const calculateReadTime = (blogTextArray) => {
       
        // join array into single string
        const fullText = blogTextArray.join("");

        // split by spaces
        const wordCount = fullText.split(/\s+/).length;

        // average reading time
        const wordsPerMinute = 200;

        // round up
        const time = Math.ceil(wordCount / wordsPerMinute);

        return `${time} min read`
    };
    // __________________________________________________________

    return(
        <div className="blog-cont">

            {/* Blog header */}
            <div className="blog-header">
                <h1>Blog</h1>
            </div>

            {/* Blog Content */}
            <div className="blog-grid">

                {blogList.map((blog) => (
                    
                    
                    <Link to={blog.link} key={blog.id} className="blog-card-link">

                        <div key={blog.id} className="blog-card">

                            {/* Blog Image */}
                            <img src={blog.image} alt={blog.title} />

                            <div className="blog-content">

                                {/* Blog Titles */}
                                <p className="blog-category">{blog.category}</p>
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
                                <div className="blog-meta">

                                    {/* <p className="blog-date">{blog.date}</p> */}
                                    
                                    <span className="read-time"> <FcClock /> {calculateReadTime(blog.blogText)}</span>
                                </div>

                            </div>
                        </div>

                    </Link>
                ))}

            </div>

        </div>
    )

}
export default Blog