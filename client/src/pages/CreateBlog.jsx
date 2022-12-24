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
        <div className="m-0 text-center items-center justify-center">
            <h2 className="text-xl text-primary-100 mb-8 font-semibold">Adicionar novo blog</h2>
            <form onSubmit={handleSubmit}>
                <label className="text-left block">Titulo do Blog:</label>
                <input
                    className="w-full py-2 px-3 my-3 mx-0 border border-solid border-[#ddd] box-border block"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label className="text-left block">Corpo do Blog:</label>
                <textarea
                    className="w-full py-2 px-3 my-3 mx-0 border border-solid border-[#ddd] box-border block"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                <label className="text-left block">Author do Blog:</label>
                <select
                    className="w-full py-2 px-3 my-3 mx-0 border border-solid border-[#ddd] box-border block"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Bessi">Bessi</option>
                    <option value="Professor(a)">Professor(a)</option>
                    <option value="Aluno(a)">Aluno(a)</option>

                </select>

                {!isPending && <button className="bg-primary-100 text-white border-none border-0 p-2 rounded-lg cursor-pointer hover:text-white hover:bg-primary-200">Add Blog</button>}
                {isPending && <button disabled className="bg-primary-100 text-white border-none border-0 p-2 rounded-lg cursor-pointer">Adicionando Blog</button>}

            </form>
        </div>
    );
}
