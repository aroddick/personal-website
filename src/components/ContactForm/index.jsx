import { h } from 'preact';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Styles from './styles.module.scss';

function ContactForm() {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast('Form sent! I will get back to you as soon as I can.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      };
      await emailjs.send(
        "service_5w8nrq5",
        "template_h40qogm",
        templateParams,
        "user_AlbAxO4SdI9y7DPgDoNOp"
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id='contact' className={'section ' + Styles.container}>
      <h1>Contact</h1>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Row 1 of form */}
        <div className={Styles.row}>
          <div className={Styles.col6}>
            <input
              type='text'
              {...register('name', {
                required: { value: true, message: 'Please enter a name' },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less'
                }
              })}
              placeholder='Name'
            />
            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
          </div>
          <div className={Styles.col6}>
            <input
              type='email'
              {...register('email', {
                required: { value: true, message: 'Please enter an email' },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
              placeholder='Email address'
            ></input>
            {errors.email && (
              <span className='errorMessage'>{errors.email.message}</span>
            )}
          </div>
        </div>
        {/* Row 2 of form */}
        <div className={Styles.row}>
          <div>
            <input
              type='text'
              {...register('subject', {
                required: { value: true, message: 'Please enter a subject' },
                maxLength: {
                  value: 75,
                  message: 'Subject cannot exceed 75 characters'
                }
              })}
              placeholder='Subject'
            ></input>
            {errors.subject && (
              <span className='errorMessage'>{errors.subject.message}</span>
            )}
          </div>
        </div>
        {/* Row 3 of form */}
        <div className={Styles.row}>
          <div>
            <textarea
              rows={3}
              name='message'
              {...register('message', {
                required: { value: true, message: 'Please enter a message' }
              })}
              placeholder='Message'
            ></textarea>
            {errors.message && <span className='errorMessage'>Please enter a message</span>}
          </div>
        </div>
        <button className='submit-btn' type='submit'>
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
