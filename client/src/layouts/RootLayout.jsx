import { Link, NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (

        <div className="w-screen h-screen bg-white" >
            <nav className="flex p-5 items-center m-0 border-b-4 border-solid">
                <h1 className="text-primary-100 text-3xl font-bold">Blog 3</h1>
                <div className="ml-auto">
                    <NavLink to="/" className="NavLink">HOME</NavLink>
                    <NavLink to="about" className="NavLink">ABOUT</NavLink>
                    <NavLink to="create" className="NavLink">NEW BLOG</NavLink>
                </div>
            </nav>
            <div className="m-[40px] p-[20px]">
                <Outlet />
            </div>
        </div>

    );
} 
