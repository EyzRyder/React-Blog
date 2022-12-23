import { useParams, useNavigate } from "react-router-dom";
import useGet from "../hooks/useGet";
import Axios from 'axios';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useGet(`http://localhost:3000/blogs/${id}`)

    const navigate = useNavigate();


    const handleClickDelete = () => {
        Axios.delete(`http://localhost:3000/blogs/${blog._id}`)
            .then((response) => {
                navigate("/");
        });
    }

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blog && (
                <article>
                    <h2 className="text-xl text-primary-100 mb-2">{blog.title}</h2>
                    <p className="float-right">Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button className="bg-primary-100 text-[#fff] border-none border-0 p-2 rounded-lg cursor-pointer" onClick={handleClickDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;