import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


export default function CreateBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Bessi');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true)

        Axios.post('http://localhost:3000/blogs', { title: title, body: body, author: author })
            .then((response) => {
                setIsPending(false);
                navigate("/");
            }).catch((err) => {
                console.log(err);
                setIsPending(false)
            });
    };

    return (
        <div className="max-w-md m-0 text-center items-center justify-center">
            <h2 className="text-xl text-[#f1356d] mb-8">Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label className="text-left block">Blog Title:</label>
                <input
                    className="w-full py-2 px-3 my-3 mx-0 border border-solid border-[#ddd] box-border block"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label className="text-left block">Blog Body:</label>
                <textarea
                    className="w-full py-2 px-3 my-3 mx-0 border border-solid border-[#ddd] box-border block"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <label className="text-left block">Blog Author:</label>
                <select
                    className="w-full py-2 px-3 my-3 mx-0 border border-solid border-[#ddd] box-border block"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Bessi">Bessi</option>
                    <option value="Professor">Professor</option>
                    <option value="Aluno">Aluno</option>

                </select>

                {!isPending && <button className="bg-[#f1356d] text-[#fff] border-none border-0 p-2 rounded-lg cursor-pointer">Add Blog</button>}
                {isPending && <button disabled className="bg-[#f1356d] text-[#fff] border-none border-0 p-2 rounded-lg cursor-pointer">Adding Blog</button>}

            </form>
        </div>
    );
}
