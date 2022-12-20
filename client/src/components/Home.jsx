import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Axios from 'axios';


export default function Home() {
    const [blogs, setBlogs] = useState([]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        Axios.get('http://localhost:3000/blogs').then((response) => {
            setBlogs(response.data);
        })
    }, [blogs])



    return (
        <div className="flex flex-col">
            <h2>Homepage</h2>
            <BlogList
                blogs={blogs}
                title="All Blogs!"
                handleDelete={handleDelete}
            />

            <BlogList
                blogs={blogs.filter((blog) => blog.author === "Bessi")}
                title="All my Blogs!"
                handleDelete={handleDelete}
            />
        </div>
    );
} 