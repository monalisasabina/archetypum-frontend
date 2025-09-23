import App from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import ContactUs from "./Pages/ContactUs";
import ErrorPage from "./Pages/ErrorPage";
import Blog from "./Pages/Blog";

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
            path: "/contact_us",
            element: <ContactUs />
        },
        {
            path: "/blog",
            element: <Blog />
        }
     
      ]
    },

];

export default routes;