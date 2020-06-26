import React from 'react';

const EmployeeDetails = ({ currentEmployee }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{currentEmployee.last_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{currentEmployee.first_name}</h6>
                <p className="card-text">{currentEmployee.email}</p>
                <a className="card-link">{currentEmployee.gender}</a>
                <a className="card-link">{currentEmployee.phone}</a>
            </div>
        </div >
    );
};

export default EmployeeDetails;