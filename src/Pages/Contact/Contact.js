import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      }; 
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      {...register('name', {
                        required: { value: true, message: 'Please enter a name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    />
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      {...register('email', {
                        required: { value: true, message: 'Please enter an email' },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid email address"
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>{errors.email.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: { value: true, message: 'Please enter a message' }
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

// import React, { useState } from "react";
// import classes from './Contact.module.css';

// const Contact = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//   };
//   return (
//     <div id='contact' className={'section ' + classes.container}>
//       <h1>Contact</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" required />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" required />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea id={classes.message} required />
//         </div>
//         <button type="submit">{status}</button>
//       </form>
//     </div>

//   );
// };

// export default Contact;

// import React from 'react';
// import classes from './Contact.module.css';

// const Contact = () => {
//   return (
//     <div id='contact' className={'section ' + classes.container}>
//       <h1>Contact</h1>
//       <form>
//         <input type='text' name='name' placeholder='Name'></input>
//         <input type='text' name='email' placeholder='E-mail address'></input>
//         <textarea type='text' name='message' id={classes.message} placeholder='Message...' rows='4'></textarea>
//       </form>
//     </div>
//   )
// }

// export default Contact;