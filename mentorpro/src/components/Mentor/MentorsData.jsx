
import './MentorsData.css';

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' }
];

const MentorData= () => {

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
   
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
         <p className="title">Sign up as a Mentor</p>
      <div className='form-group'>
        <label htmlFor="full_name">Full Name</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          
        />
      </div>

      <div className='form-group'> 
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
         
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
          name="phonenumber"
          placeholder='Phone Number'
        />
      </div>

      <div className='form-group'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          
          placeholder='email'
        />
      </div>

      <div className='form-group'>
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          name="bio"
         
          placeholder='LinknedIn profile'
        />
      </div>

      <div className='form-group'>
        <label htmlFor="techfield">Tech Field</label>
        <input
          type="text"
          id="tech_field"
          name="techfield"
        
        />
      </div>

      <button className='sign' type="submit"><span>Submit</span></button>
    </form>
  );
};

export default MentorData;
