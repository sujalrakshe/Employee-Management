 import axios from "axios";

const EMPLOYEE_S_API_BASE_URL = "http://localhost:8081/employees";

class EmployeeService {

    saveEmployee(employee) {
        return axios.post(EMPLOYEE_S_API_BASE_URL, employee);
    }

    getEmployees() {
        return axios.get(EMPLOYEE_S_API_BASE_URL);
    }

    // Changed only this method name
    getEmployeeById(id) {
        return axios.get(EMPLOYEE_S_API_BASE_URL + "/" + id);
    }

    deleteEmployeesById(id) {
        return axios.delete(EMPLOYEE_S_API_BASE_URL + "/" + id);
    }

    updateEmployee(id, employee) {
        return axios.put(EMPLOYEE_S_API_BASE_URL + "/" + id, employee);
    }
}

export default new EmployeeService();