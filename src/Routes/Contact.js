import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";


const Contact = () => {
  const form = useRef();

  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mp3jfbs",
        "template_w9ake1v",
        form.current,
        "9yH5ti0SvYgNcyqtX"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSuccess(true);

          /// Reset the form and clear success message after 2 seconds
          setTimeout(() => {
            setIsSuccess(false);
            // form.current.reset();
          }, 2000);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
   
    <StyledContactForm>
         <h4>Contact us today for a free estimate!
           
       </h4>

        {isSuccess ? (
            <SuccessMessage>Message sent successfully!</SuccessMessage>
        ) : (
           
       
 <form ref={form} onSubmit={sendEmail}>
   <label>Name</label>
   <input type="text" name="user_name" />
   <label>Email</label>
   <input type="email" name="user_email" />
   <label>Message</label>
   <textarea name="message" />
   <input type="submit" value="Send" />
 </form> 
        )}
         
     
    </StyledContactForm>
  );
};

export default Contact;






// Rest of your styling






// Styles

const SuccessMessage = styled.div `
color: green;
font-weight: bold;
`
const StyledContactForm = styled.div`
  width: 350px;
//  border: 2px solid rgb(220, 220, 220);
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 padding: 2px;
 margin: 0 auto;
 flex-direction: column;


h4 {
    padding: 6px;
    height: 50px;
    // width: 350px;
    // margin-left: 20px;
    margin-top: 10px;
    font-size: 1.2rem;
    color: white;
    background: purple;
    
}
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 1.5rem;
    // background: rgba(28, 97, 209, 0.413);
    background: rgb(82, 15, 82);
    color: white;
    border: 2px solid black;
    marging-top: 30px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
    //   background: whitesmoke;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100%;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 2px solid rgb(220, 220, 220);
      font-size: 1rem;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
      font-size: 1rem;
    }
  }
`;





/// Styles

// const StyledContactForm = styled.div`
// widhth: 400px;
// form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;

//     input {
//         width: 100%;
//         height: 34px;
//         padding: 7px;
//         outline: none;
//         border-radius: 5px;
//         border: 1px solid rgb(220, 220, 220);

//         &:focus {
//             border: 2px solid rgba(0, 206, 158, 1);
//         }
//     }

//     textarea {
//         max-width: 100%;
//         min-width: 100%;
//         width: 100%;
//         max-height: 100px
//     }
// }
// `





// import React from "react";
// import '../cssComponents/Contact.css'

// function Contact(){
//     return (
//  <section id="contact">
  
//     <h1>Contact</h1>
//     <p>If you have any questions or inquiries, please feel free to contact us.</p>
//     <h3 className="email-class">windows9to5@gmail.com</h3>
//     <h3>(510) 957-3496</h3>

//     <form className="form-class">
//        <label for="fullName">fullName:</label>
//        <input type="text" id="fullName" name="fullName" required/>
//         <br/><br/>
//         <label for="businessName">Business Name</label>
//         <input type="text" id="businessName" name="businessName"/>
//         <br/><br/>
//         <label for="address">Address:</label>
//         <input type="text" id="address" name="address" required/> 
//         <br/> <br/>

//         <label for="city">City:</label>
//         <input type="text" id="city" name="city" required/>
//         <br/> <br/>
        
//         <label for="state">State:</label>
//         <input type="text" id="state" name="state" required/>
//         <br/> <br/>

//         <label for="zipCode">Zip Code:</label>
//         <input type="text" id="zipCode" name="zipeCode" required/>
//         <br/> <br/>

//         <label for="email">Email:</label>
//         <input type="email" id="email" name="email" required />
//         <br/> <br/>

//         <label for="requestType">Request Type:</label>
//         <select id="requestType" name="requestType">
//             <option value="Residential">Residential</option>
//             <option value="Business">Business</option>
//         </select> <br/> <br/>

//         <label for="mayText">May We Text You:</label>
//         <input type="radio" id="mayTextYes" name="mayText" value="Yes"/>Yes
//         <input type="radio" id="mayTextNo" name="mayText" value="No"/>No 
//         <br/> <br/>
//         <label for="text area">Message:</label>
//         <input type="textarea" />

//         <input type="submit" value="Submit Form"/>
//     </form>  
// </section> 

//  )
// }
// export default Contact;