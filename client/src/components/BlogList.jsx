import { Link } from "react-router-dom";

export default function BlogList({ blogs, title }) {
    return (
        <>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="py-3 px-4 my-5 mx-0 border rounded-md border-solid border-primary-100 hover:shadow-md hover:bg-[#00000033]" key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>
                        <h2 className="text-xl text-primary-100 mb-2">{blog.title}</h2>
                        <p>{blog.body}</p>
                        <p className="float-right">Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </>
    );
}
