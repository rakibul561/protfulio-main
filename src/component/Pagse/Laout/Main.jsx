import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footter from "../Home/Footter";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footter></Footter>
        </div>
    );
};

export default Main;