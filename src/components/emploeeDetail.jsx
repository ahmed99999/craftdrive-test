import React from 'react';

const EmployeeDetails = ({ employee }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{employee.last_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{employee.first_name}</h6>
                <p className="card-text">{employee.email}</p>
                <a href="#" className="card-link">{employee.gender}</a>
                <a href="#" className="card-link">{employee.phone}</a>
            </div>
        </div >
    );
};

export default EmployeeDetails;