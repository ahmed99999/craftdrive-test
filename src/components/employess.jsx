import React, { Component } from 'react';
import { getEmployess } from '../servieces/employeesService';
import Employee from './employee';
import Loading from './common/loading';

class Employees extends Component {
    state = {
        employees: [],
        isLoaded: false
    };

    async componentDidMount() {
        const employees = await getEmployess();
        this.setState({ employees, isLoaded: true });
    }

    render() {
        const { employees, isLoaded } = this.state;
        return (
            <React.Fragment >
                {!isLoaded && <Loading />}
                {isLoaded &&
                    <div className="row" >
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            {employees.map(employee => (
                                <Employee key={employee.id} employee={employee} />
                            ))}
                        </div>
                        <div className="col-md-1"></div>
                    </div>}
            </React.Fragment>
        );
    }
}

export default Employees;