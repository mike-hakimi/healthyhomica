import React from "react";
import '../cssComponents/Contact.css'

function Contact(){
    return (
        <section id="contact">
  
    <h1>Contact</h1>
    <p>If you have any questions or inquiries, please feel free to contact us.</p>
    <h3 className="email-class">windows9to5@gmail.com</h3>
    <h3>(510) 957-3496</h3>
       <form className="form-class">
        {/* Your contact form fields */}
        <input className="inputs" type="text" placeholder="Full Name"/>
        <input className="inputs" type="email" placeholder="Email"/>
        <input className="inputs" type="phone" placeholder="phone"/>
        <textarea placeholder="Message"></textarea>
        <button className="button" type="submit">Send</button>
    
        </form> 
        </section>
    )
}
export default Contact;