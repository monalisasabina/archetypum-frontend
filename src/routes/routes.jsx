import App from "../layouts/App";
import Home from "../Pages/public/Home";
import About from "../Pages/public/About";
import Projects from "../Pages/public/Projects";
import ContactUs from "../Pages/public/ContactUs";
import ErrorPage from "../Pages/public/ErrorPage";
import Blog from "../Pages/public/Blog";
import BlogPage from "../Pages/public/BlogPage";
import BlogForm from "../Pages/admin/CreateBlog";
import ProjectsPage from "../Pages/public/ProjectsPage";
import CreateBlog from "../Pages/admin/CreateBlog";
import AdminLayout from "../layouts/adminLayout";
import Dashboard from "../Pages/admin/ Dashboard";
import Login from "../auth/Login";
import ProtectedRoutes from "./protectedRoutes";

const routes = [
    // Public Routing
    {
      path: "/",
      element:<App />,
      errorElement:<ErrorPage/>,
      children: [
        { path: "/", element: <Home/> },
        { path: "/about", element: <About/> },
        { path: "/projects", element: <Projects />},
        { path: "/projects/:projectId", element: <ProjectsPage />},
        { path: "/contact_us", element: <ContactUs />},
        { path: "/blog", element: <Blog />},
        { path: "/blog/:blogId", element: <BlogPage />},
        { path: "/blog-form", element: <BlogForm />},
        
      ] 
    },
    
    // Admin loggin
    {
      path: "/login", element: <Login/>
    },
    
    // Admin Routing
    {
        path: "/admin",
        element: <ProtectedRoutes/>,
        errorElement: <ErrorPage/>,
        children: [
            { element: <AdminLayout/>,
              children: [
                  { index: true, element: <Dashboard />},
                  { path: "dashboard", element: <Dashboard />},
                  { path:"create-blog", element: <CreateBlog/>}
                
              ]
            },    
        ]
    }

];

export default routes;