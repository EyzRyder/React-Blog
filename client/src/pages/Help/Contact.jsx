import { Form, redirect, useActionData } from "react-router-dom"

export default function Contact() {
    const data = useActionData() 

    return ( 
        <div className="flex flex-col justify-center items-center">
            <h3>Contate-me</h3>
            <Form method="post" action="/help/contact" className="mt-8 w-96">
                <label>
                    <span className="block mb-3">Seu email:</span>
                    <input className="block mb-8 p-2 rounded border border-solid border-[#ddd] box-border w-full" type="email" name="email" required />
                </label>
                <label>
                    <span className="block mb-3">Sua Mensagem:</span>
                    <textarea className="block mb-8 p-2 rounded  border border-solid border-[#ddd] box-border w-full" name="message" required></textarea>
                </label>
                <button className="bg-primary-100 text-white NavLink">Enviar</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    );
}

export const contactAction = async ({ request }) => {
    
    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message:data.get('message')
    }

    console.log(submission);
    if (submission.message.length < 10) {
        return {error: 'Mensagem esta pequeno, tem que ser pelo menos 10 caracteres'}
    }

    return redirect('/') 
}