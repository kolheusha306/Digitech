import React, { useState } from 'react';
 import "./App.css"
function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        company: '',
        jobTitle: '',
        message: ''
      });
   
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
 
      const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (
          !formData.firstName ||
          !formData.lastName ||
          !formData.email ||
          !formData.contactNumber
        ) {
          alert('Please fill in all required fields.');
          return;
        }
     
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
          alert('Please enter a valid email address.');
          return;
        }
     
        // Contact number validation (simple validation for demonstration)
        const contactNumberPattern = /^\d{10}$/;
        if (!contactNumberPattern.test(formData.contactNumber)) {
          alert('Please enter a valid contact number (10 digits).');
          return;
        }
     
        // If all validations pass, submit the form
        console.log('Form submitted:', formData);
        // Reset form data
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          contactNumber: '',
          company: '',
          jobTitle: '',
          message: ''
        });
      };
 
      return(
        <div className='mainformdiv'>
        <div className='mainformsection'>
<div className='formleftcontent'>
   <h1 className='leftformtitle'>Request for services</h1>
   <p className='leftformtext'>Find out more about how we can help your organization navigate its next. Let us know your areas of interest so that we can serve you better. </p>
</div>
 
 <div className="formcontainer">
      <h2 className='form-content'>Contact Form</h2>
      <form onSubmit={handleSubmit} className='formfeild'>
        <div className="form-group">
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name *" required className='inputfeild'/>
 
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name *" required  className='inputfeild'/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className='inputfeild'/>
          <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number *" required  className='inputfeild'/>
       
          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company *" className='inputfeild'/>
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title *" className='inputfeild'/>
       
 
         
        </div>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message *" className='inputfeild'></textarea>
        <div className='buttondiv'><button type="submit" className='form-button'>Submit</button></div>
      </form>
    </div>
    </div>
    </div>
      );
 
 
}
export default Form;