import './Contact.css'
// import { useState } from 'react';
import {  useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import Axios from 'axios'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const Schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phonenumber: yup
      .string()
      .matches(
        /^\+(?:[0-9] ?){6,14}[0-9]$/,
        "Phone number must be a valid international phone number"
      )
      .required("Phone number is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });
  


  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phonenumber: '',
  //   subject: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const sendDataToServer = async(data) => {
    const response = await fetch("http://localhost:8081/message", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (response.status === 201) {
      toast.success("Message sent successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000)
    }
  // await  Axios.post("http://localhost:8081/message" , data)
  //   .then((response) => { 
  //     response.data.message && toast.message(response.data.message);
     
  //   })
  //   .catch(({response}) => { 
  //     const error = response.data.message;
  //     toast.error(error);
     
  //   });
  };
    return (
      <>
        <div className="contact-section">
          <h2 className="title-1">Quick Contact</h2>
          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit(sendDataToServer)}>
              
              <input
                type="text"
                id='name'
                name="name"
                placeholder="Your Name"
                // value={formData.name}
                // onChange={handleChange}
                {...register("name")}
              />
              {
                errors.name && toast.error(errors.name?.message)
              }
              <input
                type="email"
                id='email'
                name="email"
                placeholder="Your Email"
                // value={formData.email}
                // onChange={handleChange}
                {...register("email")}
              />
              {
                errors.email && toast.error(errors.email?.message)
              }
              <input
                type="tel"
                id='phone'
                name="phonenumber"
                placeholder="Your Phone"
                // value={formData.phone}
                // onChange={handleChange}
                {...register("phonenumber")}
              />
              {
                errors.phonenumber && toast.error(errors.phonenumber?.message)
              }
              <input
                type="text"
                id='subject'
                name="subject"
                placeholder="Subject"
                // value={formData.subject}
                // onChange={handleChange}
                {...register("subject")}
              />
              {
                errors.subject && toast.error(errors.subject?.message)
              }
              <textarea
                name="message"
                id='message'
                placeholder="Message"
                // value={formData.message}
                // onChange={handleChange}
                {...register("message")}
              ></textarea>
              {
                errors.message && toast.error(errors.message?.message)
              }
              <button className='sign' >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }


export default Contact
