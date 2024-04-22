import React, { useState } from 'react';
import FixMan from "../../images/settings.png";
import '../../index.css';

const ReclamationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        department: '',
        labNumber: '',
        postNumber: '',
        natureOfPannee: [],
        description: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? (checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value)) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/reclamation-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log('Reclamation form submitted successfully!', responseData.message);
            // Optionally, display a success message to the user
          } else {
            console.error('Failed to submit reclamation form:', response.statusText);
            // Optionally, display an error message to the user
          }
        } catch (error) {
          console.error('An error occurred while submitting the reclamation form:', error);
          // Optionally, display an error message to the user
        }
        setFormData({
            fullName: '',
            department: '',
            labNumber: '',
            postNumber: '',
            natureOfPannee: [],
            description: ''
        }); 
      };

    return (
        <div className="reclamation-form-container">
            <form className="reclamation-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Reclamation Form</h2>
                <label className="form-label">
                    Full Name:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="form-input" required/>
                </label>
                <label className="form-label">
                    Department:
                    <select name="department" value={formData.department} onChange={handleChange} className="form-input" required>
                        <option value="">Select Department</option>
                        <option value="A">Department A</option>
                        <option value="B">Department B</option>
                        <option value="C">Department C</option>
                        <option value="D">Department D</option>
                    </select>
                </label>
                {/* Add input fields for other form fields */}
                <label className="form-label">
                    Lab Number:
                    <input type="text" name="labNumber" value={formData.labNumber} onChange={handleChange} className="form-input" required />
                </label>
                <label className="form-label">
                    Post Number:
                    <input type="text" name="postNumber" value={formData.postNumber} onChange={handleChange} className="form-input" required />
                </label>
                <label className="form-label">
                    Nature of Panne:
                    <label>
                        <input type="checkbox" name="natureOfPannee" value="Material" onChange={handleChange} />
                        Material
                    </label>
                    <label>
                        <input type="checkbox" name="natureOfPannee" value="Logiciel" onChange={handleChange} />
                        Logiciel
                    </label>
                    <label>
                        <input type="checkbox" name="natureOfPannee" value="Ather" onChange={handleChange} />
                        Ather
                    </label>
                </label>
                <label className="form-label">
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleChange} className="form-input" />
                </label>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {/* Image Section */}
            <div className="image-section">
                {/* Add your image here */}
                <img src={FixMan} alt="" className="img-fix" />
            </div>
        </div>
    );
};

export default ReclamationForm;
