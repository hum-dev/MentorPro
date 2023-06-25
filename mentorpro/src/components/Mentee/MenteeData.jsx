
import './MenteeData.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {  useNavigate } from 'react-router-dom';
// import Axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' }
];

function Mentee () {
  const navigate = useNavigate();
  const Schema = yup.object().shape({
    full_name: yup.string().required("name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone_number: yup
      .string()
      .matches(
        /^\+(?:[0-9] ?){6,14}[0-9]$/,
        "Phone number must be a valid international phone number"
      )
      .required("Phone number is required"),
      
    bio: yup.string().required("Bio is required"),
    tech_field: yup.string().required("Tech field is required"),
    expectation: yup.string().required("Expectation is required"),

      
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  
  const sendDataToServer = async (data) => {
    
    const response = await fetch("http://localhost:8081/mentee/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    })
    console.log(response.status)
    if(response.status === 200) {
      toast.success("registerd  successfully");
      navigate('/Home')
    } else {
      toast.error("Something went wrong");
    }
    
   
  };

  return (
    <form onSubmit={handleSubmit (sendDataToServer)} className='form-container'>
         <p className="title">Signup to be a Mentee</p>
      <div className='form-group'>
        <label htmlFor="full_name">Full Name</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          {...register('full_name')}
        />
        {errors.full_name && <p>{errors.full_name.message}</p>}
      </div>

      <div className='form-group'> 
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
         {...register("gender")}
        >
          <option value="">Select</option>
          {genderOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          placeholder='Phone Number'
          {...register('phone_number')}
        />
        {errors.phone_number && <p>{errors.phone_number.message}</p>}
      </div>

      <div className='form-group'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='email'
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className='form-group'>
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          name="bio"
          placeholder='LinknedIn profile'
          {...register('bio')}
        />
        {errors.bio && <p>{errors.bio.message}</p>}
      </div>

      <div className='form-group'>
        <label htmlFor="field">Tech Field</label>
        <input
          type="text"
          id="techfield"
          name="tech_field"
          placeholder='field of interest'
          {...register('tech_field')}
        
        />
        {errors.tech_field && <p>{errors.tech_field.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="expectation">expectation</label>
        <textarea
          id="exp"
          name="expectation"
            placeholder="expectation"
          {...register('expectation')}
        ></textarea>
        {errors.expectation && <p>{errors.expectation.message}</p>}
      </div>

      <button className='sign' type="submit"><span>Submit</span></button>
    </form>
  );
}

export default Mentee;
