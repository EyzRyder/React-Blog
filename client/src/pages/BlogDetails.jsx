import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import Axios from 'axios';

export default function BlogDetails () {
    const blog = useLoaderData()
    const navigate = useNavigate();

    const handleClickDelete = () => {
        Axios.delete(`http://localhost:3000/blogs/${blog._id}`)
            .then((response) => {
                navigate("/");
        });
    }

    return (
        <div>
            {blog && (
                <article>
                    <h2 className="text-xl text-primary-100 mb-2">{blog.title}</h2>
                    <p className="float-right">Escrito por {blog.author}</p>
                    <div>{blog.body}</div>
                    <button className="bg-primary-100 text-[#fff] border-none border-0 p-2 rounded-lg cursor-pointer" onClick={handleClickDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export const blogDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await Axios.get(`http://localhost:3000/blogs/${id}`)
        .then((response) => {
            return response
        }).catch((err) => {
            console.log(err);
            throw Error('Could not find that career.')
        })

    return res.data
}

