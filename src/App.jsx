import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Layout from "./component/layout";
import AboutPage from "./pages/aboutPage";
import BlogPAge from "./pages/blogPAge";
import ContactPages from "./pages/contactPages";
import ContentDetails from "./pages/contentDetails";
import Regester from "./pages/regester";
import Login from "./pages/login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/blog", element: <BlogPAge /> },
        { path: "/contact", element: <ContactPages /> },
        { path: "/contentdetails/:id/:name", element: <ContentDetails /> },
        { path: "/regester", element: <Regester /> },
        { path: "/login", element: <Login /> },
        {
          path: "*",
          element: (
            <div className="  h-screen mt-10  text-center text-green-500   font-bold ">
              <div className="flex items-center justify-center ">
                <span className="text-3xl p-5"> Page not found </span>
                <br />
                <Link to="/">
                  <button className="cursor-pointer bg-amber-500 text-white px-5 py-2">
                    Go Home{" "}
                  </button>
                </Link>
              </div>
            </div>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
