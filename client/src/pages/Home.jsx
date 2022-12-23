import BlogList from "../components/BlogList";
import useGet from "../hooks/useGet";


export default function Home() {

    const { data: blogs, isPending, error } = useGet('http://localhost:3000/blogs')

    return (
        <div className="flex flex-col">
            <h2 className="text-3xl text-primary-100 mb-8">Homepage</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList
                blogs={blogs}
                title="All Blogs!"
            />}
        </div>
    );
} 