import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
    const [user, setUser] = useState("bessi")
    
    if (!user) {
        return <Navigate to='/' replace={true}/>
    }
    return (
        <div>
            <h2 className="text-3xl text-primary-100 mb-8">Sobre</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quasi illum dignissimos nostrum voluptatum optio commodi vel odit ipsa necessitatibus. Deleniti amet ea minima eum repellendus sint rem quos esse.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quasi illum dignissimos nostrum voluptatum optio commodi vel odit ipsa necessitatibus. Deleniti amet ea minima eum repellendus sint rem quos esse.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quasi illum dignissimos nostrum voluptatum optio commodi vel odit ipsa necessitatibus. </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quasi illum dignissimos nostrum voluptatum optio commodi vel odit ipsa necessitatibus. Deleniti amet ea minima eum repellendus sint rem quos esse.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quasi illum dignissimos nostrum voluptatum optio commodi vel odit ipsa necessitatibus. Deleniti amet ea minima eum repellendus sint rem quos esse.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quasi illum dignissimos nostrum voluptatum optio commodi vel odit ipsa necessitatibus. </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quasi illum dignissimos nostrum voluptatum optio commodi vel odit ipsa necessitatibus. Deleniti amet ea minima eum repellendus sint rem quos esse.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quasi illum dignissimos nostrum voluptatum optio commodi vel odit ipsa necessitatibus. Deleniti amet ea minima eum repellendus sint rem quos esse.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quasi illum dignissimos nostrum voluptatum optio commodi vel odit ipsa necessitatibus. </p>

            <button onClick={() => setUser(null)}>Logout</button>

        </div>
    );
}

export default About;