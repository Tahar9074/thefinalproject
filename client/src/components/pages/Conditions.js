import React, { useState } from 'react';
import './Conditions.css'; 

const Conditions = () => {
  const [formData, setFormData] = useState({
    age: '',
    license: '',
    creditCard: '',
    reservation: '',
    insurance: '',
    securityDeposit: '',
    additionalDrivers: '',
    fuelPolicy: '',
    mileageLimit: '',
    lateReturnFees: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission/validation here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <h1>Rental Car Conditions</h1>
      <form onSubmit={handleSubmit} className="rental-form">
        <div className="form-section">
          <h2>1. Age Requirement:</h2>
          <p>
            Most rental companies require renters to be at least 21 years old, and some may impose higher age limits or additional fees for drivers under 25.
          </p>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="21"
            max="65"
            required
          />
          years old
        </div>

        <div className="form-section">
          <h2>2. Driver's License:</h2>
          <p>
            A valid driver's license is typically required. International renters may need an International Driving Permit (IDP) in addition to their home country's license.
          </p>
          <label htmlFor="license">Effective date</label>
          <input
            type="date"
            id="license"
            name="license"
            value={formData.license}
            onChange={handleChange}
            required
          />
        </div>

        {/* ... other form sections ... */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Conditions;
