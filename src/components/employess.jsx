import React, { Component } from 'react';
import { getEmployess } from '../servieces/employeesService';
import Employee from './employee';
import Loading from './common/loading';
import EmployeeDetails from './emploeeDetail';

class Employees extends Component {
    state = {
        employees: [],
        isLoaded: false,
        currentEmployee: null
    };

    async componentDidMount() {
        const employees = await getEmployess();
        this.setState({ employees, isLoaded: true });
    }

    handelEmployeeDetails = employee => {
        console.log(employee);
        this.setState({ currentEmployee: employee });
    };

    render() {
        const { employees, isLoaded, currentEmployee } = this.state;
        console.log(currentEmployee);
        return (
            <React.Fragment >
                {!isLoaded && <Loading />}
                {isLoaded &&
                    <div className="row" >
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <div className="list-group" >
                                {employees.map(employee => (
                                    <Employee
                                        key={employee.id}
                                        employee={employee}
                                        handelEmployeeDetails={(employee) => this.handelEmployeeDetails(employee)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-5">
                            {currentEmployee && <EmployeeDetails employee={currentEmployee} />}
                        </div>
                    </div>}
            </React.Fragment>
        );
    }
}

export default Employees;