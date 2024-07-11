import React, { useState } from 'react';

function Contectus() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sameuser(event) {
        event.preventDefault(); 
        console.log(name, email, message);
        let data = { name, email, message };
        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            console.log("Result", result);

        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-10">
                        <h2 className="text-center mb-4">Get In Touch</h2>
                        <form onSubmit={sameuser}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value); }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); }}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="3"
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value); }}
                                />
                            </div>
                            <button type="submit" className=" btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contectus;
