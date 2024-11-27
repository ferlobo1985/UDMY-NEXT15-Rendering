import Link from 'next/link'

export default function EmployeeNotFound(){
    return(
        <div>
            <h1>Sorry, employee not found</h1>
            <Link href="/">Back home</Link>
        </div>
    )
}