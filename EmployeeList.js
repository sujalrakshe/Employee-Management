import React from 'react'
import{useNavigate} from 'react-router-dom'

const EmployeeList = () => {
  const navigate = useNavigate();
  return (
     <div className="container mx-auto my-8"> 

    <div>
      <button
      onClick={()=> navigate("/addEmployee")} className="bg-slate-600 hover:big-blue-700  my-12 font-semibold px-20 py-2 rounded">Add Employee 🧑‍💻</button>
    </div>
    <div>
      <table className="shadow">
        <thead className="bg-slate-600">
          <th className="px-6 py-3 uppercase tracking-wide">Name</th>
          <th classNmae="px-6 py-3 uppercase tracking-wide">Phone</th>
          <th classNmae="px-6 py-3 uppercase tracking-wide">Email</th>
          <th classNmae="px-6 py-3 uppercase tracking-wide">Action</th>
        </thead>

        <tbody>
          <tr className="hover:bg-white text-black">  
       <td classNmae="text-left px-6 py-4 whitespace-nowrap">Sujal Rakshe</td>
       <td className="text-left px-6 py-4 whitespace-nowrap">9545893258</td>
       <td className="text-left px-6 py-4 whitespace-nowrap">sujalrakshe05@gmail.com</td>
       <td className="text-left px-6 py-4 whitespace-nowrap"> 
        <a> Edit 📝</a>
        <a> Delete 🗑️ </a>
       </td>
          </tr>

         <tr className="hover:bg-white text-black">
        <td classNmae="text-left px-6 py-4 whitespace-nowrap">Sujal Rakshe</td>
       <td className="text-left px-6 py-4 whitespace-nowrap">9545893258</td>
       <td className="text-left px-6 py-4 whitespace-nowrap">sujalrakshe05@gmail.com</td>
       <td className="text-left px-6 py-4 whitespace-nowrap"> 
        <a> Edit 📝</a>
        <a> Delete 🗑️ </a>
       </td>
        </tr>
       
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default EmployeeList
