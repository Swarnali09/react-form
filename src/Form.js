import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phone: '',
    country: '',
    city: '',
    pan: '',
    aadhar: '',
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phone) newErrors.phone = 'Phone Number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.pan) newErrors.pan = 'PAN Number is required';
    if (!formData.aadhar) newErrors.aadhar = 'Aadhar Number is required';

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    validate();
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      navigate('/success', { state: { ...formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>

      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type={formData.showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => setFormData({ ...formData, showPassword: !formData.showPassword })}
        >
          {formData.showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && <span>{errors.password}</span>}
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>

      <div>
        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>

      <div>
        <label>City</label>
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          {formData.country === 'India' && (
            <>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
            </>
          )}
          {formData.country === 'USA' && (
            <>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
            </>
          )}
        </select>
        {errors.city && <span>{errors.city}</span>}
      </div>

      <div>
        <label>PAN Number</label>
        <input
          type="text"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
        />
        {errors.pan && <span>{errors.pan}</span>}
      </div>

      <div>
        <label>Aadhar Number</label>
        <input
          type="text"
          name="aadhar"
          value={formData.aadhar}
          onChange={handleChange}
        />
        {errors.aadhar && <span>{errors.aadhar}</span>}
      </div>

      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
  );
};

export default Form;
