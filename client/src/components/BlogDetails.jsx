import { useParams } from "react-router-dom";
import useGet from "../hooks/useGet";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useGet(`http://localhost:3000/blogs/${id}`)

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blog && (
                <article>
                    <h2 className="text-xl text-[#f1356d] mb-2">{blog.title}</h2>
                    <p className="float-right">Written by {blog.author}</p>
                    <div>{blog.body}</div>

                </article>
            )}
        </div>
    );
}

export default BlogDetails;