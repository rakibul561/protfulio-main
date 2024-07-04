import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/project'>Project</Link>
                        <Link to='/skils'>Skils</Link>
                        <Link to='/contact'>Contact</Link>
                    </ul>
                </div>
                <a className="text-xl">Rakibul Hasan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-8">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/project'>Project</Link>
                    <Link to='/skils'>Skils</Link>
                    <Link to='/contact'>Contact</Link>


                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="btn btn-outline btn-success">Hire me</button>
            </div>
        </div>
    );
};

export default Navbar;