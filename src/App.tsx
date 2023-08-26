import { useState } from 'react';
import './App.css';
import { Employee } from './EmployeeType';
import axios from 'axios';

function App() {

  const baseUrl = 'http://localhost:8080/api/employee';
  const [data, setData] = useState<{Employee: []}>({Employee: []});

  const fetchEmployees = async () => {

    await axios.get(baseUrl + "/all")
      .then(response => {
        setData(response.data);
        console.log(data);
      }).catch(error => {

      });
  }

  return (
    <div>
      <button onClick={() => fetchEmployees()}>Fetch Employees</button>

      <div>{data.Employee}</div>
    </div>
  );
}

export default App;
