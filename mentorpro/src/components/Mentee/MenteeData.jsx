
import './MenteeData.css';

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' }
];

const Mentee= () => {

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
   
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
         <p className="title">Signup to be a Mentee</p>
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
        <label htmlFor="field">Tech Field</label>
        <input
          type="text"
          id="techfield"
          name="techfield"
          placeholder='field of interest'
        
        />
      </div>

      <div className="form-group">
        <label htmlFor="expectation">expectation</label>
        <textarea
          id="exp"
          name="expectation"
            placeholder="expectation"
          
        ></textarea>
      </div>

      <button className='sign' type="submit"><span>Submit</span></button>
    </form>
  );
};

export default Mentee;
