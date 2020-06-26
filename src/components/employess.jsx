import React, { Component } from 'react';
import { getEmployess } from '../servieces/employeesService';
import Employee from './employee';
import Loading from './common/loading';
import EmployeeDetails from './emploeeDetail';
import Pagination from './common/pagination';
import { paginate } from '../utils/pagination';

class Employees extends Component {
    state = {
        employees: [],
        isLoaded: false,
        currentEmployee: null,
        currentPage: 1,
        NumberOfPages: 10,
        totalPages: 0,
    };

    async componentDidMount() {
        const employees = await getEmployess();
        this.setState({ employees, isLoaded: true, totalPages: employees.length });
    }

    handelEmployeeDetails = currentEmployee => {
        this.setState({ currentEmployee });
    };

    getPaginatedEmployees = employees => {
        const { currentPage, NumberOfPages } = this.state;
        return paginate(employees, currentPage, NumberOfPages);
    };

    handlePage = currentPage => {
        this.setState({ currentPage });
    };

    render() {
        const { employees, isLoaded, currentEmployee, currentPage, totalPages } = this.state;
        const paginatedEmployees = this.getPaginatedEmployees(employees);
        return (
            <React.Fragment >
                {!isLoaded && <Loading />}
                {isLoaded &&
                    <div className="row" style={{ marginTop: "50px" }} >
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <div className="list-group" >
                                {paginatedEmployees.map(employee => (
                                    <Employee
                                        key={employee.id}
                                        employee={employee}
                                        handelEmployeeDetails={(employee) => this.handelEmployeeDetails(employee)}
                                    />
                                ))}
                            </div>
                            <div style={{ marginTop: "25px" }} >
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    handlePage={this.handlePage}
                                />
                            </div>
                        </div>
                        <div className="col-md-5">
                            {currentEmployee && <EmployeeDetails currentEmployee={currentEmployee} />}
                        </div>
                    </div>}
            </React.Fragment>
        );
    }
}

export default Employees;