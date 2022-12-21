import BlogList from "./BlogList";
import useGet from "../hooks/useGet";


export default function Home() {

    const { data: blogs, isPending, error } = useGet('http://localhost:3000/blogs')

    return (
        <div className="flex flex-col">
            <h2>Homepage</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList
                blogs={blogs}
                title="All Blogs!"
            />}
        </div>
    );
} 