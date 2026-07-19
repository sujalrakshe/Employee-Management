import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {

  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log("Saved Successfully", response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-slate-800 my-20 rounded shadow py-4 px-8">

      <div className="text-4xl tracking-wider font-bold text-center py-4">
        <p>Add 🧑‍💻 New Employee</p>
      </div>

      <div className="mx-10 my-2">

        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          className="w-full py-2 my-4 px-2 text-slate-800"
          placeholder="Name"
        />

        <input
          type="text"
          name="phone"
          value={employee.phone}
          onChange={handleChange}
          className="w-full py-2 my-4 px-2 text-slate-800"
          placeholder="Phone"
        />

        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          className="w-full py-2 my-4 px-2 text-slate-800"
          placeholder="Email"
        />

      </div>

      <div className="flex my-4 space-x-4 px-20">

        <button
          onClick={saveEmployee}
          className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
        >
          Save
        </button>

        <button
          onClick={reset}
          className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded"
        >
          Clear
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
        >
          Cancel
        </button>

      </div>

    </div>
  );
};

export default AddEmployee;