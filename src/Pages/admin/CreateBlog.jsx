import { useState } from "react";
import BlogEditor from "../../Components/admin/BlogEditor";

const CreateBlog = (addBlog) => {

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [authorPic, setAuthorPic] = useState("");
    const [blogText, setBlogText] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    // Handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
       
        // Convert blogText into an array of paragraphs
        // const paragraphs = blogText.split("\n").filter(para => para.trim() !== "");

        // New Blog
        const newBlog = {
            id: Date.now(),
            title,
            subtitle,
            category, 
            image,
            date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
            author: {
                name: authorName,
                profilePicture: authorPic,
            },
            blogText,
            readTime: Math.ceil(blogText.replace(/<[^>]*>/g, "").split(" ").length / 200), // Assuming average reading speed of 200 words per minute
            link: `/blog/${title.replace(/\s+/g, '-').toLowerCase()}`,
        };

        addBlog(newBlog);

        // Reset form fields
        setTitle("");
        setSubtitle("");
        setAuthorName("");
        setAuthorPic("");
        setBlogText("");
        setImage("");
        setCategory("");
        
    };  

          return(
            <form onSubmit={handleSubmit} className="blog-form">

                {/* Title */}
                <input
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                />

                {/* Subtitle */}
                <input 
                    type="text"
                    placeholder="Subtitle"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    required
                />

                {/* Category */}
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />

                {/* Author Name */}
                <input
                    type="text"
                    placeholder="Author Name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    required
                />

                {/* Author Image */}
                <input
                    type="text"
                    placeholder="Author Image URL"  
                    value={authorPic}
                    onChange={(e) => setAuthorPic(e.target.value)}
                />

                {/* Blog Image */}
                <input
                    type="text"
                    placeholder="Blog Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />

                {/* Blog Text */}
                <BlogEditor value={blogText} onChange={setBlogText}/>

                {/* Submit Button */}
                <button type="submit">Submit Blog</button>

            </form>
          )
};

export default CreateBlog;