import Link from "next/link";
import Counter from "@/components/counter";

async function getEmployees(){
  const res = await fetch(`http://localhost:3004/employeesss`);
  if(!res.ok){
    throw new Error('Could not find employees')
  }
  return res.json();
}


export default async function Home() {
  const employees = await getEmployees();
  const showEmployees = employees.map(employee=>(
    <div key={employee.id} className="col">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
            {employee.fullname}
          </h3>
          <p className="card-text">{employee.position}</p>
          <p className="card-text">{employee.age}</p>
          <Link href={`/employees/${employee.id}`} className="btn btn-primary">Go to employee</Link>
        </div>
      </div>
    </div>
  ))

  // const counterTrigger = async() => {
  //   'use server'
  //   console.log('test');
  // }


  return (
   <>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {showEmployees}
    </div>
    <Counter/>
   </>
  );
}
