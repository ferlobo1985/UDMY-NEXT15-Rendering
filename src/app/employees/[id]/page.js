import axios from 'axios'

export default async function EmployeeByID({params}) {
  const ID = (await params).id;
  const employee = await axios.get(`http://localhost:3004/employees/${ID}`);

  return (
    <>
      <h1>{employee.data.fullname}</h1>
      <div>
        <h4>Position:{employee.data.position}</h4>
        <h4>Age:{employee.data.age}</h4>
      </div>
    </>
  );
}
  