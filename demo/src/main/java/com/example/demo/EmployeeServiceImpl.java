package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
   private  EmployeeRepository employeeRepository;
    
   // List<Employee> employees = new ArrayList<>();

    @Override
    public String createEmployee(Employee employee) {
        EmployeeEntity employeeEntity =new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
       // employees.add(employee);
       employeeRepository.save(employeeEntity);
        return "Saved Successfully";
    }

    
    @Override
    public Employee readEmployee(Long id) {
      EmployeeEntity emp = employeeRepository.findById(id).get();
               Employee  employee = new Employee();
 
     BeanUtils.copyProperties(emp , employee);
     return employee;
    }

    @Override
    public List<Employee> readEmployees() {
        List<EmployeeEntity> employeesList = employeeRepository.findAll();
         List<Employee> employees = new ArrayList<>();
        for(EmployeeEntity  employeesEntity : employeesList) {
            Employee emp = new Employee();
                 emp.setId(employeesEntity.getId());
            emp.setName(employeesEntity.getName());
            emp.setEmail(employeesEntity.getEmail());
            emp.setPhone(employeesEntity.getPhone());
        

        employees.add(emp);
        }
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
EmployeeEntity emp = employeeRepository.findById(id).get();
       // return employees.removeIf(emp -> emp.getId().equals(id));
       employeeRepository.delete(emp);
       return true;

    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
    EmployeeEntity exestingEmployee = employeeRepository.findById(id).get();
     exestingEmployee.setEmail(employee.getEmail());
          exestingEmployee.setName(employee.getName());
               exestingEmployee.setPhone(employee.getPhone());
     employeeRepository.save(exestingEmployee);
        return "UPdate Succesfully";

         
    }
 

}