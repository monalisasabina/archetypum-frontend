import App from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import ContactUs from "./Pages/ContactUs";
import ErrorPage from "./Pages/ErrorPage";
import Blog from "./Pages/Blog";
import BlogPage from "./Pages/BlogPage";
import BlogForm from "./AdminPages/BlogForm";
import ProjectsPage from "./Pages/ProjectsPage";

const routes = [
    {
      path: "/",
      element:<App />,
      errorElement:<ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/projects",
            element: <Projects />
        },
        {
            path: "/projects/:projectId",
            element: <ProjectsPage />
        },
        {
            path: "/contact_us",
            element: <ContactUs />
        },
        {
            path: "/blog",
            element: <Blog />
        },
        {
            path: "/blog/:blogId",
            element: <BlogPage />
        },
        {
            path: "/blog-form",
            element: <BlogForm />

        }
     
      ]
    },

];

export default routes;