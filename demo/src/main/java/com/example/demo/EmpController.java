 package com.example.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin("http://localhost:3000/")
public class EmpController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("employees") 
    public List<Employee> getAllEmployees()
      {
        return employeeService.readEmployees();
    }
    

    @GetMapping("/employees/{id}")
public Employee getEmployeeById(@PathVariable Long id) {
    return employeeService.readEmployee(id);
}

    @PostMapping("/employees")
    public String createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable Long id) {

        if (employeeService.deleteEmployee(id)) {
            return "Deleted Successfully";
        }

        return "Employee Not Found";
    }

    @PutMapping("employees/{id}")
    public String putMethodName(@PathVariable Long id, @RequestBody Employee employee) {
        //TODO: process PUT request
        
        return employeeService.updateEmployee(id,employee);
    }
}