import { Link } from "react-router-dom";
import blogList from "../Components/blogList";
import "./Blog.css";
import { FcClock } from "react-icons/fc";
import NewsletterSignup from "../Components/newsletter";
import { useState } from "react";

const Blog = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categorySearch, setCategorySearch] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // ________________________________________
    // CALCULATE READ TIME
    const calculateReadTime = (blogTextArray) => {
        const fullText = blogTextArray.join(" ");
        const wordCount = fullText.split(/\s+/).length;
        const wordsPerMinute = 200;
        const time = Math.ceil(wordCount / wordsPerMinute);
        return `${time} min read`;
    };

    // ________________________________________
    // UNIQUE CATEGORIES
    const categories = [...new Set(blogList.map(blog => blog.category))];

    // ________________________________________
    // FILTER BLOGS
    const filteredBlogs = blogList.filter((blog) => {

        const matchesSearch =
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.author.name.toLowerCase().includes(searchTerm.toLowerCase());

        // const matchesCategory =
        //     selectedCategories.length === 0 ||
        //     selectedCategories.includes(blog.category);

        return matchesSearch;
    });

    // ________________________________________
    // CAPITALIZE CATEGORY
    const capitalizeCategory = (category) => category?.toUpperCase();

    // ________________________________________
    // SELECT CATEGORY
    const selectCategory = (cat) => {
        if (!selectedCategories.includes(cat)) {
            setSelectedCategories([...selectedCategories, cat]);
        }
    };

    // REMOVE CATEGORY
    const removeCategory = (cat) => {
        setSelectedCategories(selectedCategories.filter(c => c !== cat));
    };

    return (
        <div className="blog-cont">

            {/* HEADER */}
            <div className="blog-header">
                <h1>Blog</h1>
            </div>

            {/* FILTERS */}
            <div className="blog-filters">

                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* CATEGORY FILTER */}
                <div className="category-filter">

                    {/* SELECTED TAGS */}
                    {selectedCategories.map((category) => (
                        <span className="blog-tag" key={category}>
                            {capitalizeCategory(category)}
                            <button onClick={() => removeCategory(category)}>×</button>
                        </span>
                    ))}

                    {/* INPUT */}
                    <input
                        placeholder="Search category..."
                        value={categorySearch}
                        onChange={(e) => setCategorySearch(e.target.value)}
                        onFocus={() => setDropdownOpen(true)}
                    />

                    {/* DROPDOWN */}
                    {dropdownOpen && (
                        <div className="category-dropdown">
                            {categories
                                .filter((category) =>
                                    category.toLowerCase().includes(categorySearch.toLowerCase()) &&
                                    !selectedCategories.includes(category)
                                )
                                .map((category) => (
                                    <div
                                        key={category}
                                        className="category-option"
                                        onClick={() => {
                                            selectCategory(category);
                                            setCategorySearch("");
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        {capitalizeCategory(category)}
                                    </div>
                                ))}
                        </div>
                    )}
                </div>

            </div>

            {/* BLOG GRID */}
            <div className="blog-grid">

                {/* NEWSLETTER */}
                <div className="blog-card newsletter-card">
                    <NewsletterSignup />
                </div>

                {/* BLOG CARDS */}
                {filteredBlogs.map((blog) => (

                    <Link to={blog.link} key={blog.id} className="blog-card-link">

                        <div className="blog-card">

                            <img src={blog.image} alt={blog.title} />

                            <div className="blog-content">

                                <p className="blog-category">
                                    {capitalizeCategory(blog.category)}
                                </p>

                                <h2>{blog.title}</h2>
                                <p className="blog-subtitle">{blog.subtitle}</p>

                                {/* AUTHOR */}
                                <div className="blog-info">
                                    <img
                                        src={blog.author.profilePicture}
                                        alt={blog.author.name}
                                        className="author-pic"
                                    />
                                    <span className="author-name">{blog.author.name}</span>
                                    <span className="dot-separator">•</span>
                                    <span className="read-time">
                                        <FcClock /> {calculateReadTime(blog.blogText)}
                                    </span>
                                </div>

                            </div>
                        </div>

                    </Link>
                ))}

            </div>

        </div>
    );
};

export default Blog;
