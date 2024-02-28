import React from 'react';
import myResume from '../assets/myresume.pdf'

export default function Resume() {
    return (
        <>
        <h2>Proficiencies</h2>
            <h3>HTML, CSS, Javascript, JQuery, Web API’s, Third Party API’s, Server-side API’s, Node.js, Object
Oriented Programming (OOP), Express.js, SQL, Object Oriented Mapping (ORM), Model-View-
Controller (MVC), Bootstrap/Bulma/Tailwind, REACT, State, MERN and some basic c++ 
            </h3>
            <div>
                <a href={myResume} download>Download PDF</a>
            </div>
        </>
    )
}