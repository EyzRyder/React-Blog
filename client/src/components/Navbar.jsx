export default function Navbar() {
    return (
        <nav className="flex max-w-[70%] p-[20px] items-center m-0 border-b-4" border-solid>
            <h1 className="text-red-500">Blog 3</h1>
            <div className="ml-auto">
                <a href="/" className="ml-[16px] p-[6px] hover:text-red-400">HOME</a>
                <a href="create" className="ml-[16px] p-[6px] bg-[#f1356d] rounded-md hover:text-white hover:bg-red-500">NEW BLOG</a>
            </div>
        </nav>
    );
} 
