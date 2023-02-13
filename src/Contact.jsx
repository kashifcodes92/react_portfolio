import React, { useState } from 'react';


const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        });
    }

    const form_Submit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname} my contact number is ${data.phone} my email address is ${data.email} my message is "${data.msg}"`);
    }
    return (<>
        <div className="my-5">
            <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={form_Submit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input type="text" required class="form-control" id="exampleFormControlInput1"
                                name="fullname" value={data.fullname} onChange={InputEvent}
                                placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1"
                                name="phone" value={data.phone} onChange={InputEvent}
                                placeholder="Mobile number" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                name="email" value={data.email} onChange={InputEvent}
                                placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                name="msg" value={data.msg} onChange={InputEvent}></textarea>
                        </div>
                        <div class="col-10">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>);
};
export default Contact;
