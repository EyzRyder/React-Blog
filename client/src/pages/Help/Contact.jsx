import { Form, redirect, useActionData } from "react-router-dom"

export default function Contact() {
    const data = useActionData() 

    return ( 
        <div className="flex flex-col justify-center items-center">
            <h3>Contact Us</h3>
            <Form method="post" action="/help/contact" className="mt-8 w-96">
                <label>
                    <span className="block mb-3">Your email:</span>
                    <input className="block mb-8 p-2 rounded border border-solid border-[#ddd] box-border w-full" type="email" name="email" required />
                </label>
                <label>
                    <span className="block mb-3">Your message:</span>
                    <textarea className="block mb-8 p-2 rounded  border border-solid border-[#ddd] box-border w-full" name="message" required></textarea>
                </label>
                <button className="bg-primary-100 text-white NavLink">Submit</button>

                {/* {data && data.error && <p>{data.error}</p>} */}
            </Form>
        </div>
    );
}
