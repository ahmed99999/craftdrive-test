import React from 'react';

const Employee = ({ employee, handelEmployeeDetails }) => {
    return (
        <div>
            <a className="list-group-item list-group-item-action active"
                data-toggle="list" role="tab"
                onClick={() => handelEmployeeDetails(employee)}>
                {`${employee.first_name} ${employee.last_name}`}
            </a>
        </div>
    );
}

export default Employee;