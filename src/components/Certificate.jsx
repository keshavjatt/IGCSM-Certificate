import React, { useState, useEffect } from 'react';
import './certificate.css';
import { useParams, useLocation } from 'react-router-dom';

function Certificate() {
    const { id } = useParams();
    const location = useLocation();
    const formData = location.state?.formD || {};
    const [qdata, setQdata] = useState("");

    // Get current date in DD-MM-YYYY format
    const getCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = today.getFullYear();
        return `${day}-${month}-${year}`;
    };

    useEffect(() => {
    }, [formData]);

    return (
        <div className="certificate-container">
            <div className="certificate">
                <div className="certificate-body">
                    
                    {/* <h2 style={{ textDecoration: 'underline' }}>CERTIFICATE</h2> */}
                        
                    <div className='profile-img'>
                        <img src={formData.image} alt="Logo" className="logo-right" />
                    </div>

                    <div className="content">
                        <p>Certify that Mr. / Ms. <b>{formData.stu_name}</b>, S/O <b>{formData.fathers_name}</b>,</p>
                        <p>has undertaken a competency test in the course of <b>{formData.course}</b>,</p>
                        <p>under the duration of <b>{formData.periods}</b> and is hereby awarded the Certificate of Competency.</p>
                        <p>Student has secured the competency level associated with Enrollment No. <b>{formData.enroll_no}</b>. This certificate is issued based on the IGCSM.</p>
                        <p>Enrollment No.: <b>{formData.enroll_no}</b></p>
                        <p>Date Of Birth: <b>{formData.dob}</b></p>
                        <p>ASC Name: <b>{formData.asc_name}</b></p>
                    </div>
                    
                </div>
                
                <div className="right">
                    <p>Date of Issue: <b>{getCurrentDate()}</b></p>
                </div>
            </div>
        </div>
    );
}

export default Certificate;