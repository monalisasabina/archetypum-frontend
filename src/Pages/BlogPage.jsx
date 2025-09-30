import { useNavigate, useParams } from "react-router-dom"
import blogList from "../Components/blogList"

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
        const time = Math.ceil(wordCount / wordCount);

        return `${time} min read`
    };

    // useNavigate
    const navigate = useNavigate();

    return(
        <div className="blog-full">
            <h1>{blog.title}</h1>
            <h3>{blog.subtitle}</h3>
            <p>By {blog.author.name} | {blog.date} | {calculateReadTime(blog.blogText)}  </p>
            <img 
                 src={blog.image}
                 alt={blog.title}
            />
            
            {/* Display the BlogText in Paragraphs */}
            {blog.blogText.map((para,idx) =>(
                <p key={idx}>{para}</p>
            ))}

            {/* About Author */}
            <div className="blog-page-info">
                  <img src={blog.author.profilePicture} />
                  <p>{blog.author.bio}</p>
                  <p>Twitter {blog.author.socialLinks.twitter}</p>
                  <p>LinkedIn {blog.author.socialLinks.linkedin}</p>
            </div>
          

            <button
                  className="blog-button"
                  onClick={() => navigate("/blog")}
              > More Blogs
            </button>
            
        </div>
    )
};

export default BlogPage;