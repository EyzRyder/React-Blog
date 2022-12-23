import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (

        <div className="" >
            <h2 className="text-primary-100 text-3xl">Ajuda</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <nav className="flex justify-center gap-8 my-8 mx-0">
                <NavLink className="NavLink" to="faq">Vejas as perguntas frequentes</NavLink>
                <NavLink className="NavLink" to="contact">Entre em contato comigo</NavLink>
            </nav>
            <Outlet/>
        </div>

    );
} 
