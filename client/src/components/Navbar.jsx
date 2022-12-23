import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex p-5 items-center m-0 border-b-4 border-solid">
            <h1 className="text-primary-100 text-3xl font-bold">Blog 3</h1>
            <div className="ml-auto">
                <NavLink to="/" className="NavLink">HOME</NavLink>
                <NavLink to="about" className="NavLink">ABOUT</NavLink>
                <NavLink to="create" className="NavLink">NEW BLOG</NavLink>
            </div>
        </nav>
    );
} 
