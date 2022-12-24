import { Link, useLoaderData } from "react-router-dom"
import Axios from 'axios';

export default function Careers() {
    const careers = useLoaderData()

    return (
        <div className="careers">
            {careers.map(career => (
                <Link className="block bg-[#00000033] p-5 rounded my-5 mx-0" to={career._id} key={career._id}>
                    <p className="m-0 hover:text-primary-100">{career.title}</p>
                    <p className="m-0 last:text-[0.8em] last:text-gray-500">Based in {career.location}</p>
                </Link>
            ))}
        </div>
    )
}


// data loader
export const careersLoader = async () => {
    const res = await Axios.get('http://localhost:3000/careers/')
        .then((response) => {
            return response
        })

    if (!res.statusText === 'OK') {
        throw Error('Could not fetch the list of careers')
    }

    return res.data
}