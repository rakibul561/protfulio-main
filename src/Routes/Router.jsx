import {
    createBrowserRouter,
} from "react-router-dom";



import Main from "../component/Pagse/Laout/Main";
import About from "../component/Pagse/About";
import Project from "../component/Pagse/Project";
import Home from "../component/Pagse/Home/Home";
import Contact from "../component/Pagse/Contact";
import Skils from "../component/Pagse/Home/Skils";




export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/project',
                element: <Project></Project>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/skils',
                element:<Skils></Skils>
            }
        ]

    },
]);