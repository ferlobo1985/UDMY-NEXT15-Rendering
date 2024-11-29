import Link from "next/link";
import Counter from "@/components/counter";
import { headers, cookies } from "next/headers"; 

// export const dynamic = 'force-dynamic';
// export const revalidate = 5;

async function getEmployees(){
  // const cookieStore = await cookies();
  // console.log(cookieStore.get('some-cookie'))
  // console.log(cookieStore.getAll().map((cookie)=>{return cookie}))
  // console.log(cookieStore.has('some-cookie'))
  // cookieStore.set('name','value',{secure:true});
  // cookieStore.delete('some-cookie')

  // const headersList = (await headers());
  // const userAuth = headersList.entries();
  // headersList.forEach((value,key)=>{
  //   console.log(value,'=', key)
  // })
  // const hasHeader = headersList.has("Content-Type");
  //console.log(headersList.keys())
  // console.log(headersList.values());

  const res = await fetch(`http://localhost:3004/employees`);
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
