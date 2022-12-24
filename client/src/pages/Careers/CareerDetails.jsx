import { useLoaderData, useParams} from 'react-router-dom'
import Axios from 'axios';

export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()

    return (
        <div className="bg-[#00000033] p-5 rounded my-5 mx-0">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
            </div>
        </div>
    )
}

// data loader
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await Axios.get(`http://localhost:3000/careers/${id}`)
        .then((response) => {
            return response
        })

    // if (!res.statusText === 'OK') {
    //     throw Error('Could not find that career.')
    // }

    return res.data
}

