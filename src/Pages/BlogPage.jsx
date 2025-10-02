import { useNavigate, useParams } from "react-router-dom"
import blogList from "../Components/blogList"
import "./BlogPage.css"
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const BlogPage = () => {
    
    // BlogId comes from the URL
    const {blogId} = useParams();

    // Finds the Blog
    const blog = blogList.find(b => b.link.endsWith(blogId));
    if (!blog) return <p>Blog not found</p>;

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

    // useNavigate
    const navigate = useNavigate();

    return(
        <div className="blog-full">
            <h1>{blog.title}</h1>
            <h3>{blog.subtitle}</h3>

            {/* Blog Meta */}
            <p className="blog-page-meta">
                <span className="blog-author">By {blog.author.name} </span>
                <span className="separator"> • </span>
                <span className="blog-date">{blog.date}</span>
                <span className="separator"> • </span>
                <span className="blog-read">{calculateReadTime(blog.blogText)}</span>
            </p>
            
            {/* Main Blog Image */}
            <img 
                 src={blog.image}
                 alt={blog.title}
                 className="blog-page-img"
            />
            
            {/* Display the BlogText in Paragraphs */}
            {blog.blogText.map((para,idx) =>(
                <p key={idx}>{para}</p>
            ))}

            {/* About Author */}
            <div className="blog-page-info">
                  <img src={blog.author.profilePicture}  alt={blog.author.name}/>
                  <div className="blog-page-info-content">
                    <p>{blog.author.bio}</p>
                    <div className="blog-page-info-socials">
                        <a href={blog.author.socialLinks.facebook}>  <FaFacebook /> </a>  
                        <a href={blog.author.socialLinks.instagram}>  <FaInstagramSquare /> </a>
                        <a href={blog.author.socialLinks.twitter}> <FaSquareXTwitter /> </a> 
                        <a href={blog.author.socialLinks.linkedin}> <FaLinkedin /> </a>
                    </div>
                  </div>   
            </div>

            
           {/* More Blogs Button */}
            <button
                  className="blog-button"
                  onClick={() => navigate("/blog")}
              > More Blogs
            </button>
            
        </div>
    )
};

export default BlogPage;