import BlogList from "../components/BlogList";
import Axios from 'axios';
import { useLoaderData } from "react-router-dom";

export default function Home() {
    const blogs = useLoaderData()

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-primary-100 mb-8">Salve Galeira</h2>
            {/* {error && <div>{error}</div>} */}
            {/* {isPending && <div>Loading ...</div>} */}
            {blogs && <BlogList
                blogs={blogs}
                title="Todos os blogs"
            />}
        </div>
    );
} 

export const blogLoader = async () => {

    const res = await Axios.get(`http://localhost:3000/blogs`)
        .then((response) => {
            return response
        })

    if (!res.statusText === 'OK') {
        throw Error('Could not find that career.')
    }

    return res.data
}
