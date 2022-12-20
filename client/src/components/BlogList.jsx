export default function BlogList({ blogs, title, handleDelete }) {
    return (
        <>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="py-3 px-4 my-5 mx-0 border border-solid border-[#fafafa] hover:shadow-md" key={blog.id}>
                    <h2 className="text-xl text-[#f1356d] mb-2">{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p className="float-right">Written by {blog.author}</p>
                    <button className="" onClick={() => handleDelete(blog.id)}>Delete Blogs</button>
                </div>
            ))}
        </>
    );
}
