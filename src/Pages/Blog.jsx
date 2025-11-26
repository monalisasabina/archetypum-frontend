import { Link } from "react-router-dom";
import blogList from "../Components/blogList"
import "./Blog.css"
import { FcClock } from "react-icons/fc";
import NewsletterSignup from "../Components/newsletter";
import { useState } from "react";

console.log(blogList)

const Blog = () =>{

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");


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
    // Filtering Blogs by Category
    const categories = ["all", ...new Set(blogList.map((blog) => blog.category))];


    // __________________________________________________________
    //Filter Blogs
    const filteredBlogs = blogList.filter((blog) => {
         
        //Search Title and Author name
        const matchesSearch = 
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.author.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Check if the blog matches the search term
        if (!matchesSearch) {
            return false;
        }  

        // Match Category
        const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;

        // Check if the search term is included in the text
        return matchesCategory && matchesSearch;
    });

    // __________________________________________________________

    // Capitalize all category names
    const capitalizeCategory = (category) => {
        return category ? category.toUpperCase() : "";
    };

    return(
        <div className="blog-cont">

            {/* Blog header */}
            <div className="blog-header">
                <h1>Blog</h1>
            </div>

            {/* Blog Filters*/}
            <div className="blog-filters">
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                     {categories.map((category, index) =>(
                        <option key={index} value={category}>
                            {category === "all" ? "All Categories" : capitalizeCategory(category)}
                        </option>
                     ))}

                </select>

            </div>
          


            {/* Blog Content */}
            <div className="blog-grid">

                {/* Newsletter Signup */}
                <div className="blog-card newsletter-card">
                    <NewsletterSignup />
                </div>
 
                {/* Blog Cards */}
                {filteredBlogs.map((blog) => (
                    
                    <Link to={blog.link} key={blog.id} className="blog-card-link">

                        <div key={blog.id} className="blog-card">

                            {/* Blog Image */}
                            <img src={blog.image} alt={blog.title} />

                            <div className="blog-content">

                                {/* Blog Titles */}
                                <p className="blog-category">{capitalizeCategory(blog.category)}</p>
                                <h2>{blog.title}</h2>
                                <p className="blog-subtitle">{blog.subtitle}</p>
                           
                               
                                {/* Author Details */}
                                    <div className="blog-info">
                                       <img
                                           src={blog.author.profilePicture}
                                           alt={blog.author.name}
                                           className="author-pic"
                                       />
                                       <span className="author-name">{blog.author.name}</span>

                                       <span className="dot-separator">•</span>

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