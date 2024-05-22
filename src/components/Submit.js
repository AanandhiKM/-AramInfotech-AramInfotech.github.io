import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../css/style.css';
import '../css/form-validation.css';
import '../css/bootstrap.css';


function Submit() {
    const [formData, setFormData] = useState({
        student_name: '',
        class: '',
        section: '',
        instrument: '',
        dob: '',
        blood_group: '',
        phone_number: '',
        father_name: '',
        house_number: '',
        street_name: '',
        landmark: '',
        city: '',
        pincode: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        console.log("Submit button clicked");
        event.preventDefault();
        console.log("Form Data: ", formData); // Check if formData is correct here
        try {
            const token = localStorage.getItem('token');
            console.log("Token: ", token);
            const response = await axios.post('http://localhost:8081/api/submit', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log("Response from server: ", response);
            if (response.status === 200) {
                console.log("Form submitted successfully!");
                navigate('/Thankyou');
            } else {
                console.error('Unexpected response status:', response.status);
                alert('Form submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response) {
                const errorMessage = error.response.data.error || 'An error occurred.';
                alert(`Error submitting form: ${errorMessage}`);
            } else {
                alert('Network error or server not responding. Please try again later.');
            }
        }
    };

    const handleClose = () => {
        navigate('/'); // Redirect to the home page
    };

    console.log("Rendering Submit component");

    return (

        <div className="bg-light">

            <div className="col-md-3">

                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/home">Student ID Card</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            <div class="container">

                <div class="py-5 text-center">

                    <img class="d-block mx-auto mb-4" src="/assets/images/mcc-logo.png" alt="" width="250" />
                    <h2> MCC CAMPUS MATRICULATION HR. SEC. SCHOOL </h2>
                </div>
                <div class="row g-5">
                    <div class="col-lg-8">
                        <h4 class="mb-3">ID CARD DETAILS - 2024-25</h4>
                        <form onSubmit={handleSubmit}>
                        <div class="row g-3"><div class="col-12">
                                    <label for="student_email" class="form-label">Email</label>

                                    <input type="text" class="form-control" id="email" name="student_email" value={formData.student_email} onChange={handleChange} required />									</div>

                                <div class="col-12">
                                    <label for="student_name" class="form-label">NAME OF THE STUDENT (IN CAPITAL LETTERS)</label>

                                    <input type="text" class="form-control" id="student_name" name="student_name" value={formData.student_name} onChange={handleChange} required />								</div>

                                <div class="col-12">
                                    <label for="class_id" class="form-label">CLASS</label>
                                    <div className="form-group">
                                
                                <select id="instrument" name="instrument">
                                    <option value="1 st dtandard">1 st dtandard</option>
                                   
                                </select>
                            </div></div>


                                <div class="col-12">
                                    <label for="section_id" class="form-label">SECTION</label>
                                    <input type="text" class="form-control"id="section" name="section" value={formData.section} onChange={handleChange} required />								</div>

                                <div class="col-12">
                                    <label for="dob" class="form-label">Date of Birth</label>

                                    <input type="date" class="form-control"id="dob" name="dob" value={formData.dob} onChange={handleChange} required />								</div>

                                <div class="col-12">
                                    <label for="blood_group" class="form-label">BLOOD GROUP</label>

                                    <input type="text" class="form-control"id="blood_group" name="blood_group" value={formData.blood_group} onChange={handleChange} required /> </div>
                                <div class="col-12">
                                    <label for="father_name" class="form-label">Father Name</label>

                                    <input type="text"class="form-control"id="father_name" name="father_name" value={formData.father_name} onChange={handleChange} required />								</div>
                                <div class="col-12">
                                    <label for="mobile_number1" class="form-label">Mobile Number 1</label>

                                    <input type="tel" class="form-control"id="phone_number" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
                                </div>


                                <div class="col-12">
                                    <label for="mobile_number2" class="form-label">Mobile Number 2</label>

                                    <input type="tel" class="form-control"id="phone_number" name="phone_number" value={formData.phone_number2} onChange={handleChange} required />								</div>

                                <div class="col-12">
                                    <label for="house_number" class="form-label">Address 1</label>

                                    <input type="text" class="form-control"id="house_number" name="house_number" value={formData.house_number} onChange={handleChange} />
                                    <label for="house_number" class="form-label">(Note: Maximum Allowed 25 character)</label>
                                </div>

                                <div class="col-12">
                                    <label for="street_name" class="form-label">Address 2</label>

                                    <input type="text" class="form-control"id="street_name" name="street_name" value={formData.street_name} onChange={handleChange} />								</div>

                                <div class="col-12">
                                    <label for="landmark" class="form-label">Address 3</label>

                                    <input type="text" class="form-control"id="landmark" name="landmark" value={formData.landmark} onChange={handleChange} required />						


                                </div>

                                <div class="col-12">
                                    <label for="city" class="form-label">Address 4</label>

                                    <input type="text" class="form-control"id="city" name="city" value={formData.city} onChange={handleChange} required />						</div>

                                <div class="col-12">
                                    <label for="pincode" class="form-label">Address 5</label>

                                    <input type="number" class="form-control"id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />

                                </div>

                                <div class="col-12">
                                    <label for="student_photo" class="form-label">Passport Size Photo</label>
                                    <label for="student_photo" class="form-label" >(Note:
                                        3.5 cm x 4.5 cm
                                        200 or 300 resolution
                                        (Latest studio taken photograph))</label></div>

                            </div>
                        </form>
                    </div>
                </div></div>
        </div>

    );
}

export default Submit;
