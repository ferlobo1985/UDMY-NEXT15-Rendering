import { notFound } from "next/navigation";
import Link from 'next/link';
import { deleteEmployee } from "@/helpers/actions";

// export const dynamic = 'force-static';

async function getEmployee(ID){
  const res = await fetch(`http://localhost:3004/employees/${ID}`);
  if(!res.ok){
    // throw new Error('Could not find employee')
    return notFound()
  }
  return res.json();
}


export default async function EmployeeByID({params}) {
  const ID = (await params).id;
  const employee = await getEmployee(ID);
  const deleteAction = deleteEmployee.bind(null,ID);

  return (
    <>
      <h1>{employee.fullname}</h1>
      <div>
        <h4>Position:{employee.position}</h4>
        <h4>Age:{employee.age}</h4>
      </div>
      <hr/>
      <Link href={`/form/edit/${employee.id}`}>
        Edit employee
      </Link>
      <hr/>
      <form action={deleteAction}>
        <button type="submit">
            Delete user
        </button>
      </form>
    </>
  );
}
  