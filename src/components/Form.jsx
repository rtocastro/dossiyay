import { useState } from 'react';
// import './style.css';

function Form() {
    // Here we set two state variables for name and email using `useState`
    const [name, setname] = useState('');
    const [email, setemail] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // Ternary statement that will call either setname or setemail based on what field the user is typing in
        return name === 'name' ? setname(value) : setemail(value);
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert the user their first and last name, clear the inputs
        alert(`Hello ${name}, thank you for submitting.`);
        setname('');
        setemail('');
    };



    return (
        <div className="container text-center">
            <h4>
                Hello {name}, you'll be hearing from me soon!
            </h4>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    required
                />
                <br></br>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="e-mail"
                    required
                />
                <br></br>
                <textarea
                    rows="10"
                    cols="40"
                    name="comment"
                    form="usrform">
                    "Your message goes here"
                </textarea>
                <br></br>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );

}


export default Form; 